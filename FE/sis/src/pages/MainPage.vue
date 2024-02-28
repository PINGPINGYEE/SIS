<template>
  <div class="wrapper">
    <div class="header">
      <img src="../assets/header-logo.png" alt="Soul In Seoul">
      <div class="header-inform">
        <div class="sns">
          <a href="https://www.instagram.com/o._.u_bean"><img src="../assets/instagram.svg" alt="instagram"></a>
          soul_in_seoul
          &nbsp;&nbsp;&nbsp;
          <a href="https://www.instagram.com/o._.u_bean"><img src="../assets/youtube.svg" alt="instagram"></a>
          soul in seoul
        </div>
        <div class="user">
          <button class="signin">signin</button>
          <button class="signup">signup</button>
          <button class="mypage">mypage</button>
        </div>
      </div>
    </div>
    <div class="nav-bar">
      <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
    </div>
    <div class="calander">
      <div class="c-paper">c-paper</div>
      <div class="c-list">c-list</div>
    </div>
    <div class="summary-contents">
      <div class="magazine">magazine</div>
      <div class="youtube">youtube</div>
    </div>
    <div class="recommend"><div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>

    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
  </div>
</div></div>
    <div class="introduction">introduction</div>
    <div class="footer">footer</div>
  </div>

</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

.wrapper {
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 2px;
}

.header {
  /* background-color: red; */
  color: black;
  display: flex;
}

.header-inform {
  position: absolute;
  width: 28%;
  left: 72%;
}

.header-inform .sns{
  font-family: "Dancing Script", cursive;
  font-size: 15px;
  font-style: normal;
  text-align: center;
}

.header-inform .user {
  display: flex;
  justify-content: center;
  padding: 0 10px;
}

.header-inform .user button {
  flex: 1;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  color: black;
  border: none;
  font-size: 16px;
  text-align: center;
  position: relative;
}

.header-inform .user button:not(:last-child):after {
  content: "|";
  color: black;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 10px;
}

.header, .header-inform {
  height: 55px;
}

.nav-bar {
  background-color: orange;
  color: white;
}

.calander {
  display: flex;
}

.calander .c-paper {
  background-color: yellowgreen;
  color: white;
}

.calander .c-list {
  background-color: yellow;
  color: white;

}

.summary-contents {
  display: flex;
}

.summary-contents .magazine, .summary-contents .youtube {
  width: 50%;
  height: 200px;
}

.magazine {
  background-color: green;
  color: white;
  
}
.youtube {
  background-color: blue;
  color: white;
}
.recommend {

  color: white;
}
.introduction {
  background-color: black;
  color: white;
}
.footer {
  background-color: gray;
  color: white;
}
</style>