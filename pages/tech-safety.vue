<template>
  <div>
    <div class="top-margin">
      <div class="container-fluid">
        <header class="page-header">
          <h2 class="display-6 mb-9 ms-5">安全科技</h2>
          <div class="ms-5">
            <p>TOYOTA致力將您的安全放在首位</p>
          </div>
        </header>
      </div>
      <div class="container px-4 py-5">
        <h2 class="pb-2 text-center">
          人人安全、無交通事故傷亡的社會就是我們的目標
        </h2>
        <p class="text-center">
          我們從三大面向致力朝這個目標前進，將您的安全放在首位
        </p>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div
              class="advantage-item d-flex flex-column justify-content-center"
            >
              <div class="advantage-image">
                <img src="~/assets/img/tech-safty/info-2.svg" alt="people" />
              </div>
              <h3 class="fs-2 text-center">人</h3>
              <p class="text-center">
                教育駕駛與行人<br />
                正確交通觀念
              </p>
            </div>
          </div>
          <div class="feature col">
            <div
              class="advantage-item d-flex flex-column justify-content-center"
            >
              <div class="advantage-image">
                <img src="~/assets/img/tech-safty/info-3.svg" alt="people" />
              </div>
              <h3 class="fs-2 text-center">車</h3>
              <p class="text-center">
                持續精進開發<br />
                安全車輛
              </p>
            </div>
          </div>
          <div class="feature col">
            <div
              class="advantage-item d-flex flex-column justify-content-center"
            >
              <div class="advantage-image">
                <img src="~/assets/img/tech-safty/info-1.svg" alt="people" />
              </div>
              <h3 class="fs-2 text-center">環境</h3>
              <p class="text-center">
                創造安全<br />
                交通環境
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid page-section">
        <div class="container py-5">
          <h2 class="text-center">
            我們不斷透過大量的測試與精密的計算來精進TOYOTA的安全科技
          </h2>
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h3 class="text-center">測試、測試、再測試</h3>
              <p class="text-center">我們分析各種意外事故的資料並執行廣泛的碰撞測試，以持續導入可降低意外事故中傷害的安全措施。</p>
              <div class="image-animation">
                <img src="~/assets/img/tech-safty/measure-ground.png" alt="measure-ground" class="ground">
                <img src="~/assets/img/tech-safty/measure-wall.gif" alt="measure-wall" class="wall">
                <img src="~/assets/img/tech-safty/measure-car.png" alt="measure-car" class="car">
                <img src="~/assets/img/tech-safty/measure-spark.png" alt="measure-spark" class="spark">
              </div>
        
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="row justify-content-center">
                  <dv class="col-lg-6 order-2">
                    <h3 class="text-center">打造未來安全科技</h3>
                    <p>我們建造了一個全世界最先進的駕駛模擬機，它是可移動的圓頂型體，且配備有360度高畫質螢幕，可在此模擬左右轉彎、加速及減速，模擬以實際車輛重現時太過危險之情況、或特殊情況下之駕駛條件。</p>
                    <p>我們以此研究事故時之駕駛反映及車輛資料，並不斷地進化我們的主動安全科技。</p>
                  </dv>
                  <div class="col-lg-6 order-1">
                    <div class="image-animation-cabin">
                      <img src="~/assets/img/tech-safty/measure-cabin-room.png" alt="measure-cabin-room" class="room">
                      <img src="~/assets/img/tech-safty/measure-cabin-base.png" alt="measure-cabin-base" class="base">
                    </div>
                  </div>
                </div>                
              </div>              
            </div>
            <div class="carousel-item">
              <img
                src="~/assets/img/tech-safty/measure-person-model.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TechSafety',
  setup() {
    return {
      name: 'wow',
    };
  },
});
</script>
<style scoped lang="scss">
body {
  color: #525252;
}
.top-margin {
  margin-top: 65px;
}

.page-header {
  background-image: url(~/assets/img/tech-safty/kv.jpg);
  background-size: cover;
  background-position: center center;
  align-items: center;
  height: 380px;
}

header.page-header {
  padding: 60px 0;
}

.advantage-item {
  align-items: center;
  .advantage-image img {
    width: 100px;
    height: 100px;
  }
}

.carousel-item {
  img {
    height: auto;
    width: auto;
    max-height: 50%;
    max-width: 500px;
  }
}

.page-section {
  background-color: #f0f0f4;
}

.image-animation{
  img{
    .ground{
      height:36px;
      bottom: 50px;
      width: 948px;
    }
    .wall{
      left:90px;
      width: 32px;
      bottom: 86px;
    }
    .car{
      left: 440px;
      width:460px;
      bottom: 72px;
    }
    .spark{
      left: 94px;
      width: 86px;
      bottom: 106px;
      opacity: 0;      
    }
  }
}

// .image-animation-cabin{
//   img{
//     max-width: 100%;
//     .room{
//       animation: cabin-room 3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s infinite alternate;
//       top: 35px;
//       width: 330px;
//       margin-left: -65px;
//       left: 50%;
//       transform: rotate(5deg);
//       transform-origin: 50% 95%;
//     }
//     .base{
//       width: 322px;
//       margin-left: -161px;
//       left: 50%;
//       bottom : 0;
//     }
//   }
// }
</style>
