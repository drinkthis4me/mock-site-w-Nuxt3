<template>
  <div>
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DefaultLayout',
});
</script>
<style scoped lang="sass"></style>
