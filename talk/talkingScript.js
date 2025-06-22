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

  setTimeout(() => {
    const answers = ["SWAG!", "🤪🤪🤪🤪", "😎", "😎😎😎"];
    randomAnswer = Math.floor(Math.random() * answers.length);

    //
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
    friendMessageText.innerText = answers[randomAnswer];

    newMessage.append(friendMessageText);

    newMessage.scrollIntoView();
  }, 1000);
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
      const answers = [
        "What's up my friend??",
        "Hello my dear friend!",
        "I don't care",
        "I don't know",
        "Yes! I love it!",
        "OK, how are you today?",
        "I am Jeff Bezos",
        "Amazon is the best!",
        "Hello!",
        "WOOOHOOO!",
        "😎",
        "You are my best friend!",
        "i am playing my favourite game! Math brain!",
        "Me too!",
        "I love ZANTALK! ",
        "If I were a fruit, I’d definitely be a potato! 🥔",
        "I LOVE STAR WARS!",
      ];
      randomAnswer = Math.floor(Math.random() * answers.length);

      //
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
      friendMessageText.innerText = answers[randomAnswer];

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
    fileImg.id = "myPhotoChat";
    fileImg.className = "myPhotoChat";

    const yourMessage = document.createElement("div");
    yourMessage.className = "yourMessage";
    yourMessage.id = "yourMessage";

    const yourMessageImg = document.createElement("div");
    yourMessageImg.className = "yourMessageImg";

    yourMessageImg.innerHTML = "<p>you sent a photo</p>";

    messagesDiv.append(yourMessage);

    yourMessage.append(yourMessageImg);

    yourMessageImg.append(fileImg);

    setTimeout(() => {
      const answers = [
        "Very cool photo! I love it!",
        "Very nice!",
        "LOL! Super photo",
        "Are you a photographer? My friend?",
        "I like that!",
      ];

      randomAnswer = Math.floor(Math.random() * answers.length);

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
      friendMessageText.innerText = answers[randomAnswer];

      newMessage.append(friendMessageText);

      newMessage.scrollIntoView();
    }, 2000);

    yourMessage.scrollIntoView();
  };
});

randomSubject.addEventListener("click", (e) => {
  const randomSubject = [
    "How are you jeff?",
    "I love math brain!",
    "Wow this app is mega cool!",
    "Do you like allegro?",
    "If you were a fruit, what kind of fruit would you be?",
    "Do you like star wars?",
  ];

  const newSubject = Math.floor(Math.random() * randomSubject.length);

  inputChat.click();

  inputChat.value = randomSubject[newSubject];
});
