const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

if (signInBtn && signUpBtn && container) {
  signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });
}

if (fistForm) {
  fistForm.addEventListener("submit", (e) => e.preventDefault());
}

if (secondForm) {
  secondForm.addEventListener("submit", (e) => e.preventDefault());
}

const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chat-messages");

function sendMessage() {
  if (!input || !chatMessages) return;

  const text = input.value.trim();
  if (text === "") return;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", "message-s");

  const sender = document.createElement("div");
  sender.classList.add("sender-name");
  sender.innerText = "You";

  const messageText = document.createElement("div");
  messageText.classList.add("text");
  messageText.innerText = text;

  const time = document.createElement("div");
  time.classList.add("time");
  time.innerText = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  messageDiv.appendChild(sender);
  messageDiv.appendChild(messageText);
  messageDiv.appendChild(time);

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  input.value = "";
}

if (sendBtn && input) {
  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
}