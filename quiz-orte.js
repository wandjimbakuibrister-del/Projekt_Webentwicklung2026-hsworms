// ==========================================================================
// 1. KOMPLETTE QUIZ-DATENBANK (Genau 10 Fragen für Spielorte)
// ==========================================================================
const fragen = [
    {
        frage: "Wie viele Nationen sind 2026 gemeinsam Gastgeber der FIFA Weltmeisterschaft?",
        antworten: ["1 Nation", "2 Nationen", "3 Nationen", "4 Nationen"],
        richtig: 2
    },
    {
        frage: "In welchem Stadion wird das große Finale der WM 2026 ausgetragen?",
        antworten: ["MetLife Stadium (New York/New Jersey)", "Aztekenstadion (Mexiko-Stadt)", "SoFi Stadium (Los Angeles)", "AT&T Stadium (Dallas)"],
        richtig: 0
    },
    {
        frage: "Welches historische Stadion wird 2026 das Eröffnungsspiel ausrichten?",
        antworten: ["BC Place (Vancouver)", "Aztekenstadion (Mexiko-Stadt)", "Hard Rock Stadium (Miami)", "NRG Stadium (Houston)"],
        richtig: 1
    },
    {
        frage: "Wie viele kanadische Städte sind offizielle Spielorte der WM 2026?",
        antworten: ["2 Städte", "3 Städte", "4 Städte", "5 Städte"],
        richtig: 0
    },
    {
        frage: "Welches Land stellt mit insgesamt 11 Austragungsorten die meisten Stadien?",
        antworten: ["Mexiko", "Kanada", "USA", "Alle gleich viele"],
        richtig: 2
    },
    {
        frage: "Wie viele offizielle Austragungsstädte (Host Cities) gibt es insgesamt bei der WM 2026?",
        antworten: ["12 Städte", "16 Städte", "20 Städte", "24 Städte"],
        richtig: 1
    },
    {
        frage: "Welches Stadion hat die größte Kapazität bei der WM 2026 (über 87.000 Plätze)?",
        antworten: ["Aztekenstadion (Mexiko-Stadt)", "MetLife Stadium (New York)", "BMO Field (Toronto)", "Lumen Field (Seattle)"],
        richtig: 0
    },
    {
        frage: "In welcher US-Stadt steht das Hard Rock Stadium, ein Austragungsort der WM 2026?",
        antworten: ["Miami", "Atlanta", "Boston", "Houston"],
        richtig: 0
    },
    {
        frage: "Welches Land wird 2026 zum DRITTEN Mal in seiner Geschichte Spiele einer Männer-WM ausrichten?",
        antworten: ["USA", "Kanada", "Mexiko", "Keines"],
        richtig: 2
    },
    {
        frage: "Welche kanadische Stadt nutzt das Stadion 'BMO Field' für die WM-Spiele?",
        antworten: ["Vancouver", "Montreal", "Toronto", "Ottawa"],
        richtig: 2
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