<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">Action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      <div>{{ store.count }}</div>
      <div>{{ store.doubleCount }}</div>
      <div>
        <button @click="store.increment">count++</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from '@/stores/counter';

export default defineComponent({
  setup() {
    const store = useCounterStore();

    return {
      store,
    };
  },
});
</script>

<style scoped>
.container {
  text-align: center;
  align-items: center;
  margin: 5rem;
}
</style>
