// Gesch
const fragen = [
    FragenGeschichte = {
        frage: "In welchem Jahr fand die erste Fußball-Weltmeisterschaft statt?",
        antworten: ["1920", "1930", "1950", "1966"],
        richtig: 1
    },
    {
        frage: "In welchem Land fand die erste Fußball-WM statt?",
        antworten: ["Brasilien", "Uruguay", "Deutschland", "Italien"],
        richtig: 1
    },
    {
        frage: "Welches Land gewann die erste Fußball-WM?",
        antworten: ["Argentinien", "Brasilien", "Uruguay", "Frankreich"],
        richtig: 2
    },
    {
        frage: "Welches Land gewann die WM 2014?",
        antworten: ["Brasilien", "Deutschland", "Argentinien", "Spanien"],
        richtig: 1
    },
    {
        frage: "Wo fand die Fußball-WM 2006 statt?",
        antworten: ["Deutschland", "Frankreich", "Italien", "Südafrika"],
        richtig: 0
    },
    {
        frage: "Welches Land gewann die WM 1998?",
        antworten: ["Brasilien", "Deutschland", "Frankreich", "Niederlande"],
        richtig: 2
    },
    {
        frage: "Welches Land gewann die WM 2022?",
        antworten: ["Frankreich", "Argentinien", "Brasilien", "Kroatien"],
        richtig: 1
    },
    {
        frage: "Wo fand die WM 2010 statt?",
        antworten: ["Katar", "Südafrika", "Russland", "Japan"],
        richtig: 1
    },
    {
        frage: "Welches Land hat bisher die meisten Fußball-WM-Titel gewonnen?",
        antworten: ["Deutschland", "Italien", "Argentinien", "Brasilien"],
        richtig: 3
    },
    {
        frage: "Welches Land gewann die WM 2018?",
        antworten: ["Frankreich", "Kroatien", "Belgien", "England"],
        richtig: 0
    }
];
const frageText=document.querySelector(".quiz-frage");
const buttons=document.querySelectorAll(".antwort-btn");

const pruefenBtn=document.getElementsByClassName("pruefen-btn");

frageText.textContent=fragen[1].frage;

buttons.forEach(function(buttons,i){
    const AntwortText=buttons.querySelector("span:last-child");
    AntwortText.textContent=fragen[1].antworten[i];
    
});


// API
const API_KEY = "a5b26a297c234fceb7ec363253d4ed68";


async function loadScores() {
    try {
        const response = await fetch(
            "https://v3.football.api-sports.io/fixtures?live=all",
            {
                headers: {
                    "x-apisports-key": API_KEY
                }
            }
        );

        const data = await response.json();

        const ticker = document.getElementById("ticker");

        ticker.innerHTML = data.response.map(match => `
            <div class="score-box">
                ${match.teams.home.name}
                ${match.goals.home} : ${match.goals.away}
                ${match.teams.away.name}
            </div>
        `).join("");

    } catch (err) {
        console.error(err);
    }
}

loadScores();
setInterval(loadScores, 30000);