
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

.userPanel .settings:hover{
  background-color: rgb(37, 37, 37);
}

@media (max-width: 400px) {
  .userPanel {
    width: 7vh;

  }
  .pfp{
    display: none;
  }
  #settingsIcon{
    display: none;
  }
  #hideIcon{
    margin: 5%;
  }
  .userInfo{
    display: none;
  }

 
}




</style>







<div class="userPanel" id="userPanel">
      <img src="../icons/githubIcon.png" alt="user img" class="pfp" id="pfp"/>
      <div class="userInfo" id="userInfo">
        <h1 class="name">Zantar</h1>
        <p class="status">online</p>
      </div>
      <img
        src="../icons/settingsIcon.png"
        alt="settings Icon"
        id="settingsIcon"
        class="settings"
        onClick="userPanelSettings()"
      />
      <img src="../icons/eyeIconno.png" alt="hide icon" class="settings" id="hideIcon" />
</div>

<script>
  const hideIcon = document.getElementById("hideIcon");
  const userPanel = document.getElementById("userPanel")
  const pfp = document.getElementById("pfp");
  const settingsIcon = document.getElementById("settingsIcon");
  const userInfo = document.getElementById("userInfo");

  


  hideIcon.addEventListener("click", (e) => {
    if(pfp.style.display!=="none"){
    userPanel.style.width="7vh";
    pfp.style.display="none";
    settingsIcon.style.display="none";
    userInfo.style.display="none";
    hideIcon.src="../icons/eyeIcon.png";
    hideIcon.style.margin="10%";
    }
    else{
      userPanel.style.width="auto";
      pfp.style.display = "block";
      settingsIcon.style.display="block";
      userInfo.style.display="flex";
      hideIcon.src="../icons/eyeIconno.png";
      hideIcon.style.marginLeft = '0px';
      hideIcon.style.marginRight = '20px';
      
    }
  })


  function userPanelSettings(){
    alert("i need to do simple settings like change pfp or nickname or status")
  }
</script>