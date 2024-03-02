<template>
  <div class="wrapper">
    <!-- header -->

    <div class="header">
      <img src="../assets/header-logo.png" alt="Soul In Seoul">
      <div class="header-inform">
        <div class="sns">
          <a href="https://www.instagram.com/o._.u_bean" style="text-decoration:none;color:black;"><img
              src="../assets/instagram.svg" alt="instagram"> soul_in_seoul</a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://www.youtube.com" style="text-decoration:none;color:black;"><img src="../assets/youtube.svg"
              alt="instagram"> soul in seoul</a>

        </div>
        <div class="user">
          <button class="signin">signin</button>
          <button class="signup">signup</button>
          <button class="mypage">mypage</button>
        </div>
      </div>
    </div>

    <!-- nav -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown" v-for="menu in menus" :key="menu.id" @mouseenter="openDropdown(menu.id)"
              @mouseleave="closeDropdown(menu.id)" :class="{ 'dropdown-active': menu.isActive }">
              <a class="nav-link dropdown-toggle" href="#" :id="`navbarDropdown${menu.id}`" role="button"
                aria-expanded="false">
                {{ menu.name }}
              </a>
              <ul class="dropdown-menu" :aria-labelledby="`navbarDropdown${menu.id}`">
                <li v-for="item in menu.items" :key="item"><a class="dropdown-item" href="#">{{ item }}</a></li>
              </ul>
            </li>
          </ul>

          <b-form-input v-model="text" placeholder="Search" @mouseover="showSearchInput" @mouseleave="hideSearchInput" :style="{
    width: searchIsHovered ? '250px' : '0px',
    opacity: searchIsHovered ? 1 : 0,
    overflow: 'hidden',
    transition: 'width 0.5s ease, opacity 0.5s ease'
    
  }"></b-form-input>

          <i class="bi bi-search search-icon" @mouseover="showSearchInput" @mouseleave="hideSearchInput"></i>



        </div>
      </div>
    </nav>


    <div class="calander">
      <!-- cal-paper -->
      <div class="c-paper">
        <VDatePicker is-expanded color="green" v-model="range" :model-config="modelConfig" is-range />
      </div>
      <!-- cal-list -->
      <div class="c-list">
        <b-list-group>
          <b-list-group-item href="#">festival 1</b-list-group-item>
          <b-list-group-item href="#" variant="primary">festival 2</b-list-group-item>
          <b-list-group-item href="#" variant="secondary">festival 3</b-list-group-item>
          <b-list-group-item href="#" variant="success">festival 4</b-list-group-item>
          <b-list-group-item href="#" variant="danger">festival 5</b-list-group-item>
          <b-list-group-item href="#" variant="warning">festival 6</b-list-group-item>
          <b-list-group-item href="#" variant="dark">festival 7</b-list-group-item>
        </b-list-group>
      </div>
    </div>

    <div class="summary-contents">
      <!-- magazine -->
      <div class="magazine">
        <div class="image-slider">
          <img :src="images[currentIndex]" alt="Magazine Image" class="slider-image">
          <button class="nav-button left" @click="prevImage">&#60;</button>
          <button class="nav-button right" @click="nextImage">&#62;</button>
        </div>

      </div>
      <div class="youtube">


        <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>




      </div>
    </div>
    <div class="recommend">

    </div>
    <div class="introduction">introduction</div>
    <div class="footer">footer</div>
  </div>

</template>


