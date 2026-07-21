// menu toggle
document.getElementById("menu").onclick = function () {
  document.querySelector(".nav").classList.toggle("show");
};


// dark / light mode
document.getElementById("theme-toggle").onclick = function () {
  document.body.classList.toggle("light");
};


// BMI calculator
function calculateBMI() {
  let w = document.getElementById("weight").value;
  let h = document.getElementById("Height").value / 100;

  let bmi = w / (h * h);

  document.getElementById("result").innerText =
    "BMI: " + bmi.toFixed(2);
}


// form submit
document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
  alert("Submitted!");
};