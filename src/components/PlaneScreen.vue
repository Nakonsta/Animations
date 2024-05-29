<script setup lang="ts">
import { ref, onMounted } from 'vue';

const planeRoot = ref<null | HTMLElement>(null);
const layer = ref<null | HTMLElement>(null);

onMounted(() => {
  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    if (layer.value) layer.value.style.left = `${scrollY * 2}px`;
  });
});
</script>

<template>
  <div ref="planeRoot" class="root">
    <div ref="layer" class="layer">
      <img src="/img/plane2.png" alt="plane" class="img" />
    </div>
    <section class="section"></section>
    <div class="text">
      <div class="h2">
        Welcome to <br />
        <span class="transparent-text">Iceland</span>
      </div>
    </div>
    <section class="section section2"></section>
  </div>
</template>

<style lang="sass" scoped>
.root
  font-family: 'Poppins', Arial, sans-serif
  background-color: #020b1e

.layer
  position: fixed
  left: 0
  width: 100%
  height: 100vh
  background: #020b1e

  // &::before
  //   content: ''
  //   position: absolute
  //   left: -40px
  //   width: 80px
  //   height: 100px
  //   background-color: #020b1e
  //   transform: skewX(40deg)

  // &::after
  //   z-index: 1
  //   content: ''
  //   position: absolute
  //   left: -40px
  //   bottom: 0
  //   width: 80px
  //   height: 100px
  //   background-color: #020b1e
  //   transform: skewX(-40deg)

.img
  z-index: 2
  position: absolute
  left: -50vh
  height: 100vh

  @media (max-width: 575px)
    left: -60vh

.section
  height: 200vh
  background-image: url('/img/iceland2.jpeg')
  background-size: cover
  background-attachment: fixed

  @media (max-width: 767px)
    height: 130vh

  &.section2
    height: 100vh
    background-image: url('/img/iceland1.jpg')
    background-size: cover
    background-attachment: fixed

    @media (max-width: 767px)
      height: 50vh

.text
  height: 50vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.h2
  font-size: 3em
  font-weight: 200
  letter-spacing: 0.25em
  line-height: 2.5em
  color: #fff
  text-transform: uppercase

  @media (max-width: 575px)
    font-size: 40px
    letter-spacing: 0.2em

  @media (max-width: 470px)
    font-size: 36px

  @media (max-width: 410px)
    letter-spacing: 0.1em

  @media (max-width: 350px)
    letter-spacing: 0

.transparent-text
  font-size: 4em
  font-weight: 900
  letter-spacing: 0
  background: url('/img/iceland1.jpg')
  background-size: cover
  background-attachment: fixed
  background-clip: text
  color: transparent

  @media (max-width: 1200px)
    font-size: 3.5em

  @media (max-width: 1000px)
    font-size: 2.7em

  @media (max-width: 767px)
    font-size: 2.1em

  @media (max-width: 575px)
    font-size: 80px

  @media (max-width: 470px)
    font-size: 70px

  @media (max-width: 410px)
    font-size: 60px

  @media (max-width: 350px)
    font-size: 55px
</style>