<script>
  export default {
    data() {
      return {
        slide: 0,
        currentIndex: 0,
        searchIsHovered: false,
        videoId: 'MoCo084oAEE',
        menus: [{
            id: 1,
            name: 'Program',
            items: ['Program1', 'Program2']
          },
          {
            id: 2,
            name: 'Dropdown',
            items: ['Action', 'Another action', 'Another action']
          },
          {
            id: 3,
            name: 'Dropdown',
            items: ['Action', 'Another action']
          },
        ],
        images: [
          'https://picsum.photos/1024/480/?image=10',
          'https://picsum.photos/1024/480/?image=30',
          'https://picsum.photos/1024/480/?image=40',
        ]

      };
    },
    methods: {
      openDropdown(id) {
        this.menus = this.menus.map(menu => {
          if (menu.id === id) {
            menu.isActive = true;
            setTimeout(() => {
              const dropdownMenu = document.getElementById(`navbarDropdown${id}`).nextElementSibling;
              dropdownMenu.classList.add('show-dropdown');
            }, 10); // setTimeout을 사용하여 CSS 변형이 적용되도록 함
          }
          return menu;
        });
      },
      closeDropdown(id) {
        this.menus = this.menus.map(menu => {
          if (menu.id === id) {
            const dropdownMenu = document.getElementById(`navbarDropdown${id}`).nextElementSibling;
            dropdownMenu.classList.remove('show-dropdown');
            setTimeout(() => {
              menu.isActive = false;
            }, 500); // 애니메이션이 완료된 후 isActive 상태를 변경
          }
          return menu;
        });
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevImage() {
        this.currentIndex = (this.currentIndex + this.images.length - 1) % this.images.length;
      },
      showSearchInput() {
        this.searchIsHovered = true;
      },
      hideSearchInput() {
        this.searchIsHovered = false;
      },
    },


  }
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
  @import 'bootstrap/dist/css/bootstrap.css';
  @import 'bootstrap-vue/dist/bootstrap-vue.css';
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css");


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

  .header-inform .sns {
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

  .header,
  .header-inform {
    height: 55px;
  }

  .nav-bar {
    background-color: orange;
    color: white;
  }



  .dropdown-active .nav-link {
    color: white;
    transition: transform 0.5s ease;
  }

  .dropdown-active .nav-link:hover {
    transform: scale(1.1);
  }

  .navbar .dropdown-toggle::after {
    display: none;
  }

  .dropdown-menu.show-dropdown,
  .dropdown-menu.show-dropdown .dropdown-item {
    background-color: gray;
    /* 배경색 변경 */
    color: white;
    /* 폰트 색상 변경 */
    transform: scaleY(1);
    opacity: 1;
  }

  .navbar .dropdown-menu .dropdown-item:hover {
    color: green;
    transition: color 0.2s, color 0.2s;
  }



  .dropdown-menu {
    display: block;
    transform: scaleY(0);
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;
    transform-origin: top;
  }

  ::v-deep .form-control {
    width: 20%;
    margin: 0 -22px 0 0;
  }


  .search-icon {
    color: gray;
    cursor: pointer;
    transition: color 0.2s ease, transform 0.5s ease;
    transform: scale(1.1);
  }

  .search-icon:hover {
    color: black;
    transform: scale(1.3);
  }


  .calander {
    display: flex;
    margin: 30px 0;
    height: 285.5px;
  }

  .calander .c-paper {
    color: white;
    width: 50%;
    border: none;
  }

  ::v-deep .vc-container {
    width: 100% !important;
    height: 100% !important;
    border: none;
  }

  ::v-deep .vc-arrow {
    background-color: white;
  }

  ::v-deep .vc-title {
    background-color: white;
  }

  .calander .c-list {
    width: 50%;
    height: 100%;
    /* 부모의 높이에 맞춤 */
    display: flex;
    /* Flexbox 레이아웃 사용 */
    flex-direction: column;
    /* 자식 요소들을 세로로 정렬 */

  }

  .calander .c-list .b-list-group {
    flex-grow: 1;
    /* 가능한 모든 공간을 채우도록 설정 */
  }




  .summary-contents {
    display: flex;
  }

  .summary-contents .magazine,
  .summary-contents .youtube {
    width: 50%;
    height: 350px;
  }

  .magazine .image-slider {
    position: relative;
    width: 100%;
    height: 100%;
    /* Adjust based on your requirement */
    overflow: hidden;
    position: relative;
    /* z-index를 위해 position 설정 */
    z-index: 1000;
    transition: transform 0.5s ease;
    transform-origin: left bottom;
  }

  .image-slider:hover {
    transform: scale(1.3);
    /* div 크기를 10% 확대 */
  }

  .magazine .slider-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    transform-origin: left bottom;
    /* 변환의 기준점을 왼쪽 하단으로 설정 */
  }

  .magazine .slider-image:hover {
    transform: scale(1.1);
    /* 이미지를 10% 확대 */
  }



  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    font-size: 50px;
    cursor: pointer;
    color: white;
  }

  .nav-button.left {
    left: 20px;
  }

  .nav-button.right {
    right: 20px;
  }


  .youtube {
    position: relative;
    /* z-index 적용을 위해 position 설정 */
    background-color: blue;
    color: white;
    z-index: 1;
    /* 기본 상태에서의 z-index */
  }

  .youtube:hover {
    z-index: 9999;
    /* 호버 시 매우 높은 z-index 적용 */
  }

  .youtube iframe {
    transition: transform 0.5s ease;
    transform-origin: right bottom;
  }

  .youtube:hover iframe {
    transform: scale(1.3);
  }


  .recommend {

    color: white;
  }

  .introduction {

    margin: 20px 0;
    height: 800px;
    background-color: black;
    color: white;
  }

  .footer {

    height: 200px;
    background-color: gray;
    color: white;
  }
</style>