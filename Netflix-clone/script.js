// Hero Button Click

const button = document.querySelector(".btn-red");
const input = document.querySelector(".hero input");

button.addEventListener("click", () => {

    const email = input.value.trim();

    if (email === "") {

        alert("Please enter your email.");

    } else {

        alert("Welcome to Netflix!");

    }

});


// Navbar Background Change

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.backgroundColor = "black";

    } else {

        nav.style.backgroundColor = "transparent";

    }

});


// Image Hover Effect

const images = document.querySelectorAll(".secImg img");

images.forEach((image) => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.05)";
        image.style.transition = "0.4s";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});


// Welcome Message

console.log("Welcome to Netflix Clone");