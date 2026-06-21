const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");


    if (navMenu.classList.contains("active")) {
        burgerBtn.textContent = "×";
    } else {
        burgerBtn.textContent = "☰";
    }

});


// quiz geschichte
const richtigeAntworten = [
"Uruguay",
"Brasilien",
"1954",
"Miroslav Klose",
"Frankreich",
"Deutschland",
"Spanien",
"Argentinien",
"Kroatien",
"England"
];



