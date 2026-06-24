// =========================================================================
// ZENTRALER QUIZ-MOTOR: Initialisiert und steuert die Quiz-Abläufe
// =========================================================================

function starteQuizModul(gewählteQuizDaten) {
const frageTextElement = document.querySelector(".quiz-frage");
const antwortButtons = document.querySelectorAll(".antwort-btn");
const pruefenBtn = document.querySelector(".pruefen-btn");
const frageStatusText = document.querySelector(".frage-status span");
const progressBar = document.querySelector(".progress");
const punkteAnzeige = document.querySelector(".punkte-box strong");

// Abbruch, wenn die Elemente auf der Seite fehlen
if (!frageTextElement || !antwortButtons.length) return;

let aktuelleFrageIndex = 0;
let gesamtPunkte = 0;
let ausgewählteAntwort = null;

// Sounds für richtige und falsche Antwort
const soundRichtig = new Audio("./audio/richtig.wav");
const soundFalsch = new Audio("./audio/falsch.wav");

soundRichtig.volume = 1;
soundFalsch.volume = 1;

function frageLaden() {
    ausgewählteAntwort = null;

    if (pruefenBtn) {
        pruefenBtn.textContent = "Antwort prüfen";
        pruefenBtn.disabled = true;
    }

    const aktuelleFrage = gewählteQuizDaten[aktuelleFrageIndex];
    frageTextElement.textContent = aktuelleFrage.frage;

    if (frageStatusText) {
        frageStatusText.textContent = `Frage ${aktuelleFrageIndex + 1} von ${gewählteQuizDaten.length}`;
    }

    const progressProzent = ((aktuelleFrageIndex + 1) / gewählteQuizDaten.length) * 100;

    if (progressBar) {
        progressBar.style.width = `${progressProzent}%`;
    }

    antwortButtons.forEach((btn, index) => {
        btn.classList.remove("selected", "correct", "wrong");
        btn.disabled = false;

        const textSpan = btn.querySelector("span:not(.buchstabe)");

        if (textSpan) {
            textSpan.textContent = aktuelleFrage.antworten[index];
        }

        btn.onclick = () => {
            antwortAuswählen(btn, aktuelleFrage.antworten[index]);
        };
    });
}

function antwortAuswählen(gewählterBtn, antwortText) {
    antwortButtons.forEach(btn => btn.classList.remove("selected"));

    gewählterBtn.classList.add("selected");
    ausgewählteAntwort = antwortText;

    if (pruefenBtn) {
        pruefenBtn.disabled = false;
    }
}

if (pruefenBtn) {
    pruefenBtn.addEventListener("click", () => {
        const aktuelleFrage = gewählteQuizDaten[aktuelleFrageIndex];

        // Zur nächsten Frage wechseln
        if (pruefenBtn.textContent === "Nächste Frage") {
            aktuelleFrageIndex++;

            if (aktuelleFrageIndex < gewählteQuizDaten.length) {
                frageLaden();
            }

            return;
        }

        // Quiz beenden
        if (pruefenBtn.textContent === "Ergebnis sehen") {
            quizBeenden();
            return;
        }

        // Antwort prüfen
        antwortButtons.forEach(btn => {
            btn.disabled = true;
        });

        // Richtig oder falsch visuell einfärben
        antwortButtons.forEach(btn => {
            const textSpan = btn.querySelector("span:not(.buchstabe)");

            if (!textSpan) return;

            const antwortText = textSpan.textContent;

            if (antwortText === aktuelleFrage.korrekt) {
                btn.classList.add("correct");
            } else if (btn.classList.contains("selected") && antwortText !== aktuelleFrage.korrekt) {
                btn.classList.add("wrong");
            }
        });

        // Punkte zählen und Sound abspielen
        if (ausgewählteAntwort === aktuelleFrage.korrekt) {
            gesamtPunkte += 5;

            if (punkteAnzeige) {
                punkteAnzeige.textContent = gesamtPunkte;
            }

            soundRichtig.currentTime = 0;
            soundRichtig.play();
            
        } else {
            soundFalsch.currentTime = 0;
            soundFalsch.play();
        }

        // Button-Text für den nächsten Klick ändern
        if (aktuelleFrageIndex === gewählteQuizDaten.length - 1) {
            pruefenBtn.textContent = "Ergebnis sehen";
        } else {
            pruefenBtn.textContent = "Nächste Frage";
        }
    });
}

function quizBeenden() {
    const quizBox = document.querySelector(".quiz-box");
    const maxPunkte = gewählteQuizDaten.length * 5;
    const richtigBeantwortet = gesamtPunkte / 5;

    if (quizBox) {
        quizBox.innerHTML = `
            <div style="text-align: center; padding: 30px; font-family: sans-serif; color: white;">
                <h2 style="color: gold; font-size: 2rem; margin-bottom: 15px;">Quiz beendet!</h2>

                <hr style="border-color: gold; margin-bottom: 20px;">

                <p style="font-size: 1.3rem; margin: 15px 0;">
                    Du hast richtig beantwortet:
                    <br>
                    <strong>${richtigBeantwortet} von ${gewählteQuizDaten.length} Fragen</strong>
                </p>

                <div style="font-size: 2rem; margin: 25px 0; color: #ffcc00;">
                    Dein Punktestand:
                    <strong>${gesamtPunkte} von ${maxPunkte} Punkten</strong>
                </div>

                <button class="pruefen-btn" onclick="location.reload()" type="button"
                    style="width: 250px; display: block; margin: 0 auto; padding: 15px; border: none; border-radius: 10px; background-color: gold; color: rgb(2, 6, 23); font-weight: bold; font-size: 18px; cursor: pointer;">
                    Quiz neustarten
                </button>
            </div>
        `;
    }
}

// Kleine Sicherheitsverzögerung beim ersten Laden
setTimeout(frageLaden, 150);

}
