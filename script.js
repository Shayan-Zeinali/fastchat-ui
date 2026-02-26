const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chat-messages");

function sendMessage() {
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

  const now = new Date();
  time.innerText = now.toLocaleTimeString([], {
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

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});