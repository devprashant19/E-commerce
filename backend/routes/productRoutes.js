const express =
    require("express");

const router =
    express.Router();

const {
    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require(
    "../controllers/productController"
);

const authMiddleware =
    require(
        "../middleware/authMiddleware"
    );

const {
    authorizeRoles
} = authMiddleware;

const {
    sanitizeString,
    safeNumber
} = require(
    "../utils/helpers"
);

// validate product id
router.param(
    "id",
    (
        req,
        res,
        next,
        id
    ) => {

        const parsedId =
            parseInt(
                id,
                10
            );

        if (
            !parsedId
            || parsedId < 1
        ) {

            return res.status(400)
                .json({

                    success: false,

                    message:
                        "Invalid product ID"
                });
        }

        req.productId =
            parsedId;

        next();
    }
);

// product api status
router.get(
    "/status/check",
    (
        req,
        res
    ) => {

        res.status(200)
            .json({

                success: true,

                message:
                    "Product API running"
            });
    }
);

// get all products
router.get(
    "/",
    getProducts
);

// get single product
router.get(
    "/:id",
    getSingleProduct
);

// create product
router.post(
    "/",
    authMiddleware,
    authorizeRoles(
        "admin"
    ),
    (
        req,
        res,
        next
    ) => {

        const {
            name,
            category,
            price,
            stock
        } = req.body;

        // validate name
        if (
            !sanitizeString(
                name
            )
        ) {

            return res.status(400)
                .json({

                    success: false,

                    message:
                        "Product name is required"
                });
        }

        // validate category
        if (
            !sanitizeString(
                category
            )
        ) {

            return res.status(400)
                .json({

                    success: false,

                    message:
                        "Product category is required"
                });
        }

        // validate price
        if (
            safeNumber(
                price
            ) < 0
        ) {

            return res.status(400)
                .json({

                    success: false,

                    message:
                        "Price must be valid"
                });
        }

        // validate stock
        if (
            safeNumber(
                stock
            ) < 0
        ) {

            return res.status(400)
                .json({

                    success: false,

                    message:
                        "Stock must be valid"
                });
        }

        next();
    },
    createProduct
);

// update product
router.put(
    "/:id",
    authMiddleware,
    authorizeRoles(
        "admin"
    ),
    (
        req,
        res,
        next
    ) => {

        const {
            name,
            category,
            price,
            stock
        } = req.body;

        // validate name
        if (
            name !== undefined
            &&
            !sanitizeString(
                name
            )
        ) {

            return res.status(400)
                .json({

                    success: false,

                    message:
                        "Product name cannot be empty"
                });
        }

        // validate category
        if (
            category !== undefined
            &&
            !sanitizeString(
                category
            )
        ) {

            return res.status(400)
                .json({

                    success: false,

                    message:
                        "Category cannot be empty"
                });
        }

        // validate price
        if (
            price !== undefined
            &&
            safeNumber(
                price
            ) < 0
        ) {

            return res.status(400)
                .json({

                    success: false,

                    message:
                        "Price cannot be negative"
                });
        }

        // validate stock
        if (
            stock !== undefined
            &&
            safeNumber(
                stock
            ) < 0
        ) {

            return res.status(400)
                .json({

                    success: false,

                    message:
                        "Stock cannot be negative"
                });
        }

        next();
    },
    updateProduct
);

// delete product
router.delete(
    "/:id",
    authMiddleware,
    authorizeRoles(
        "admin"
    ),
    deleteProduct
);

// route fallback
router.use(
    (
        req,
        res
    ) => {

        res.status(404)
            .json({

                success: false,

                message:
                    "Product route not found"
            });
    }
);

module.exports =
    router;