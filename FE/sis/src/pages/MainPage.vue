<template>
  <div class="wrapper">
    <!-- header -->
    <button class="back-to-top" @click="scrollToTop"><i class="bi bi-arrow-up-square"></i></button>


    <div class="header">
      <img src="../assets/header-logo.png" alt="Soul In Seoul">
      <div class="header-inform">
        <div class="sns">
          <a href="https://www.instagram.com/o._.u_bean" target="_blank" style="text-decoration:none;color:black;"><img
              src="../assets/instagram.svg" alt="instagram"> soul_in_seoul</a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://www.youtube.com" target="_blank" style="text-decoration:none;color:black;"><img src="../assets/youtube.svg"
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

          <input type="text" class="form-control" v-model="text" placeholder="Search" @mouseover="showSearchInput"
            @mouseleave="hideSearchInput" :style="{
      width: searchIsHovered ? '250px' : '0px',
      opacity: searchIsHovered ? 1 : 0,
      overflow: 'hidden',
      transition: 'width 0.5s ease, opacity 0.5s ease'
    }">

          <i class="bi bi-search search-icon" @mouseover="showSearchInput" @mouseleave="hideSearchInput"></i>



        </div>
      </div>
    </nav>

    <!-- calander -->
    <div class="calander">
      <!-- cal-paper -->
      <div class="c-paper">
        <VDatePicker is-expanded color="green" v-model="range" :model-config="modelConfig" is-range />
      </div>
      <!-- cal-list -->
      <div class="c-list">
        <table class="table">
          <caption>As Of {{ currentDate() }}</caption>
          <thead>
            <tr>
              <th v-for="field in fields" :key="field.key" :class="field.class">
                {{ field.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.Date">
              <span class="dot-container">
                <td v-if="item.Type === 'red'" class="dot" style="background-color: red;" v-tooltip title="Healing"></td>
                <td v-else-if="item.Type === 'blue'" class="dot" style="background-color: blue;" v-tooltip title="Dynamic"></td>
                <td v-else-if="item.Type === 'yellow'" class="dot" style="background-color: yellow;" v-tooltip title="University">
                </td>
                <td v-else class="dot" style="background-color: gray;" v-tooltip title="none"></td>
              </span>
              <td>{{ item.Date }}</td>
              <td>{{ item.Name }}</td>
              <td>{{ item.Area }}</td>
            </tr>
          </tbody>
        </table>


      </div>
    </div>


    <div class="summary-contents">
      <div class="youtube-overlay" v-if="!isMagazineAtInitialSize">
        <h3>Soul In Seoul magazine</h3>
        <h5>This is our magazine. Introduce blabla</h5>
      </div>
  <!-- magazine -->
  <div ref="magazine" :class="['magazine', { 'visible': isYoutubeAtInitialSize, 'hidden': !isYoutubeAtInitialSize  }]" @mouseover="checkMagazineSize" @mouseleave="resetSizeCheck">
        <div class="label">Magazine <br>
          <a v-if="!isMagazineAtInitialSize" href="https://www.naver.com">
  <button type="button" class="btn btn-outline-success">More</button>
</a>
        </div>
    <div class="image-slider">
          <img :src="images[currentIndex]" alt="Magazine Image" class="slider-image">
          <button class="nav-button left" @click="prevImage">&#60;</button>
          <button class="nav-button right" @click="nextImage">&#62;</button>
        </div>

      </div>

      <div class="magazine-overlay" v-if="!isYoutubeAtInitialSize">
        <h3>Soul In Seoul Youtube Channel</h3>
        <h5>This is our youtube. Introduce blabla</h5>
      </div>
        <!-- youtube -->
        <div ref="youtube" :class="['youtube', { 'visible': isMagazineAtInitialSize, 'hidden': !isMagazineAtInitialSize }]" @mouseover="checkYoutubeSize" @mouseleave="resetSizeCheck">
    <div class="label">YouTube<br>
      <a v-if="!isYoutubeAtInitialSize" href="https://www.youtube.com" target="_blank">
  <button type="button" class="btn btn-outline-success">More</button>
</a>
</div>
        <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>




      </div>
      <div class="background-layer"></div>
    </div>
    <!-- recommend -->
    <div class="recommend">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Activity</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Healing</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Sleeping</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><img src="data:image/jpeg;base64,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" alt="roozy">
    <p>roozy!</p>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
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
        lastHovered: null,
        videoId: 'MoCo084oAEE',
        isMagazineAtInitialSize: true,
      isYoutubeAtInitialSize: true,
        magazineSize: { width: 50, height: 350 }, // Initial dimensions for magazine
      youtubeSize: { width: 50, height: 350 },
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
        fields: [{
            key: 'dots',
            label: '',
            class: 'dot-column'
          },
          {
            key: 'Date',
            label: 'Date'
          },
          {
            key: 'Name',
            label: 'Name'
          },
          {
            key: 'Area',
            label: 'Area'
          }
        ],
        items: [{
            Date: '24.03.03',
            Name: 'Party~~!',
            Area: 'Seoul Art Center',
            Type: 'red'
          },
          {
            Date: '24.03.03',
            Name: 'Concert~~!',
            Area: 'Seoul Theater',
            Type: 'blue'
          },
          {
            Date: '24.03.03',
            Name: 'Festival~~!',
            Area: 'Seoul Square',
            Type: 'yellow'
          },
          {
            Date: '24.03.05',
            Name: 'Festival~~!',
            Area: 'Online',
            Type: 'red'
          },
          {
            Date: '-',
            Name: '-',
            Area: '-',
            Type: null
          }
        ],
        images: [
          'https://picsum.photos/1024/480/?image=10',
          'https://picsum.photos/1024/480/?image=30',
          'https://picsum.photos/1024/480/?image=40',
        ],

      };
    },
    computed: {
    isMagazineVisible() {
      // Determines the visibility of the magazine based on its dimensions
      return this.magazineSize.width === 50 && this.magazineSize.height === 350;
    },
    isYoutubeVisible() {
      // Determines the visibility of the youtube based on its dimensions
      return this.youtubeSize.width === 50 && this.youtubeSize.height === 350;
    },
  },
    methods: {
      scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
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
      currentDate() {
        const current = new Date();
        const year = current.getFullYear().toString().slice(-2);
        const month = (current.getMonth() + 1).toString().padStart(2, '0');
        const day = current.getDate().toString().padStart(2, '0');

        return `${year}.${month}.${day}`;
      },
      checkMagazineSize() {
    if (this.$refs.magazine) {
      const magazine = this.$refs.magazine;
      this.isMagazineAtInitialSize = magazine.offsetWidth === this.magazineSize.width && magazine.offsetHeight === this.magazineSize.height;
    }
  },
  checkYoutubeSize() {
    if (this.$refs.youtube) {
      const youtube = this.$refs.youtube;
      this.isYoutubeAtInitialSize = youtube.offsetWidth === this.youtubeSize.width && youtube.offsetHeight === this.youtubeSize.height;
    }
  },
  resetSizeCheck() {
    this.isMagazineAtInitialSize = true;
    this.isYoutubeAtInitialSize = true;
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
      zoomIn(element) {
        this.lastHovered = element;
      },
    },


  }
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('bootstrap/dist/css/bootstrap.css');
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css");

  .hovered {
    z-index: 1001;
    /* 호버된 요소가 가장 높은 z-index를 가짐 */
  }

  .visible {
    visibility: visible;
    transition: visibility 0.3s linear;
  }

  .hidden {
    visibility: hidden;
    transition: visibility 0.3s linear;
  }

  .back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 200px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  display: none; /* Hidden by default */
  z-index: 999; /* Ensure it's above other content */
  opacity: 0.5;
  display: block;
  transition: opacity 0.5s, transform 0.5s;
}

