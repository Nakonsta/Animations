<script setup lang="ts">
// @ts-ignore
import { RainyDay } from '../../node_modules/rainyday.js/src/rainyday.js';
import { ref, onMounted } from 'vue';

const section = ref<null | HTMLElement>(null);

onMounted(() => {
  const rday = new RainyDay({
    image: section.value,
    blur: 6,
  });
});
</script>

<template>
  <div class="root">
    <section ref="section" class="section"></section>
  </div>
</template>

<style lang="sass" scoped>
.section
  position: relative
  width: 100%
  height: 100vh
  background-image: url('/img/forest5.jpg')
  background-position: 50% 75%
  background-size: cover

  @media (max-width: 575px)
    height: 50vh
</style>
