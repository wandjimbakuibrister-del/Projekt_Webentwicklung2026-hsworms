// ==========================================================================
// 1. KOMPLETTE QUIZ-DATENBANK (Genau 10 Fragen für Teams)
// ==========================================================================
const fragen = [
    {
        frage: "Wie viele Teams nehmen ab der WM 2026 insgesamt an der Endrunde teil?",
        antworten: ["32 Teams", "40 Teams", "48 Teams", "64 Teams"],
        richtig: 2
    },
    {
        frage: "In wie viele Gruppen werden die Teams in der Vorrunde der WM 2026 aufgeteilt?",
        antworten: ["8 Gruppen", "12 Gruppen", "16 Gruppen", "10 Gruppen"],
        richtig: 1
    },
    {
        frage: "Wie viele Mannschaften qualifizieren sich aus jeder Gruppe für die K.-o.-Runde?",
        antworten: ["Nur der Gruppensieger", "Die besten 2 Teams", "Die besten 2 Teams + die 8 besten Gruppendritten", "Die besten 3 Teams"],
        richtig: 2
    },
    {
        frage: "Welche neue K.-o.-Runde wird es aufgrund der 48 Teams ab 2026 zum ersten Mal geben?",
        antworten: ["Achtelfinale", "Sechzehntelfinale", "Zwischenrunde", "Viertelfinale"],
        richtig: 1
    },
    {
        frage: "Wie viele Spiele bestreitet der neue Weltmeister im gesamten Turnierverlauf?",
        antworten: ["7 Spiele", "8 Spiele", "6 Spiele", "9 Spiele"],
        richtig: 1
    },
    {
        frage: "Wie viele Spiele werden bei der WM 2026 insgesamt ausgetragen?",
        antworten: ["64 Spiele", "80 Spiele", "104 Spiele", "112 Spiele"],
        richtig: 2
    },
    {
        frage: "Wie viele Mannschaften spielen pro Gruppe in der Vorrunde?",
        antworten: ["3 Teams", "4 Teams", "5 Teams", "6 Teams"],
        richtig: 1
    },
    {
        frage: "Welche Nation ist die einzige, die an absolut JEDER WM-Endrunde teilgenommen hat?",
        antworten: ["Deutschland", "Italien", "Argentinien", "Brasilien"],
        richtig: 3
    },
    {
        frage: "Sind die drei Gastgeberländer automatisch für das Turnier qualifiziert?",
        antworten: ["Ja, alle drei", "Nein, keines", "Nur die USA", "Nur Mexiko und die USA"],
        richtig: 0
    },
    {
        frage: "Welches Team gilt als der kleinste Debütant in der Geschichte der WM 2026?",
        antworten: ["Island", "Curaçao", "Jamaika", "Neuseeland"],
        richtig: 1
    }
];

// ==========================================================================
// 2. HTML-ELEMENTE SELEKTIEREN
// ==========================================================================
const frageText = document.querySelector(".quiz-frage");
const buttons = document.querySelectorAll(".antwort-btn");
const pruefenBtn = document.querySelector(".pruefen-btn");
const statusText = document.querySelector(".frage-status span");
const progressIndicator = document.querySelector(".progress");
const punkteZaehler = document.querySelector(".punkte-box strong");

// STATE VARIABLES
let aktuelleFrageIndex = 0;
let punkte = 0;
let gewaehlteAntwortIndex = null;

// ==========================================================================
// 3. QUIZ FUNCTIONS
// ==========================================================================
function zeigeFrage() {
    gewaehlteAntwortIndex = null; 
    if (pruefenBtn) pruefenBtn.textContent = "Antwort prüfen"; 
    
    let aktuelleFrage = fragen[aktuelleFrageIndex];
    
    if (frageText && aktuelleFrage) frageText.textContent = aktuelleFrage.frage;
    
    buttons.forEach((button, i) => {
        const antwortText = button.querySelector("span:last-child");
        if (antwortText && aktuelleFrage.antworten[i]) {
            antwortText.textContent = aktuelleFrage.antworten[i];
        }
        button.style.backgroundColor = ""; 
        button.style.borderColor = "";
    });

    if (statusText) statusText.textContent = `Frage ${aktuelleFrageIndex + 1} von 10`;
    let prozent = ((aktuelleFrageIndex + 1) / 10) * 100;
    if (progressIndicator) progressIndicator.style.width = `${prozent}%`;
}

// Klick-Events für Antwort-Buttons
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.style.borderColor = "rgba(255, 215, 0, 0.25)";
            btn.style.backgroundColor = "transparent";
        });

        button.style.borderColor = "gold";
        button.style.backgroundColor = "rgba(255, 215, 0, 0.1)";
        gewaehlteAntwortIndex = index;
    });
});

// Klick-Event für den Prüfen / Weiter Button
if (pruefenBtn) {
    pruefenBtn.addEventListener("click", () => {
        if (pruefenBtn.textContent === "Quiz neu starten") {
            aktuelleFrageIndex = 0;
            punkte = 0;
            if (punkteZaehler) punkteZaehler.textContent = punkte;
            buttons.forEach(btn => btn.style.display = "flex"); 
            zeigeFrage();
            return;
        }

        if (pruefenBtn.textContent === "Nächste Frage") {
            aktuelleFrageIndex++;
            if (aktuelleFrageIndex < 10) {
                zeigeFrage();
            } else {
                if (frageText) frageText.textContent = `🎉 Quiz beendet! Du hast ${punkte} von 100 Punkten erreicht.`;
                if (statusText) statusText.textContent = "Fertig!";
                pruefenBtn.textContent = "Quiz neu starten";
                buttons.forEach(btn => btn.style.display = "none");
            }
            return;
        }

        if (gewaehlteAntwortIndex === null) {
            alert("Bitte wähle zuerst eine Antwort aus!");
            return;
        }

        let korrekterIndex = fragen[aktuelleFrageIndex].richtig;

        if (gewaehlteAntwortIndex === korrekterIndex) {
            buttons[gewaehlteAntwortIndex].style.backgroundColor = "rgba(0, 200, 0, 0.3)";
            buttons[gewaehlteAntwortIndex].style.borderColor = "green";
            punkte += 10; 
            if (punkteZaehler) punkteZaehler.textContent = punkte;
        } else {
            buttons[gewaehlteAntwortIndex].style.backgroundColor = "rgba(200, 0, 0, 0.3)";
            buttons[gewaehlteAntwortIndex].style.borderColor = "red";
            if (buttons[korrekterIndex]) {
                buttons[korrekterIndex].style.backgroundColor = "rgba(0, 200, 0, 0.2)";
                buttons[korrekterIndex].style.borderColor = "green";
            }
        }

        pruefenBtn.textContent = "Nächste Frage";
    });
}

// Initialisierung beim Laden
buttons.forEach(btn => btn.style.display = "flex"); 
zeigeFrage();