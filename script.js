 /* =====================================
   OPENING
===================================== */

const enterButton = document.getElementById("enter-btn");
const openingScreen = document.getElementById("opening-screen");
const mainRoom = document.getElementById("main-room");

enterButton.addEventListener("click", () => {

    openingScreen.classList.add("fade-out");

    setTimeout(() => {

        openingScreen.style.display = "none";

        mainRoom.classList.remove("hidden");

        document.querySelector(".room-section").scrollIntoView({
            behavior: "smooth"
        });

    }, 1500);

});


/* =====================================
   GO TO HUG SECTION
===================================== */

const comfortButton = document.getElementById("comfort-btn");

comfortButton.addEventListener("click", () => {

    document.getElementById("hug-section").scrollIntoView({
        behavior: "smooth"
    });

});


/* =====================================
   HUG MESSAGES
===================================== */

const hugButton = document.getElementById("hug-btn");
const hugMessages = document.getElementById("hug-messages");

const hugTexts = [
    "Come here. 🫂",
    "Put your head down.",
    "Close your eyes for a little bit.",
    "You don't need to talk.",
    "I'll stay with you. ❤️",
    "Now breathe with me."
];

let hugStarted = false;

hugButton.addEventListener("click", () => {

    if (hugStarted) return;

    hugStarted = true;

    hugButton.style.display = "none";

    hugTexts.forEach((text, index) => {

        setTimeout(() => {

            const message =
                document.createElement("div");

            message.className = "hug-message";

            message.textContent = text;

            hugMessages.appendChild(message);

        }, index * 1500);

    });


    setTimeout(() => {

        document
            .getElementById("breathing-section")
            .scrollIntoView({
                behavior: "smooth"
            });

        startBreathing();

    }, hugTexts.length * 1500 + 1500);

});


/* =====================================
   BREATHING
===================================== */

const breathingCircle =
    document.getElementById("breathing-circle");

const breathingText =
    document.getElementById("breathing-text");

const continueBreathing =
    document.getElementById("continue-after-breathing");

let breathingStarted = false;

function startBreathing() {

    if (breathingStarted) return;

    breathingStarted = true;

    let cycles = 0;

    const maxCycles = 6;


    function breatheIn() {

        breathingText.textContent =
            "BREATHE IN";

        breathingCircle.classList.remove(
            "breathe-out"
        );

        breathingCircle.classList.add(
            "breathe-in"
        );

        setTimeout(breatheHold, 4000);

    }


    function breatheHold() {

        breathingText.textContent =
            "HOLD";

        setTimeout(breatheOut, 3000);

    }


    function breatheOut() {

        breathingText.textContent =
            "BREATHE OUT";

        breathingCircle.classList.remove(
            "breathe-in"
        );

        breathingCircle.classList.add(
            "breathe-out"
        );

        setTimeout(() => {

            cycles++;

            if (cycles < maxCycles) {

                breatheIn();

            } else {

                breathingText.textContent =
                    "WELL DONE 🤍";

                breathingCircle.classList.remove(
                    "breathe-out"
                );

            }

        }, 5000);

    }


    breatheIn();

}


/* =====================================
   BREATHING NEXT
===================================== */

