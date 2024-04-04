// =============================================================================
// == CONSTANTS
// =============================================================================

const WELCOME_MESSAGE_ID = "scripted-welcome-message";
const WELCOME_MESSAGE_CLASS = "welcome-message";

const INITIAL_WELCOME_MESSAGE_DELAY_MS = 50;
const WELCOME_MESSAGE_DELAY_MS = 100;

const WELCOME_MESSAGE = "Hallo, ich bin Henrike\nschau dir mein\nPortfolio an...";

// =============================================================================
// == STATE
// =============================================================================

var curText = "";
var curIdx = 0;

// =============================================================================
// == ANIMATION
// =============================================================================

function revealWelcomeMessage() {
    let messageElement = document.getElementById(WELCOME_MESSAGE_ID);
    if (!messageElement) return;

    messageElement.classList.add(WELCOME_MESSAGE_CLASS);
    setTimeout(revealNextChar, INITIAL_WELCOME_MESSAGE_DELAY_MS, messageElement);
}

function revealNextChar(messageElement) {
    if (curIdx >= WELCOME_MESSAGE.length) return;

    var curChar = WELCOME_MESSAGE[curIdx];
    curIdx  += 1;
    curText += curChar;

    messageElement.innerText = curText;
    setTimeout(revealNextChar, WELCOME_MESSAGE_DELAY_MS, messageElement);
}
