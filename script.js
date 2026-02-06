// (async function checkForUpdates() {
//     const currentVersion = "1.0";
//     const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

//     try {
//         const response = await fetch(versionUrl);
//         if (!response.ok) {
//             console.warn("Could not fetch version information.");
//             return;
//         }
//         const data = await response.json();
//         const latestVersion = data.version;
//         const updateMessage = data.updateMessage;

//         if (currentVersion !== latestVersion) {
//             alert(updateMessage);
//         } else {
//             console.log("You are using the latest version.");
//         }
//     } catch (error) {
//         console.error("Error checking for updates:", error);
//     }
// })();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const no_messages = [
    "was that a misclick?",
    ":< are you sure?",
    "really?",
    "really x2?",
    "even if i make you a tart again?",
    "...",
    ".........",
    ".............ok. just say you hate me i guess.",
    ":<"
];

const yes_messages = [
    "wait, click me!",
    "i'm the yes one",
    "its me???",
    "hellooo? click yes here!",
    "here !!",
    "HELLO",
    "HERE IM YES",
    "CLICK YES ITS ME",
    "...>:)..."
];

const leave_messages = [
    "it's only one question",
    "it'll be quick i promise",
    "hey stop trying to leave",
    "okok you can leave after this one",
    "lol jk, you cant leave !",
    "fine but if you leave i wont forgive you :<"
];

let messageIndex = 0;

function changeSize(button, factor) {
    const currentSize = parseFloat(window.getComputedStyle(button).fontSize);
    button.style.fontSize = `${currentSize * factor}px`;
}

function changeContent(button, messageIndex, messages) {
    button.textContent = messages[messageIndex];
}

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    messageIndex = (messageIndex + 1) % no_messages.length;
    [yesButton, noButton].forEach(button => {
        changeContent(button, messageIndex, button === yesButton ? yes_messages : no_messages);
        changeSize(button, button === yesButton ? 1.5 : 0.85);
    });
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleLeaveClick() {
    const leaveButton = document.querySelector('.leave-button');
    leaveButton.style.backgroundColor = "#282a28";
    leaveButton.style.color = "#3c423d";
    messageIndex = (messageIndex + 1) % leave_messages.length;
    changeContent(leaveButton, messageIndex, leave_messages);
    changeSize(leaveButton, 0.85);
    const currentOpacity = parseFloat(leaveButton.style.opacity) || 1;
    leaveButton.style.opacity = currentOpacity * 0.75;
}

function handleNextClick() {
    window.location.href = "question.html";

}