continueBreathing.addEventListener("click", () => {

    document
        .getElementById("comfort-section")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =====================================
   THREE SOUNDS ONLY
===================================== */

const rainAudio =
    document.getElementById("rain-audio");

const oceanAudio =
    document.getElementById("ocean-audio");

const fireAudio =
    document.getElementById("fire-audio");

const allAudio = [
    rainAudio,
    oceanAudio,
    fireAudio
];

const volumeControl =
    document.getElementById("volume-control");


function stopAllSounds() {

    allAudio.forEach(audio => {

        audio.pause();
        audio.currentTime = 0;

    });

}


function setVolume() {

    allAudio.forEach(audio => {

        audio.volume =
            Number(volumeControl.value);

    });

}


setVolume();


volumeControl.addEventListener(
    "input",
    setVolume
);


document
    .querySelectorAll(".sound-buttons button")
    .forEach(button => {

        button.addEventListener(
            "click",
            async () => {

                const sound =
                    button.dataset.sound;


                document
                    .querySelectorAll(
                        ".sound-buttons button"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                stopAllSounds();


                let selectedAudio = null;


                if (sound === "rain") {
                    selectedAudio =
                        rainAudio;
                }


                if (sound === "ocean") {
                    selectedAudio =
                        oceanAudio;
                }


                if (sound === "fire") {
                    selectedAudio =
                        fireAudio;
                }


                if (selectedAudio) {

                    selectedAudio.volume =
                        Number(
                            volumeControl.value
                        );


                    try {

                        await selectedAudio.play();

                    } catch (error) {

                        console.log(
                            "Audio waiting for user interaction."
                        );

                    }

                }

            }
        );

    });


/* =====================================
   NEXT BUTTONS
===================================== */

document
    .querySelectorAll(".next-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const targetId =
                    button.dataset.next;


                if (!targetId) return;


                const target =
                    document.getElementById(
                        targetId
                    );


                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/* =====================================
   SLEEPY CAT
===================================== */

const gameCat =
    document.getElementById("game-cat");

const catMessage =
    document.getElementById("cat-message");

let catClicks = 0;


const catMessages = [

    "shhh… I'm sleeping 😴",

    "You should be sleeping too…",

    "Okay okay… one hug first. 🫂",

    "Here. This is for you. ❤️"

];


gameCat.addEventListener("click", () => {

    catClicks++;


    if (catClicks <= catMessages.length) {

        catMessage.textContent =
            catMessages[catClicks - 1];

    }


    gameCat.style.transform =
        "scale(1.07)";


    setTimeout(() => {

        gameCat.style.transform =
            "";

    }, 300);

});


/* =====================================
   SECRET LETTER
===================================== */

const letterButton =
    document.getElementById("letter-btn");

const letter =
    document.getElementById("letter");


letterButton.addEventListener("click", () => {

    letter.classList.remove("hidden");

    letterButton.style.display =
        "none";

});


/* =====================================
   WISHES
===================================== */

const wishContainer =
    document.getElementById("wish-stars");

const wishMessage =
    document.getElementById("wish-message");


const wishes = [

    "I hope you wake up tomorrow feeling lighter. 🌙",

    "I hope tonight your mind finally becomes quiet. 🤍",

    "I wish I could be there to hug you right now. 🫂",

    "You're loved. Don't forget that. ❤️",

    "I hope tomorrow brings you something beautiful.",

    "You deserve a peaceful night.",

    "I hope your worries feel smaller tomorrow.",

    "You don't have to have everything figured out.",

    "Tonight belongs to you. Just rest.",

    "I hope you smile when you wake up.",

    "Your SnowPaw deserves some peace. ❄️",

    "I wish I could tuck you in right now. 🥺",

    "You are more precious than you realize.",

    "Let tonight be gentle with you.",

    "Tomorrow is another chance.",

    "For now, just breathe.",

    "You are doing better than you think.",

    "Close your eyes and let the world wait.",

    "I hope your dreams are warm and peaceful.",

    "One day at a time, Ice Queen. 👑",

    "You don't have to be strong every minute.",

    "Someone is thinking about you right now. ❤️",

    "May your headache fade and your mind become quiet.",

    "Rest is allowed.",

    "You are cared for.",

    "Good things are still waiting for you.",

    "Tonight, nothing needs to be solved.",

    "I wish I could hold your hand right now.",

    "Sleep peacefully, my SnowPaw. 🌙"

];


for (let i = 0; i < 25; i++) {

    const star =
        document.createElement("button");


    star.className =
        "wish-star";


    star.textContent =
        "⭐";


    star.style.left =
        Math.random() * 90 + "%";


    star.style.top =
        Math.random() * 85 + "%";


    star.style.animationDelay =
        Math.random() * 2 + "s";


    star.addEventListener("click", () => {

        const randomWish =
            wishes[
                Math.floor(
                    Math.random() *
                    wishes.length
                )
            ];


        wishMessage.textContent =
            randomWish;


        star.textContent =
            "✨";


        setTimeout(() => {

            star.textContent =
                "⭐";

        }, 1000);

    });


    wishContainer.appendChild(star);

}


/* =====================================
   ICE QUEEN MODE
===================================== */

const iceQueenButton =
    document.getElementById(
        "ice-queen-btn"
    );

const iceMessage =
    document.getElementById(
        "ice-message"
    );


iceQueenButton.addEventListener(
    "click",
    () => {

        document.body.classList.add(
            "ice-mode"
        );

        iceMessage.classList.remove(
            "hidden"
        );

        iceQueenButton.textContent =
            "❄️ ICE QUEEN REST MODE ACTIVE";

    }
);


/* =====================================
   I'M HERE
===================================== */

const hereButton =
    document.getElementById(
        "here-btn"
    );

const hereMessage =
    document.getElementById(
        "here-message"
    );

const finalButton =
    document.getElementById(
        "final-btn"
    );


const hereTexts = [

    "I'm here. ❤️",

    "Still here.",

    "You can rest.",

    "One more hug. 🫂",

    "I love you.",

    "I'm not going anywhere.",

    "Now close those eyes.",

    "You're safe to rest here. 🤍",

    "Okay sleepyhead… enough screen time. 😭❤️"

];


let hereClicks = 0;


hereButton.addEventListener(
    "click",
    () => {

        if (
            hereClicks >=
            hereTexts.length
        ) {
            return;
        }


        hereMessage.textContent =
            hereTexts[hereClicks];


        hereClicks++;


        if (
            hereClicks ===
            hereTexts.length
        ) {

            setTimeout(() => {

                finalButton.classList.remove(
                    "hidden"
                );

            }, 700);

        }

    }
);


/* =====================================
   FINAL SCREEN
===================================== */

finalButton.addEventListener(
    "click",
    () => {

        document
            .getElementById(
                "final-section"
            )
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =====================================
   GOODNIGHT
===================================== */

const goodnightButton =
    document.getElementById(
        "goodnight-btn"
    );

const phoneDown =
    document.getElementById(
        "phone-down"
    );


goodnightButton.addEventListener(
    "click",
    () => {

        stopAllSounds();

        phoneDown.textContent =
            "Now seriously… PHONE DOWN. 😭❤️";

        goodnightButton.style.display =
            "none";

    }
);