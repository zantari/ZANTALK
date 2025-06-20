<style>
    .leftMenu {
  width: 11vh;
  height: 100vh;
  min-width: 7vh;
  background-color: rgb(256,236,212);
  overflow: auto;
  border-radius: 10px;
}

.leftMenuList {
  text-align: center;
  padding: 0;
  list-style: none;
}

.leftMenuList li {
  margin-top: 10px;
  border-radius: 20%;
}

.leftMenuList li:hover {
  background-color: gray;
  transition: all 1s;
}

.leftMenuList .none:hover {
  width: 100%;
  background-color: white;
}

.leftMenuList img {
  width: 80%;
  max-width: 80px;
}
</style>


<aside class="leftMenu">
        <ul class="leftMenuList">
          <li>
            <img src="../icons/chatIcon.png" alt="chat Icon" />
          </li>
          <li>
            <img src="../icons/friendsIcon.png" alt="friend Icon" />
          </li>
          <li>
            <img src="../icons/notificationIcon.png" alt="notification Icon" />
          </li>
          <li>
            <img src="../icons/homeIcon.png" alt="home Icon" />
          </li>
          <li>
            <img src="../icons/settingsIcon.png" alt="home Icon" />
          </li>

          <li class="none">
            <img src="../icons/none.png" alt="" />
            <img src="../icons/none.png" alt="" />
            <img src="../icons/none.png" alt="" />
            <img src="../icons/none.png" alt="" />
            <img src="../icons/none.png" alt="" />
          </li>

          <li>
            <img src="../icons/githubIcon.png" alt="github icon" />
          </li>
          <li>
            <img src="../icons/logoutIcon.png" alt="logout icon" />
          </li>
          <li>
            <img src="../icons/userSettingsIcon.png" alt="user settings icon" />
          </li>
        </ul>
</aside>