.back-to-top:hover {
  opacity: 1;
  transform: scale(1.2);
}


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
    margin: 0 20px 0 10px;
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

  ::v-deep .vc-nav-title.vc-focus {
    background-color: white;
  }

  ::v-deep .vc-nav-item.vc-focus {
    background-color: white;
  }

  ::v-deep .vc-nav-item.vc-focus.is-active {
    background-color: yellowgreen;
  }

  ::v-deep .vc-base-icon {
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
    margin: 0 10px 0 20px;

  }

  caption {
    margin: 0 4px;
    font-size: 12px;
    text-align: right;
  }

  .dot-container {
    display: inline-block;
    vertical-align: middle;

    /* 필요한 경우 추가적인 스타일링 */
  }

  .dot {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    margin-left: 50%;
    /* 점을 셀의 오른쪽으로 밀어붙임 */
    margin-right: auto;
    /* 오른쪽 여백을 추가하여 점을 적당히 오른쪽으로 이동 */
    display: inline-block;
  }

  .dot-column {
    width: 20px;
    text-align: center;
    border-bottom: none !important;
  }



  .summary-contents {
    display: flex;
    position: relative;
    margin: 180px 0;
  }

  .background-layer {
  position: absolute;
  top: -120px;
  left: 0;
  width: 100%;
  height: 400px;
  background-color: yellowgreen;
  z-index: 0;
}


  .summary-contents .magazine,
  .summary-contents .youtube {
    width: 50%;
    height: 350px;
    position: relative;
  z-index: 1; /* Ensure these are above the background layer */
  }

  .magazine {
    position: relative;
    transform-origin: left bottom;
    margin: -20px 35px 0 120px;
    transition: opacity 0.5s ease-out;
  }


  .magazine .image-slider {
    position: relative;
    width: 100%;
    height: 100%;
    /* Adjust based on your requirement */
    overflow: hidden;
    position: relative;
    transition: transform 0.8s ease;
    transform-origin: left bottom;
  }

  .image-slider:hover {
    transform: scale(1.5);

  }

  .slider-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

    color: green;
    margin: -20px 120px 0 35px;
    transition: opacity 0.5s ease-out;
  }

  .youtube iframe {
    transition: transform 0.8s ease;
    transform-origin: right bottom;
  }

  .youtube:hover iframe {
    transform: scale(1.5);
  }

  .magazine,
  .youtube {
    z-index: 500;
    transition: z-index 1s ease;
  }

  .magazine:hover,
  .youtube:hover {
    z-index: 1000;
  }

  .magazine:hover .label,
