// validated items
const validatedItems = [];

// secure total
let calculatedTotal = 0;

// validate each item from database
const validationPromises =
    safeArray(
        items
    ).map(
        (
            item
        ) => {

            return new Promise(
                (
                    validationResolve,
                    validationReject
                ) => {

                    const productQuery = `
                        SELECT
                            id,
                            name,
                            price,
                            stock
                        FROM products
                        WHERE id = ?
                        LIMIT 1
                    `;

                    connection.query(
                        productQuery,
                        [
                            item.id
                        ],
                        (
                            productError,
                            productResults
                        ) => {

                            if (
                                productError
                            ) {

                                return validationReject(
                                    productError
                                );
                            }

                            // product not found
                            if (
                                !safeArray(
                                    productResults
                                ).length
                            ) {

                                return validationReject(
                                    new Error(
                                        `Product not found: ${item.id}`
                                    )
                                );
                            }

                            const product =
                                productResults[0];

                            const qty =
                                Math.max(
                                    1,
                                    safeInteger(
                                        item.qty
                                    )
                                );

                            // stock validation
                            if (
                                product.stock < qty
                            ) {

                                return validationReject(
                                    new Error(
                                        `Insufficient stock for ${product.name}`
                                    )
                                );
                            }

                            // secure database price
                            const realPrice =
                                safeNumber(
                                    product.price
                                );

                            const itemTotal =
                                realPrice * qty;

                            // floating point safe total
                            calculatedTotal =
                                Number(
                                    (
                                        calculatedTotal +
                                        itemTotal
                                    ).toFixed(2)
                                );

                            // save validated item
                            validatedItems.push({

                                id:
                                    product.id,

                                name:
                                    sanitizeString(
                                        product.name
                                    ),

                                price:
                                    realPrice,

                                qty,

                                color:
                                    sanitizeString(
                                        item.color
                                    ),

                                size:
                                    sanitizeString(
                                        item.size
                                    )
                            });

                            validationResolve();
                        }
                    );
                }
            );
        }
    );