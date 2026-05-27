// current order
let currentOrder =
    null;

// get order id from url
const orderId =
    new URLSearchParams(
        window.location.search
    ).get("id");

// redirect if missing order id
if (
    !orderId
) {

    window.location.href =
        "shop.html";
}

// escape html
function escapeHTML(
    value
) {

    return String(
        value || ""
    )

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}

// elements
const elements = {

    orderItemsContainer:
        document.getElementById(
            "order-items-container"
        ),

    orderId:
        document.getElementById(
            "order-id"
        ),

    orderDate:
        document.getElementById(
            "order-date"
        ),

    statusBadge:
        document.getElementById(
            "status-badge"
        ),

    processingStep:
        document.getElementById(
            "processing-step"
        ),

    shippedStep:
        document.getElementById(
            "shipped-step"
        ),

    deliveredStep:
        document.getElementById(
            "delivered-step"
        )
};

// fetch order details
async function fetchOrder() {

    try {

        const response =
            await AppUtils.apiRequest(
                `/orders/${orderId}`
            );

        if (
            !response.success
            ||
            !response.order
        ) {

            AppUtils.notify(
                "Order not found",
                "error"
            );

            setTimeout(
                () => {

                    window.location.href =
                        "shop.html";

                },
                1000
            );

            return;
        }

        currentOrder =
            response.order;

        renderOrderDetails();

        renderOrderItems();

    } catch (error) {

        console.error(
            "ORDER FETCH ERROR:",
            error
        );

        AppUtils.notify(
            "Failed to load order",
            "error"
        );
    }
}

// render order details
function renderOrderDetails() {

    if (
        !currentOrder
    ) {
        return;
    }

    if (
        elements.orderId
    ) {

        elements.orderId.innerText =
            currentOrder.id || "N/A";
    }

    if (
        elements.orderDate
    ) {

        const formattedDate =
            currentOrder.created_at
                ? new Date(
                    currentOrder.created_at
                ).toLocaleDateString()
                : "N/A";

        elements.orderDate.innerText =
            formattedDate;
    }

    // status
    const status =
        currentOrder.status ||
        "pending";

    if (
        elements.statusBadge
    ) {

        elements.statusBadge.innerText =
            status;

        elements.statusBadge.className =
            "status-badge";

        elements.statusBadge.classList.add(
            status.toLowerCase()
        );
    }

    // timeline
    if (
        [
            "processing",
            "shipped",
            "delivered"
        ].includes(status.toLowerCase())
    ) {

        elements.processingStep?.classList.add(
            "active-step"
        );
    }

    if (
        [
            "shipped",
            "delivered"
        ].includes(status.toLowerCase())
    ) {

        elements.shippedStep?.classList.add(
            "active-step"
        );
    }

    if (
        status.toLowerCase() === "delivered"
    ) {

        elements.deliveredStep?.classList.add(
            "active-step"
        );
    }
}
// render items
function renderOrderItems() {
    if (
        !elements.orderItemsContainer
    ) {
        return;
    }
    elements.orderItemsContainer.innerHTML =
        "";

    const items =
        currentOrder.items || [];

    if (
        !Array.isArray(items)
        ||
        items.length === 0
    ) {
        elements.orderItemsContainer.innerHTML =
            `
                <p class="empty-order-items">
                    No items found.
                </p>
            `;
        return;
    }

    const fragment =
        document.createDocumentFragment();

    items.forEach(
        (item) => {
            const qty =
                parseInt(
                    item.qty,
                    10
                ) || 1;

            const price =
                parseFloat(
                    item.price
                ) || 0;

            const total =
                qty * price;

            const div =
                document.createElement(
                    "div"
                );

            div.classList.add(
                "order-item"
            );

            div.innerHTML =
                `
                    <div class="order-item-left">
                        <img
                            src="${escapeHTML(
                                AppUtils.defaultImage(
                                    item.img || item.image
                                )
                            )}"
                            alt="${escapeHTML(item.name || "Product")}"
                            loading="lazy"
                        >
                        <div>
                            <h4>
                                ${escapeHTML(item.name || "Product")}
                            </h4>
                            <p>
                                Quantity:
                                ${qty}
                            </p>
                        </div>
                    </div>
                    <h4>
                        ${AppUtils.formatPrice(total)}
                    </h4>
                `;
            fragment.appendChild(
                div
            );
        }
    );
    elements.orderItemsContainer.appendChild(
        fragment
    );
}

// init
document.addEventListener(
    "DOMContentLoaded",
    () => {

        fetchOrder();
    }
);