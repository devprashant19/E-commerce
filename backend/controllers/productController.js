const db = require("../config/db");

// helper functions
const {
    safeNumber,
    safeInteger,
    sanitizeString,
    getPagination,
    buildPaginationMeta,
    safeArray
} = require("../utils/helpers");

// get all products
const getProducts = (req, res) => {

    const {
        page,
        limit,
        offset
    } = getPagination(
        req.query.page,
        req.query.limit,
        50
    );

    const search =
        req.query.search
            ? `%${sanitizeString(
                req.query.search
            )}%`
            : null;

    let query = `
        SELECT
            id,
            name,
            description,
            price,
            image,
            category,
            stock,
            featured
        FROM products
    `;

    const params = [];

    // query conditions
    const conditions = [];

    // category filter
    if (
        req.query.category
    ) {

        conditions.push(
            "category = ?"
        );

        params.push(
            sanitizeString(
                req.query.category
            )
        );
    }

    // featured filter
    if (
        req.query.featured === "true"
    ) {

        conditions.push(
            "featured = 1"
        );
    }

    // search filter
    if (
        search
    ) {

        conditions.push(
            "name LIKE ?"
        );

        params.push(
            search
        );
    }

    // build where clause
    if (
        conditions.length
    ) {

        query += `
            WHERE ${conditions.join(" AND ")}
        `;
    }

    const countQuery = `
        SELECT COUNT(*) AS total
        FROM products
        ${conditions.length
            ? `WHERE ${conditions.join(" AND ")}`
            : ""
        }
    `;

    db.query(
        countQuery,
        params,
        (
            countError,
            countResults
        ) => {

            if (
                countError
            ) {

                console.error(
                    countError
                );

                return res.status(500)
                    .json({
                        success: false,
                        message:
                            "Server error"
                    });
            }

            const total =
                Number(
                    countResults?.[0]?.total || 0
                );

            query += `
                ORDER BY id DESC
                LIMIT ?
                OFFSET ?
            `;

            const finalParams = [
                ...params,
                limit,
                offset
            ];

            db.query(
                query,
                finalParams,
                (
                    error,
                    results
                ) => {

                    if (
                        error
                    ) {

                        console.error(
                            error
                        );

                        return res.status(500)
                            .json({
                                success: false,
                                message:
                                    "Server error"
                            });
                    }

                    res.status(200)
                        .json({
                            success: true,

                            page,

                            limit,

                            total,

                            ...buildPaginationMeta(
                                total,
                                page,
                                limit
                            ),

                            count:
                                Array.isArray(
                                    results
                                )
                                    ? results.length
                                    : 0,

                            products:
                                safeArray(
                                    results
                                )
                        });
                }
            );
        }
    );
};

// get single product
const getSingleProduct = (req, res) => {
    const id =
        safeInteger(
            req.params.id
        );

    if (!id) {
        return res.status(400)
            .json({
                success: false,
                message:
                    "Invalid product ID"
            });
    }

    const query = `
        SELECT
            id,
            name,
            description,
            price,
            image,
            category,
            stock,
            featured
        FROM products
        WHERE id = ?
    `;

    db.query(query, [id], (error, results) => {
        if (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message: "Server error"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            product: results[0]
        });
    });
};

// create product
const createProduct = (req, res) => {
    const {
        name,
        description,
        price,
        image,
        category,
        stock,
        featured
    } = req.body;

    // basic validation
    if (!name || price === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name and price are required"
        });
    }

    if (
        safeNumber(price) <= 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid product price"
        });
    }

    const query = `
        INSERT INTO products
        (name, description, price, image, category, stock, featured)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        query,
        [
            sanitizeString(name),
            description || "",
            safeNumber(price),
            sanitizeString(image),
            sanitizeString(category),
            Math.max(
                0,
                safeInteger(stock)
            ),
            featured === true
            || featured === 1
            || featured === "1"
                ? 1
                : 0
        ],
        (error, result) => {
            if (error) {
                console.error(error);

                return res.status(500).json({
                    success: false,
                    message: "Server error"
                });
            }

            res.status(201).json({
                success: true,
                message: "Product created successfully",
                productId: result.insertId
            });
        }
    );
};

// update product
const updateProduct = (req, res) => {
    const id =
        safeInteger(
            req.params.id
        );

    const {
        name,
        description,
        price,
        image,
        category,
        stock,
        featured
    } = req.body;

    if (!id) {
        return res.status(400)
            .json({
                success: false,
                message:
                    "Invalid product ID"
            });
    }

    // basic validation
    if (!name || price === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name and price are required"
        });
    }

    if (
        safeNumber(price) <= 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid product price"
        });
    }

    const query = `
        UPDATE products
        SET
            name = ?,
            description = ?,
            price = ?,
            image = ?,
            category = ?,
            stock = ?,
            featured = ?
        WHERE id = ?
    `;

    db.query(
        query,
        [
            sanitizeString(name),
            description || "",
            safeNumber(price),
            sanitizeString(image),
            sanitizeString(category),
            Math.max(
                0,
                safeInteger(stock)
            ),
            featured === true
            || featured === 1
            || featured === "1"
                ? 1
                : 0,
            id
        ],
        (error, result) => {
            if (error) {
                console.error(error);

                return res.status(500).json({
                    success: false,
                    message: "Server error"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
            }

            res.status(200).json({
                success: true,
                message: "Product updated successfully"
            });
        }
    );
};

// delete product
const deleteProduct = (req, res) => {
    const id =
        safeInteger(
            req.params.id
        );

    if (!id) {
        return res.status(400)
            .json({
                success: false,
                message:
                    "Invalid product ID"
            });
    }

    const query = "DELETE FROM products WHERE id = ?";

    db.query(query, [id], (error, result) => {
        if (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message: "Server error"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    });
};

module.exports = {
    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
};