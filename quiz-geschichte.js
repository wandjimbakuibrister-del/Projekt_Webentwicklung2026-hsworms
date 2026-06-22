const quizDatenGeschichte = [
    {
        frage: "Welches Land gewann die erste Fußball-Weltmeisterschaft 1930?",
        antworten: ["Brasilien", "Uruguay", "Deutschland", "Italien"],
        korrekt: "Uruguay"
    },
    {
        frage: "Welches Land hat die Fußball-Weltmeisterschaft bisher am häufigsten gewonnen?",
        antworten: ["Deutschland", "Argentinien", "Brasilien", "Frankreich"],
        korrekt: "Brasilien"
    },
    {
        frage: "In welchem Jahr wurde Deutschland zum ersten Mal Weltmeister?",
        antworten: ["1954", "1974", "1990", "2014"],
        korrekt: "1954"
    },
    {
        frage: "Welcher Spieler erzielte die meisten Tore in der WM-Geschichte?",
        antworten: ["Pelé", "Lionel Messi", "Miroslav Klose", "Cristiano Ronaldo"],
        korrekt: "Miroslav Klose"
    },
    {
        frage: "Welches Land gewann die Fußball-Weltmeisterschaft 2018?",
        antworten: ["Frankreich", "Kroatien", "Argentinien", "Spanien"],
        korrekt: "Frankreich"
    },
    {
        frage: "Welches Land war Gastgeber der Fußball-Weltmeisterschaft 2006?",
        antworten: ["Frankreich", "Deutschland", "Italien", "Spanien"],
        korrekt: "Deutschland"
    },
    {
        frage: "Welches Land gewann die Fußball-Weltmeisterschaft 2010?",
        antworten: ["Deutschland", "Niederlande", "Spanien", "Brasilien"],
        korrekt: "Spanien"
    },
    {
        frage: "Welches Land gewann die Fußball-Weltmeisterschaft 2022?",
        antworten: ["Frankreich", "Brasilien", "Argentinien", "Kroatien"],
        korrekt: "Argentinien"
    },
    {
        frage: "Welches Land erreichte 2018 das WM-Finale gegen Frankreich?",
        antworten: ["Kroatien", "Belgien", "England", "Portugal"],
        korrekt: "Kroatien"
    },
    {
        frage: "Welches Land gewann die Fußball-Weltmeisterschaft 1966?",
        antworten: ["Deutschland", "England", "Italien", "Argentinien"],
        korrekt: "England"
    }
];
// Startet das Quiz-Modul, sobald das DOM der Seite geladen ist
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        if (typeof starteQuizModul === "function") {
            starteQuizModul(quizDatenGeschichte);
        }
    }, 200);
});