.youtube:hover .label {
  transition: transform 0.5s ease;
}

.magazine:hover .label {
  transform: translateX(-98%); /* Move the label to the left */
  margin-right: 10px; /* Add some space between the label and the border */
}

.youtube:hover .label {
  transform: translateX(17%); /* Move the label to the right */
  margin-left: 10px; /* Add some space between the label and the border */
}

.label {
  display: inline-block;
  color: green;
  font-size: 30px;
  padding: 5px; /* Some padding around the text */
  border-radius: 5px; /* Rounded corners for the label */
  transition: transform 0.5s ease; /* Smooth transition for moving label */
}

.youtube .label {
  text-align: right;
  width: 100%;
}

@keyframes magazine-overlay-frame {
  0% {
    transform: translateX(0px),;
  }

  50% {
    transform: translateX(6%) ;
  }


  100% {
    transform: translateX(0px);
  }
}

@keyframes youtube-overlay-frame {
  0% {
    transform: translateX(0px),;
  }

  50% {
    transform: translateX(-6%) ;
  }


  100% {
    transform: translateX(0px);
  }
}



.magazine-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 2%;
  top: -38px;
  width: 28%;
  height: 94%;
  background-color: rgba(128, 128, 128, 0.7);
  color: white;
  font-size: 24px;
  z-index: 2;
  transition: opacity 0.5s ease;
  padding: 15px;
  animation-name: youtube-overlay-frame;
  animation-duration: 0.8s;
}

.magazine:hover ~ .magazine-overlay {
  opacity: 1;
}

.magazine:hover + .youtube {
  opacity: 0;
}

.youtube-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2%;
  top: -38px;
  width: 28%;
  height: 94%;
  background-color: rgba(128, 128, 128, 0.7);
  color: white;
  font-size: 24px;
  z-index: 2;
  transition: opacity 0.5s ease;
  padding: 15px;
  animation-name: magazine-overlay-frame;
  animation-duration: 0.8s;
}

.youtube:hover ~ .youtube-overlay {
  opacity: 1;
}

.youtube:hover ~ .magazine {
  opacity: 0;
}


  .recommend {
    margin: 40px 4px;
    height: 350px;
  }

  .recommend ::v-deep .nav.nav-tabs {
    margin: 0 0 3px 0;
  }

  .recommend ::v-deep .nav-link {
    color:rgb(63, 214, 63);
  }

  .recommend ::v-deep .nav-link:focus, .nav-link:hover {
    color:rgb(0, 165, 0);
  }

  .recommend ::v-deep .nav-link.active {
    color:black;
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