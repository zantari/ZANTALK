
<style>
    .userPanel {
  position: fixed;
  height: 7vh;
  bottom: 1vh;
  left: 1vh;
  border: 1px solid black;
  display: flex;
  align-items: center;
  max-width: 70vh;
  width: auto;
  font-size: auto;
  background-color: gray;
  border-radius: 10px;
}

.userPanel .pfp {
  height: 100%;
}

.userPanel .userInfo {
  display: flex;
  flex-direction: column;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userPanel .name {
  margin-left: 20px;
  margin-right: 50px;
  min-width: 50px;

  font-size: 3vh;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userPanel .status {
  margin-left: 20px;
  margin-top: auto;
  font-size: 2vh;
  min-width: 1px;
  font-weight: 400;
  margin-top: -2vh;
  color: rgb(109, 170, 109);
}

.userPanel .settings {
  height: 80%;
  margin-left: auto;
  margin-right: 20px;
}

@media (max-width: 400px) {
  .userPanel {
    display: none;
  }
}




</style>







<div class="userPanel">
      <img src="../icons/githubIcon.png" alt="user img" class="pfp" />
      <div class="userInfo">
        <h1 class="name">Zantar</h1>
        <p class="status">online</p>
      </div>
      <img
        src="../icons/settingsIcon.png"
        alt="settings img"
        class="settings"
      />
      <img src="../icons/eyeIconno.png" alt="hide icon" class="settings" />
</div>