let total = 0;

function addToCart(item, price) {
    let cart = document.getElementById("cart-items");

    let li = document.createElement("li");
    li.textContent = item + " - ₹" + price;
    cart.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}

function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

function searchFood() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".food-card");

    cards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

/* ✅ DARK MODE FIX */
document.addEventListener("DOMContentLoaded", function () {
    let toggle = document.getElementById("theme-toggle");

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            toggle.textContent = "☀️";
        } else {
            toggle.textContent = "🌙";
        }
    });
});