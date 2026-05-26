// require auth
const currentUser =
    AppUtils.requireAuth();

if (
    !currentUser
) {

    throw new Error(
        "Authentication required"
    );
}

// get order id from url
const orderId =
    new URLSearchParams(
        window.location.search
    ).get("id");

// invalid access
if (
    !orderId
) {

    AppUtils.notify(
        "Invalid order",
        "error"
    );

    setTimeout(
        () => {

            window.location.href =
                "shop.html";

        },
        1000
    );

    throw new Error(
        "Missing order ID"
    );
}

// elements
const elements = {

    orderId:
        document.getElementById(
            "order-id"
        ),

    orderDate:
        document.getElementById(
            "order-date"
        ),

    successIcon:
        document.querySelector(
            ".success-icon"
        )
};

// fetch order
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

        const order =
            response.order;

        // render order id
        if (
            elements.orderId
        ) {

            elements.orderId.innerText =
                order.id || "N/A";
        }

        // render order date
        if (
            elements.orderDate
        ) {

            elements.orderDate.innerText =
                order.created_at
                    ? new Date(
                        order.created_at
                    ).toLocaleDateString()
                    : "N/A";
        }

    } catch (error) {

        console.error(
            "SUCCESS PAGE ERROR:",
            error
        );

        AppUtils.notify(
            "Failed to load order",
            "error"
        );
    }
}

// success animation
function playSuccessAnimation() {

    if (
        !elements.successIcon
    ) {
        return;
    }

    elements.successIcon.animate(
        [
            {
                transform:
                    "scale(0)"
            },

            {
                transform:
                    "scale(1.1)"
            },

            {
                transform:
                    "scale(1)"
            }
        ],
        {
            duration:
                800,

            easing:
                "ease"
        }
    );
}

// init
document.addEventListener(
    "DOMContentLoaded",
    () => {

        fetchOrder();

        playSuccessAnimation();
    }
);