const fastEmoji = document.getElementById("fastEmoji");
const photoUpload = document.getElementById("photoUpload");
const gifUpload = document.getElementById("gifUpload");
const randomSubject = document.getElementById("randomSubject");
const inputChat = document.getElementById("inputChat");
const messagesDiv = document.getElementById("messages");

//WYSYLANIE WIADOMOSCI
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

  sendEmoji.addEventListener("click", sendMessage);

  inputChat.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendEmoji.click();
      setTimeout(() => {
        inputChat.click();
      }, 200);

      setTimeout(() => {
        if (inputChat.value.trim() === "") {
          sendEmoji.click();
          inputChat.blur();
        }
      }, 5000);
    }
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

function sendMessage(e) {
  if (inputChat.value.trim() !== "") {
    document.getElementById("send").replaceWith(fastEmoji);

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
  } else {
    document.getElementById("send").replaceWith(fastEmoji);
    setTimeout(() => {
      document.getElementById("send").click();
    }, 201);
  }
}

//WYSYLANIE ZDJEC

photoUpload.addEventListener("click", (e) => {
  const photoInput = document.getElementById("photoInput");

  photoInput.style.display = "block";

  setTimeout(() => {
    photoInput.click();
    photoInput.style.display = "none";
  }, 100);

  photoInput.onchange = (e) => {
    const file = e.target.files[0];

    const fileImg = document.createElement("img");
    fileImg.src = URL.createObjectURL(file);
    fileImg.id = "myPhoto";

    const yourImg = document.createElement("div");
    yourImg.className = "myPhoto";

    const yourMessage = document.createElement("div");
    yourMessage.className = "yourMessage";
    yourMessage.id = "yourMessage";

    messagesDiv.append(yourMessage);
    yourMessage.append(yourImg);
    yourImg.append(fileImg);

    yourMessage.scrollIntoView();
  };
});
