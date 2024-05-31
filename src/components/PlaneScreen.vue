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
      <div class="texts">
        <div class="title">
          Начните путешествие в<br />
          <div class="content">
            <span class="accent first">Исландию</span><br />
            <span class="accent second">Исландию</span><br />
          </div>
          прямо сейчас
        </div>
      </div>
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
@keyframes wave
  0%, 100%
    clip-path: polygon(0% 39%, 9% 41%, 18% 45%, 24% 50%, 31% 55%, 39% 60%, 46% 62%, 53% 62%, 62% 59%, 68% 54%, 76% 50%, 83% 49%, 90% 50%, 97% 52%, 100% 54%, 100% 100%, 0% 100%)
  50%
    clip-path: polygon(0 49%, 5% 53%, 11% 57%, 16% 59%, 28% 64%, 38% 57%, 41% 58%, 48% 56%, 54% 58%, 64% 62%, 71% 66%, 79% 68%, 86% 66%, 92% 64%, 100% 62%, 100% 100%, 0% 100%)

.root
  font-family: 'Poppins', Arial, sans-serif
  background-color: #020b1e

.layer
  position: fixed
  left: 0
  width: 100%
  height: 100vh
  background: #020b1e

.texts
  position: absolute
  top: 50%
  left: 50%
  font-family: "Roboto", sans-serif
  font-size: 44px
  font-weight: 700
  letter-spacing: 0.05em
  text-align: center
  color: #fff
  transform: translate(-50%, -50%)

  @media (max-width: 1024px)
    font-size: 36px

  @media (max-width: 768px)
    transform: translate(-20%, -50%)

  @media (max-width: 575px)
    z-index: 3
    top: auto
    left: 0
    right: 0
    bottom: 10%
    width: 100%
    font-size: 24px
    transform: translate(0, 0)

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

.content
  position: relative

.accent
  position: absolute
  top: 50%
  left: 50%
  font-size: 120px
  color: transparent
  transform: translate(-50%, -50%)
  @media (max-width: 1024px)
    font-size: 80px

  @media (max-width: 768px)
    font-size: 60px

  &.first
    color: transparent
    -webkit-text-stroke: 2px #42bce6

  &.second
    color: #42bce6
    animation: wave 4s ease-in-out infinite
</style>
