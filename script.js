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