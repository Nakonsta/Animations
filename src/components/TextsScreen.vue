<script setup lang="ts">
import { ref, onMounted } from 'vue';

const wrapper = ref<null | Element>(null);

onMounted(() => {
  const options = {
    threshold: 0.5,
  };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wrapper.value?.classList.add('animated');
      } else {
        wrapper.value?.classList.remove('animated');
      }
    });
  }, options);

  if (wrapper.value) observer.observe(wrapper.value);
});
</script>

<template>
  <div class="root">
    <div ref="wrapper" class="center">
      <div class="js">Водопады</div>
      <div class="html">Острова</div>
      <div class="vue">Вулканы</div>
      <div class="react">Гейзеры</div>
      <div class="angular">Ледники</div>
      <div class="lf">Исландия</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.root
  background-color: #000
  font-weight: bold
  font-size: 80px
  font-family: sans-serif

  @media (max-width: 1024px)
    font-size: 65px

  @media (max-width: 1024px)
    font-size: 60px

  @media (max-width: 575px)
    font-size: 50px

.center
  width: 800px
  left: 50%
  margin-left: -400px
  min-height: 500px
  text-align: center
  position: relative
  overflow: hidden

  @media (max-width: 1024px)
    width: 100%
    margin-left: -50%

.js,
.html,
.vue,
.react,
.angular,
.lf
  position: absolute
  width: 100%
  top: 150px
  padding: 0 10px
  text-align: center
  color: #fff
  transform-origin: top
  opacity: 0
  // transform: rotateX(90deg)

.animated .js
  color: SkyBlue
  animation: 1.5s ease-out 0s forwards js

.animated .html
  color: MediumAquamarine
  animation: 1.5s ease-out .5s forwards js

.animated .vue
  color: LightSalmon
  animation: 1.5s ease-out 1.5s forwards js

.animated .react
  color: Moccasin
  animation: 1.5s ease-out 2s forwards js

.animated .angular
  color: LightSkyBlue
  animation: 1.5s ease-out 2.5s forwards js

.animated .lf
  animation: 1.5s ease-out 3s forwards lf


@keyframes js
  0%
    transform: rotateX(90deg) scale(.5)
    opacity: 1
  100%
    transform: rotateX(0) scale(1.2)
    opacity: 0

@keyframes lf
  0%
    transform: rotateX(90deg) scale(.5)
    opacity: 1
  100%
    transform: rotateX(0) scale(1.2)
    opacity: 1
</style>
