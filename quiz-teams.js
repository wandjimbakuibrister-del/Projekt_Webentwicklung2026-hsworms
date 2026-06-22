const quizDatenTeams = [
    {
        frage: "Wie viele Mannschaften spielen ab 2026 in einer einzelnen Vorrundengruppe?",
        antworten: ["3 Teams", "4 Teams", "5 Teams", "6 Teams"],
        korrekt: "4 Teams"
    },
    {
        frage: "Welche drei Teams sind as Gastgeber automatisch für die WM 2026 qualifiziert?",
        antworten: ["USA, Brasilien, Argentinien", "USA, Kanada, Mexiko", "Mexiko, Kanada, England", "USA, Kolumbien, Mexiko"],
        korrekt: "USA, Kanada, Mexiko"
    },
    {
        frage: "Wie viele Gruppen wird es in der Vorrunde der WM 2026 insgesamt geben?",
        antworten: ["8 Gruppen", "12 Gruppen", "16 Gruppen", "10 Gruppen"],
        korrekt: "12 Gruppen"
    },
    {
        frage: "Aus welchem Kontinentalverband (Konföderation) qualifiziert sich erstmals ein Team garantiert direkt?",
        antworten: ["OFC (Ozeanien)", "CAF (Afrika)", "CONCACAF (Nordamerika)", "AFC (Asien)"],
        korrekt: "OFC (Ozeanien)"
    },
    {
        frage: "Wie viele Mannschaften aus Südamerika (CONMEBOL) qualifizieren sich direkt für die WM 2026?",
        antworten: ["4 Teams", "5 Teams", "6 Teams", "7 Teams"],
        korrekt: "6 Teams"
    },
    {
        frage: "Welches Land stellte den historischen Rekord auf, als erstes Land dreimal eine WM auszurichten?",
        antworten: ["Deutschland", "USA", "Italien", "Mexiko"],
        korrekt: "Mexiko"
    },
    {
        frage: "Über welches Turnier werden die allerletzten zwei Startplätze für die WM 2026 vergeben?",
        antworten: ["Nations League", "Interkontinentales Play-off-Turnier", "Copa América", "Gold Cup"],
        korrekt: "Interkontinentales Play-off-Turnier"
    },
    {
        frage: "Welcher Buchstabe wird der allerletzten Vorrundengruppe der WM 2026 zugeordnet sein?",
        antworten: ["Gruppe H", "Gruppe L", "Gruppe P", "Gruppe K"],
        korrekt: "Gruppe L"
    },
    {
        frage: "Wie viele afrikanische Teams (CAF) sind bei der erweiterten WM 2026 direkt dabei?",
        antworten: ["5 Teams", "7 Teams", "9 Teams", "11 Teams"],
        korrekt: "9 Teams"
    },
    {
        frage: "Welcher Verband darf trotz der drei automatischen Plätze reguläre Qualifikationsplätze ausspielen?",
        antworten: ["UEFA", "CONCACAF", "CAF", "CONMEBOL"],
        korrekt: "CONCACAF"
    }
];
// Startet das Quiz-Modul, sobald das DOM der Seite geladen ist
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        if (typeof starteQuizModul === "function") {
            starteQuizModul(quizDatenTeams);
        }
    }, 200);
});