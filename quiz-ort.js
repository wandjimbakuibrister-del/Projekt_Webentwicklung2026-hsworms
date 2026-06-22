const quizDatenOrt = [
    {
        frage: "In welchem Stadion wird das Finale der WM 2026 ausgetragen?",
        antworten: ["MetLife Stadium (New York/New Jersey)", "Aztekenstadion (Mexiko-Stadt)", "SoFi Stadium (Los Angeles)", "AT&T Stadium (Dallas)"],
        korrekt: "MetLife Stadium (New York/New Jersey)"
    },
    {
        frage: "Wie viele Städte sind insgesamt Austragungsorte für die WM 2026?",
        antworten: ["12 Städte", "14 Städte", "16 Städte", "18 Städte"],
        korrekt: "16 Städte"
    },
    {
        frage: "Welches Land stellt mit 11 Stadien die meisten Spielorte des Turniers?",
        antworten: ["Mexiko", "Kanada", "USA", "Keines, alle stellen gleich viele"],
        korrekt: "USA"
    },
    {
        frage: "In welchem weltberühmten Stadion findet das offizielle Eröffnungsspiel statt?",
        antworten: ["Aztekenstadion (Mexiko-Stadt)", "Hard Rock Stadium (Miami)", "BC Place (Vancouver)", "Mercedes-Benz Stadium (Atlanta)"],
        korrekt: "Aztekenstadion (Mexiko-Stadt)"
    },
    {
        frage: "Wie viele Austragungsorte (Städte) befinden sich im Nachbarland Kanada?",
        antworten: ["2 Städte", "3 Städte", "4 Städte", "5 Städte"],
        korrekt: "2 Städte"
    },
    {
        frage: "Welche beiden kanadischen Städte richten die WM-Spiele aus?",
        antworten: ["Montreal & Toronto", "Vancouver & Toronto", "Ottawa & Vancouver", "Calgary & Edmonton"],
        korrekt: "Vancouver & Toronto"
    },
    {
        frage: "Welche mexikanische Stadt ist neben Mexiko-Stadt und Guadalajara der dritte Spielort?",
        antworten: ["Cancún", "Monterrey", "Puebla", "Tijuana"],
        korrekt: "Monterrey"
    },
    {
        frage: "In welcher US-amerikanischen Stadt an der Westküste steht das hochmoderne SoFi Stadium?",
        antworten: ["San Francisco", "Seattle", "Los Angeles", "Las Vegas"],
        korrekt: "Los Angeles"
    },
    {
        frage: "Welches Stadion besitzt die größte Zuschauerkapazität aller WM-Stadien 2026?",
        antworten: ["Aztekenstadion", "MetLife Stadium", "AT&T Stadium (Dallas)", "Arrowhead Stadium (Kansas City)"],
        korrekt: "Aztekenstadion"
    },
    {
        frage: "Welche Region der USA stellt die meisten Austragungsorte?",
        antworten: ["Die Ostküste", "Die Westküste", "Die Zentralregion / der Süden", "Der Nordwesten"],
        korrekt: "Die Ostküste"
    }
];
// Startet das Quiz-Modul, sobald das DOM der Seite geladen ist
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        if (typeof starteQuizModul === "function") {
            starteQuizModul(quizDatenOrt);
        }
    }, 200);
});