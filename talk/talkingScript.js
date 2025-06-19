const inputChat = document.getElementById("inputChat");
const fastEmoji = document.getElementById("fastEmoji");
const photoUpload = document.getElementById("photoUpload");
const gifUpload = document.getElementById("gifUpload");
const randomSubject = document.getElementById("randomSubject");

const messagesDiv = document.getElementById("messages");

inputChat.addEventListener("click", (e) => {
  const newEmoji = document.createElement("img");
  newEmoji.src = "../icons/send.png";
  newEmoji.alt = "send!";
  newEmoji.id = "send";
  newEmoji.className = "fastEmoji";
  newEmoji.style.cursor = "pointer";
  newEmoji.style.marginRight = "7px";
  fastEmoji.replaceWith(newEmoji);

  const sendEmoji = document.getElementById("send");

  sendEmoji.addEventListener("click", (e) => {
    sendEmoji.replaceWith(fastEmoji);

    const newMessage = document.createElement("div");
    newMessage.className = "yourMessage";
    newMessage.id = "yourMessage";

    messagesDiv.append(newMessage);

    const yourMessageText = document.createElement("p");
    yourMessageText.className = "yourMessageText";
    yourMessageText.id = "yourMessageText";
    yourMessageText.innerHTML = inputChat.value;

    newMessage.append(yourMessageText);

    newMessage.scrollIntoView();

    inputChat.value = "";

    setTimeout(() => {
      const jeffPhoto = document.createElement("img");
      jeffPhoto.src = "../icons/githubIcon.png";
      jeffPhoto.className = "pfp";
      const newMessage = document.createElement("div");
      newMessage.className = "friendMessage";
      newMessage.id = "friendMessage";

      messagesDiv.append(newMessage);
      newMessage.append(jeffPhoto);
      const friendMessageText = document.createElement("p");
      friendMessageText.className = "friendMessageText";
      friendMessageText.id = "friendMessageText";
      friendMessageText.innerHTML = "Hello my dear friend!";

      newMessage.append(friendMessageText);

      newMessage.scrollIntoView();
    }, 3000);
  });
});

fastEmoji.addEventListener("click", (e) => {
  const newMessage = document.createElement("div");
  newMessage.className = "yourMessage";
  newMessage.id = "yourMessage";

  messagesDiv.append(newMessage);

  const yourMessageText = document.createElement("p");
  yourMessageText.className = "yourMessageText";
  yourMessageText.id = "yourMessageText";
  yourMessageText.innerHTML = "😎";

  newMessage.append(yourMessageText);

  newMessage.scrollIntoView();
});
