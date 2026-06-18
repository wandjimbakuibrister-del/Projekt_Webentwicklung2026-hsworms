const richtig1 = "Antwort1";
const richtig2 = "Antwort7";
let punkte = 0;

// Frage 1
document.getElementById("Antwort1").addEventListener("click", () => pruefLoesung1("Antwort1"));
document.getElementById("Antwort2").addEventListener("click", () => pruefLoesung1("Antwort2"));
document.getElementById("Antwort3").addEventListener("click", () => pruefLoesung1("Antwort3"));
document.getElementById("Antwort4").addEventListener("click", () => pruefLoesung1("Antwort4"));

function pruefLoesung1(loesung) {
    const result = document.getElementById("result");

    if (loesung === richtig1) {
        result.textContent = "Richtig";

        document.getElementById("quiz").style.display = "none";
        document.getElementById("quiz2").style.display = "block";
        punkte++;
    } else {
        result.textContent = "Versuchen Sie es noch einmal";
    }

    let score = document.getElementById("score");
    score.textContent = punkte;
}




// // Frage 2
// document.getElementById("Antwort5").addEventListener("click", () => pruefLoesung2("Antwort5"));
// document.getElementById("Antwort6").addEventListener("click", () => pruefLoesung2("Antwort6"));
// document.getElementById("Antwort7").addEventListener("click", () => pruefLoesung2("Antwort7"));
// document.getElementById("Antwort8").addEventListener("click", () => pruefLoesung2("Antwort8"));

// function pruefLoesung2(loesung) {
//     const result2 = document.getElementById("result2");

//     if (loesung === richtig2) {
//         result2.textContent = "Richtig";
//     } else {
//         result2.textContent = "Versuchen Sie es noch einmal";
//     }
// }