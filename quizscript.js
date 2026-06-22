// ==========================================================================
// BURGER MENU LOGIC
// ==========================================================================
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        if (navMenu.classList.contains("active")) {
            burgerBtn.textContent = "×";
        } else {
            burgerBtn.textContent = "☰";
        }
    });
}

// ==========================================================================
// 1. KOMPLETTE QUIZ-DATENBANK (Nur GESCHICHTE - Genau 10 Fragen)
// ==========================================================================
const fragen = [
    {
        frage: "In welchem Jahr fand die erste Fußball-Weltmeisterschaft statt?",
        antworten: ["1920", "1930", "1950", "1966"],
        richtig: 1 // 1930
    },
    {
        frage: "In welchem Land wurde die erste Fußball-WM ausgetragen?",
        antworten: ["Brasilien", "Uruguay", "Deutschland", "Italien"],
        richtig: 1 // Uruguay
    },
    {
        frage: "Welche Nation hat bis heute die meisten WM-Titel im Männerfußball gewonnen?",
        antworten: ["Deutschland", "Italien", "Argentinien", "Brasilien"],
        richtig: 3 // Brasilien (5 Titel)
    },
    {
        frage: "Wer ist mit 16 Toren der ewige Top-Torschütze der WM-Geschichte?",
        antworten: ["Ronaldo (Brasilien)", "Miroslav Klose", "Gerd Müller", "Lionel Messi"],
        richtig: 1 // Miroslav Klose
    },
    {
        frage: "Wo fand die legendäre Fußball-WM im Jahr 2006 statt?",
        antworten: ["Deutschland", "Frankreich", "Italien", "Südafrika"],
        richtig: 0 // Deutschland
    },
    {
        frage: "Welcher Spieler erzielte das berühmte 'Hand Gottes'-Tor bei der WM 1986?",
        antworten: ["Pelé", "Diego Maradona", "Zinedine Zidane", "Luis Suárez"],
        richtig: 1 // Diego Maradona
    },
    {
        frage: "Wie viele offizielle WM-Titel hat die deutsche Nationalmannschaft bisher gewonnen?",
        antworten: ["3 Titel", "4 Titel", "5 Titel", "2 Titel"],
        richtig: 1 // 4 Titel
    },
    {
        frage: "Welcher legendäre Spieler gewann als Einziger dreimal die WM als Spieler?",
        antworten: ["Pelé", "Franz Beckenbauer", "Diego Maradona", "Ronaldo"],
        richtig: 0 // Pelé
    },
    {
        frage: "Welches Land wurde 2010 in Südafrika zum ersten Mal Weltmeister?",
        antworten: ["Niederlande", "Spanien", "Portugal", "Argentinien"],
        richtig: 1 // Spanien
    },
    {
        frage: "Welche Nation ist die einzige, die an absolut jeder WM-Endrunde teilgenommen hat?",
        antworten: ["Deutschland", "Italien", "Brasilien", "Frankreich"],
        richtig: 2 // Brasilien
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
if (buttons) {
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
}

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
if (buttons && frageText) {
    buttons.forEach(btn => btn.style.display = "flex"); 
    zeigeFrage();
}