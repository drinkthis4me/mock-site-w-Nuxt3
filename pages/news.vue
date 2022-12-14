<template>
  <div>
    <div class="container-fluid top-margin">
      <header class="page-header">
        <h2 class="page-title text-center">品牌新聞</h2>
      </header>
    </div>

    <!-- filter actions -->
    <div class="container my-5">
      <ul class="list-inline text-center">
        <li class="list-inline-item">
          <a class="type-text" @click="changeFilter('all')">全部</a>
        </li>
        <li class="list-inline-item">
          <a class="type-text" @click="changeFilter('oddID')"> 品牌活動 </a>
        </li>
        <li class="list-inline-item">
          <a class="type-text" @click="changeFilter('evenID')"> 品牌新聞 </a>
        </li>
        <li class="list-inline-item">
          <a class="type-text" @click="changeFilter('lessThanFive')">
            優惠活動
          </a>
        </li>
        <li class="list-inline-item">
          <a class="type-text" @click="changeFilter('greaterThanFive')">
            中獎名單
          </a>
        </li>
      </ul>
    </div>

    <div class="container-lg">
      <!-- News in cards -->
      <div v-if="store.shortNewsList.length > 0" class="row">
        <div
          v-for="item in listToRender"
          :key="item.id"
          class="card border-danger col-12 col-sm-6 col-lg-4 position-relative"
        >
          <img
            :src="item.thumbnailUrl"
            class="card-img-top"
            alt="jsonplaceholder stock photo"
          />
          <a :href="item.url" class="stretched-link"></a>
          <div class="card-body">
            <p class="card-text">{{ item.id }}. {{ item.title }}</p>
          </div>
        </div>
      </div>
      <!-- Placeholder for cards -->
      <div v-else class="row">
        <div
          v-for="n in 6"
          :key="n"
          class="card col-12 col-sm-6 col-lg-4"
          aria-hidden="true"
        >
          <img src="..." class="card-img-top" alt="Loading" />
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed, ref } from 'vue';
import { useFetchNewsStore } from '~~/stores/fetchNews';

export default defineComponent({
  name: 'News',
  setup() {
    const store = useFetchNewsStore();

    onMounted(() => store.fetchNews());

    interface photo {
      albumId: number;
      id: number;
      title: string;
      url: string;
      thumbnailUrl: string;
    }

    // Possible filter can be used
    const filters = [
      {
        condition: 'all',
        fn: (i: photo) => i === i,
      },
      {
        condition: 'oddID',
        fn: (i: photo) => i.id % 2 !== 0,
      },
      {
        condition: 'evenID',
        fn: (i: photo) => i.id % 2 === 0,
      },
      {
        condition: 'lessThanFive',
        fn: (i: photo) => i.id <= 5,
      },
      {
        condition: 'greaterThanFive',
        fn: (i: photo) => i.id >= 5,
      },
    ];

    // ref to target filter
    const targetFilter = ref(filters.find((t) => t.condition === 'all'));

    // actual list to render after filtered
    const listToRender = computed(() => {
      if (targetFilter.value)
        return store.shortNewsList.filter(targetFilter.value.fn);
      else return store.shortNewsList;
    });

    // link action for changing filter
    function changeFilter(target: string) {
      const inputFilter = filters.find((t) => t.condition === target);
      if (inputFilter) targetFilter.value = inputFilter;
      else console.error(`${target} doesn't exist on filters`);
    }

    return {
      store,
      listToRender,
      changeFilter,
    };
  },
});
</script>

<style scoped lang="scss">
.top-margin {
  margin-top: 65px;
}

header.page-header {
  background-color: #f7f7f5;
  padding: 40px 0;
  margin: none;
}

a.type-text {
  color: #525252;
  text-decoration: none;
  &:hover {
    color: #ba222e;
  }
  cursor: pointer;
}

.list-inline-item {
  margin-left: 15px;
  padding: 0 10px;
}

.card {
  --bs-border-opacity: 0;
  &:hover {
    --bs-border-opacity: 1;
    box-shadow: 0 0.5rem 1rem rgba(black, 0.15);
    color: #ba222e;
  }
}
</style>
