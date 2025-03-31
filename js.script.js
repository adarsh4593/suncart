document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
    const cartCountDisplay = document.getElementById("cart-count");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartCountDisplay.textContent = cartCount;
            alert(`${button.getAttribute("data-name")} added to cart!`);
        });
    });
});
