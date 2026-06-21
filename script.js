
// Spielplan Teil 1
// Mehr anzeigen

function toggleSpiele(buttonId, spieleKlasse) {
    const button = document.getElementById(buttonId);
    const extraSpiele = document.querySelectorAll(spieleKlasse);

    let sichtbar = false;
    const is_computer = window.innerWidth >= 561;
    let sichtbar_mehranzeigen = 0;

    if (is_computer && extraSpiele.length > 0) {
        const anzahlSichtbar = Math.min(8, extraSpiele.length);

        for (let i = 0; i < anzahlSichtbar; i++) {
            extraSpiele[i].style.display = "block";
        }

        sichtbar_mehranzeigen = anzahlSichtbar;
    }

    if (button) {
        button.addEventListener("click", function () {
            if (sichtbar === false) {
                extraSpiele.forEach(function (spiel) {
                    spiel.style.display = "block";
                });

                button.textContent = "Weniger zeigen";
                sichtbar = true;
            } else {
                extraSpiele.forEach(function (spiel, index) {
                    if (index < sichtbar_mehranzeigen) {
                        spiel.style.display = "block";
                    } else {
                        spiel.style.display = "none";
                    }
                });

                button.textContent = "Mehr Spiele anzeigen";
                sichtbar = false;

                const section = button.closest(".spielplan-section");

                if (section) {
                    section.scrollIntoView({
                        behavior: "auto",
                        block: "start"
                    });
                }
            }
        });
    }
}

toggleSpiele("mehrSpieleBtn", ".extra-spiel");
toggleSpiele("mehrSpieleBtn2", ".extra-spiel2");
// Burger-Menü

const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", function () {
navMenu.classList.toggle("active");


if (navMenu.classList.contains("active")) {
    burgerBtn.textContent = "×";
} else {
    burgerBtn.textContent = "☰";
}

});

// countdown

const startDatum = new Date("June 11, 2026 21:00:00").getTime();
const finaleDatum = new Date("July 19, 2026 21:00:00").getTime();

function countdownAktualisieren() {
    const jetzt = new Date().getTime();

    let zielDatum;
    let titelText;

    // Countdown zum Start und wenn schon vorbei Contdown zum Finale

    if (jetzt < startDatum) {
        zielDatum = startDatum;
        titelText = "Countdown zur Fußball-Weltmeisterschaft 2026";
    } else if (jetzt < finaleDatum && jetzt > startDatum) {
        zielDatum = finaleDatum;
        titelText = "Countdown zum Finale der Fußball-Weltmeisterschaft 2026";
    } else {
        zielDatum = null;
        titelText = "Die Fußball-Weltmeisterschaft 2026 ist vorbei";
    }

    const countdownTitel = document.getElementById("countdownTitel");

    if (countdownTitel) {
        countdownTitel.textContent = titelText;
    }

    if (zielDatum === null) {
        document.getElementById("tage").textContent = "00";
        document.getElementById("stunden").textContent = "00";
        document.getElementById("minuten").textContent = "00";
        document.getElementById("sekunden").textContent = "00";
        return;
    }

    const abstand = zielDatum - jetzt;
    //math.floor rundet eine Zahl runter.
    const tage = Math.floor(abstand / (1000 * 60 * 60 * 24));
    const stunden = Math.floor((abstand % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuten = Math.floor((abstand % (1000 * 60 * 60)) / (1000 * 60));
    const sekunden = Math.floor((abstand % (1000 * 60)) / 1000);

    document.getElementById("tage").textContent = tage;
    document.getElementById("stunden").textContent = stunden;
    document.getElementById("minuten").textContent = minuten;
    document.getElementById("sekunden").textContent = sekunden;
}

setInterval(countdownAktualisieren, 1000);//aktualisiert den Countdown jede Sekunde

countdownAktualisieren();


// Quiz