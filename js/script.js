
/* =========================================
   ELEMENTS
========================================= */

const startScreen =
    document.getElementById("startScreen");

const jumpscare =
    document.getElementById("jumpscare");

const jeff =
    document.getElementById("jeff");

const flash =
    document.getElementById("flash");

const redFlash =
    document.getElementById("redFlash");

const blackout =
    document.getElementById("blackout");

const scream =
    document.getElementById("scream");


/* =========================================
   START
========================================= */

startScreen.addEventListener("click", async () => {

    /*
     * Enter fullscreen
     */

    try {

        await document.documentElement.requestFullscreen();

    } catch (error) {

        console.log(
            "Fullscreen unavailable:",
            error
        );

    }


    /*
     * Hide loading screen
     */

    startScreen.style.display = "none";


    /*
     * Prepare audio
     */

    scream.volume = 1.0;

    scream.currentTime = 0;


    /*
     * Start audio
     *
     * The click gives the browser
     * permission to play audio.
     */

    scream.play().catch(error => {

        console.log(
            "Audio blocked:",
            error
        );

    });


    /*
     * Random delay
     *
     * Between 0.8 and 3.3 seconds.
     */

    const delay =
        Math.floor(
            Math.random() * 2500
        ) + 800;


    setTimeout(() => {

        activateScreamer();

    }, delay);

});


/* =========================================
   ACTIVATE JUMPSCARE
========================================= */

function activateScreamer() {

    /*
     * Show Jeff
     */

    jumpscare.style.display = "block";


    /*
     * Change browser title
     */

    document.title = "Jeff";


    /*
     * Zoom into the image
     */

    jeff.classList.add("zoom");


    /*
     * Screen shake
     */

    jumpscare.classList.add("shake");


    /*
     * White flash
     */

    flash.classList.add("flash");


    /*
     * Red flash
     */

    redFlash.classList.add("red");


    /*
     * Stop the flashing
     * after 4 seconds.
     */

    setTimeout(() => {

        flash.classList.remove("flash");

        redFlash.classList.remove("red");

        jumpscare.classList.remove("shake");

    }, 4000);


    /*
     * Brief blackout
     */

    setTimeout(() => {

        blackout.classList.add("blackout");

    }, 4300);


    /*
     * Remove blackout
     */

    setTimeout(() => {

        blackout.classList.remove("blackout");

    }, 4700);

}


/* =========================================
   DISABLE RIGHT CLICK
========================================= */

document.addEventListener(
    "contextmenu",
    event => {

        event.preventDefault();

    }
);


/* =========================================
   DISABLE TEXT SELECTION
========================================= */

document.addEventListener(
    "selectstart",
    event => {

        event.preventDefault();

    }
);


/* =========================================
   FULLSCREEN MONITOR
========================================= */

document.addEventListener(
    "fullscreenchange",
    () => {

        if (!document.fullscreenElement) {

            console.log(
                "Fullscreen exited."
            );

        }

    }
);