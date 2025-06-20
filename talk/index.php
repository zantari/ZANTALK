<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TALK</title>
    <link rel="stylesheet" href="talk.css" />
  </head>
  <body>
    <?php
  include("../inc/userPanel.php");

?>
    <div class="container">
      <?php
  include("../inc/leftMenu.php");

?>

      <section class="chatsContainer">
        <div class="chatsTop">
          <h1>Chats</h1>
          <input
            type="text"
            name="searchFriends"
            id="searchFriends"
            class="searchFriends"
            placeholder="search friends"
          />
        </div>

        <div class="chatsFriends">
          <ul class="friendList">
            <li id="zaznaczony">
              <img src="../icons/githubIcon.png" alt="pfp" />
              <div class="friendInfo">
                <h1 class="friendName">Jeff Bezos</h1>
                <p class="friendMsg">you are the best programmer man! 3m</p>
              </div>
            </li>

            <li>
              <img src="../icons/githubIcon.png" alt="pfp" />
              <div class="friendInfo">
                <h1 class="friendName">Elon Musk</h1>
                <p class="friendMsg">I hate joe biden 10m</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- chat -->
      <main class="chat">
        <header class="chatHeader">
          <img src="../icons/githubIcon.png" alt="pfp" />
          <div class="chatHeaderInfo">
            <h1 class="nameFriendHeader">Jeff Bezos</h1>
            <p class="statusFriendHeader">online now</p>
          </div>

          <img src="../icons/phoneIcon.png" alt="phone icon" class="phoneIcon">
          <img src="../icons/settings.png" alt="settings icon" class="settings">
        </header>




        <section class="messages" id="messages">



          <div id="yourMessage" class="yourMessage">
            <p class="yourMessageText">Hello jeff bezos</p>
          </div>



          <div id="friendMessage" class="friendMessage">
            <img src="../icons/githubIcon.png" alt="" class="pfp"/>
            <p class="friendMessageText">you are the best programmer man!</p>
          </div>




          <div id="yourMessage" class="yourMessage">
            <p class="yourMessageText">I know jeff what are you doing today</p>
          </div>
          <div id="yourMessage" class="yourMessage">
            <p class="yourMessageText">I know jeff what are you doing today</p>
          </div>


          <div id="friendMessage" class="friendMessage">
            <img src="../icons/githubIcon.png" alt="" class="pfp"/>
            <p class="friendMessageText">i am playing my favourite game! Math brain!</p>
          </div>

          
        </section>






        <footer class="chatInput">
          <input type="file" name="photoInput" id="photoInput" accept="image/*"><img src="../icons/fileIcon.png" alt="upload a file!" id="photoUpload" />
          <img src="../icons/gifIcon.png" alt="upload a gif!" id="gifUpload"/>
          <img src="../icons/randomIcon.png" alt="random subject" id="randomSubject" />
          <input
            type="text"
            name="inputChat"
            id="inputChat"
            placeholder="send a message!"
          />
          <p class="fastEmoji" id="fastEmoji" style="cursor: pointer">😎</p>
        </footer>
      </main>
    </div>

    <script src="talkingScript.js"></script>
  </body>
</html>
