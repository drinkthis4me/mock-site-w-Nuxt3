<template>
  <div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          v-for="item in store.shortNewsList.slice(0, 5)"
          :key="item.id"
          type="button"
          data-bs-target="#myCarousel"
          :data-bs-slide-to="item.id - 1"
          :class="item.id === 1 ? 'active' : ''"
          :aria-current="item.id === 1 ? true : false"
          :aria-label="`Slide ${item.id}`"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="item in store.shortNewsList.slice(0, 5)"
          :key="item.id"
          class="carousel-item"
          :class="item.id === 1 ? 'active' : ''"
        >
          <img
            :src="item.url"
            :alt="item.title"
            class="d-block w-100 bd-placeholder-img"
          />

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Item Number: {{ item.id }}</h1>
              <p>
                Item description: <br />
                {{ item.title }}
              </p>
              <p>
                <a class="btn btn-lg btn-danger" :href="item.url">
                  Item Link
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useFetchNewsStore } from '~~/stores/fetchNews';

export default defineComponent({
  setup() {
    const store = useFetchNewsStore();

    onMounted(() => store.fetchNews());

    return {
      store,
    };
  },
});
</script>
<style scoped lang="scss">
@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }
}
.container {
  text-align: center;
  align-items: center;
  margin: 5rem;
}

.carousel {
  margin-top: 64px;
  margin-bottom: 4rem;
}
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

.carousel-item {
  height: 32rem;
}
</style>
