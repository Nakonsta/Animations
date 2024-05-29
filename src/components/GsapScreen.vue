<script setup lang="ts">
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';

const wrapper = ref<null | Element>(null);

onMounted(() => {
  gsap.to(wrapper.value, { duration: 1, x: 100 });
});
</script>

<template>
  <div class="root">
    <div ref="wrapper">Hello, I'm animated!</div>
  </div>
</template>

<style lang="sass" scoped>
.root
  overflow: hidden
</style>
