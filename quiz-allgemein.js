const quizDatenAllgemein = [
    {
        frage: "Wie viele Nationen sind Gastgeber der WM 2026?",
        antworten: ["1", "2", "3", "4"],
        korrekt: "3"
    },
    {
        frage: "Wie viele Nationalteams nehmen insgesamt an der WM 2026 teil?",
        antworten: ["32", "48", "64", "24"],
        korrekt: "48"
    },
    {
        frage: "In welchem Monat beginnt die Fußball-Weltmeisterschaft 2026?",
        antworten: ["Mai", "Juni", "Juli", "August"],
        korrekt: "Juni"
    },
    {
        frage: "Wie viele Spiele werden bei der WM 2026 insgesamt ausgetragen?",
        antworten: ["64", "80", "104", "96"],
        korrekt: "104"
    },
    {
        frage: "Wie viele Mannschaften qualifizieren sich aus jeder Dreiergruppe für die K.-o.-Runde?",
        antworten: ["Es gibt Vierergruppen, die besten 2 plus die 8 besten Dritten", "Nur der Gruppenerste", "Alle drei Teams", "Die beiden Erstplatzierten"],
        korrekt: "Es gibt Vierergruppen, die besten 2 plus die 8 besten Dritten"
    },
    {
        frage: "Welche neue K.-o.-Runde wird 2026 aufgrund der Turniervergrößerung eingeführt?",
        antworten: ["Sechzehntelfinale", "Achtelfinale", "Zwischenrunde", "Viertelfinale"],
        korrekt: "Sechzehntelfinale"
    },
    {
        frage: "Welcher Kontinentalverband stellt mit 16 Startplätzen die meisten Teams?",
        antworten: ["UEFA (Europa)", "CONMEBOL (Südamerika)", "CAF (Afrika)", "AFC (Asien)"],
        korrekt: "UEFA (Europa)"
    },
    {
        frage: "Wie viele Tage wird das gesamte WM-Turnier im Jahr 2026 dauern?",
        antworten: ["28 Tage", "32 Tage", "39 Tage", "45 Tage"],
        korrekt: "39 Tage"
    },
    {
        frage: "Wie hoch ist die maximale Anzahl an Spielen, die ein Finalist 2026 bestreiten muss?",
        antworten: ["7 Spiele", "8 Spiele", "9 Spiele", "6 Spiele"],
        korrekt: "8 Spiele"
    },
    {
        frage: "Welche Abkürzung steht offiziell für das Gastgeber-Trio der WM 2026?",
        antworten: ["NAFTA", "CANMEXUS", "United 2026", "USA-Triple"],
        korrekt: "United 2026"
    }
];

// Tout en bas de quiz-allgemein.js, remplacez le lancement par ceci :
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        if (typeof starteQuizModul === "function") {
            starteQuizModul(quizDatenAllgemein);
        }
    }, 200); // Délai de 200 millisecondes pour laisser le moteur se charger
});