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
              <img
                src="~/assets/img/tech-safty/measure-car.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="~/assets/img/tech-safty/measure-cabin-room.png"
                class="d-block w-100"
                alt="..."
              />
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
</style>
