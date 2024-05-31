<script setup lang="ts">
// @ts-nocheck
import { ref, onMounted } from 'vue';

const props = defineProps({
  title: { type: String, default: 'Добро пожаловать в Исландию' },
  textBackground: { type: String, default: '/img/forest3.jpeg' },
});

const root = ref<null | Element>(null);
const firstBlob = ref<null | Element>(null);
const secondBlob = ref<null | Element>(null);
const thirdBlob = ref<null | Element>(null);
const fourthBlob = ref<null | Element>(null);
const fifthBlob = ref<null | Element>(null);
const sixBlob = ref<null | Element>(null);

const getRandomValue = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

class Blob {
  constructor(el) {
    this.el = el;
    this.size = el.getBoundingClientRect().width;
    this.x = getRandomValue(0, root.value.clientWidth - this.size);
    this.y = getRandomValue(0, root.value.clientHeight - this.size);
    this.vx = getRandomValue(2, 10.5) * Math.random() > 0.5 ? 1 : -1;
    this.vy = getRandomValue(2, 10.5) * Math.random() > 0.5 ? 1 : -1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x >= root.value.clientWidth - this.size) {
      this.vx *= -1;
      this.x = root.value.clientWidth - this.size;
    }

    if (this.y >= root.value.clientHeight - this.size) {
      this.vy *= -1;
      this.y = root.value.clientHeight - this.size;
    }

    if (this.x <= 0) {
      this.vx *= -1;
      this.x = 0;
    }

    if (this.y <= root.value.getBoundingClientRect().top) {
      this.vy *= -1;
      this.y = root.value.getBoundingClientRect().top;
    }
  }

  move() {
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}

const initBlobs = () => {
  const blobs = [
    firstBlob.value,
    secondBlob.value,
    thirdBlob.value,
    fourthBlob.value,
    fifthBlob.value,
    sixBlob.value,
  ].map((blobEl) => new Blob(blobEl));

  const update = () => {
    blobs.forEach((blob) => {
      blob.update();
      blob.move();
    });
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
};

onMounted(() => {
  initBlobs();
});
</script>

<template>
  <div ref="root" class="root">
    <div class="blobs">
      <div
        v-html="title"
        :style="`background-image: url(${textBackground}); background-color: darkgreen `"
        class="title"
      ></div>
      <div class="glass"></div>
      <div class="items">
        <div ref="firstBlob" class="blob blue"></div>
        <div ref="secondBlob" class="blob blue"></div>
        <div ref="thirdBlob" class="blob purple"></div>
        <div ref="fourthBlob" class="blob purple"></div>
        <div ref="fifthBlob" class="blob pink"></div>
        <div ref="sixBlob" class="blob white"></div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.root
  z-index: 2
  position: relative
  height: 100vh
  overflow: hidden

.blobs
  z-index: -1
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%

.title
  z-index: 4
  position: absolute
  top: 50%
  left: 50%
  font-size: 60px
  text-align: center
  font: 900 6em/1 "Roboto", sans-serif
  letter-spacing: 0
  padding: .25em 0 .325em
  display: block
  margin: 0 auto
  text-shadow: 0 0 80px rgba(255,255,255,.5)
  background-repeat: repeat-y
  -webkit-background-clip: text
  background-clip: text
  -webkit-text-fill-color: transparent
  -webkit-animation: aitf 80s linear infinite
  -webkit-transform: translate3d(0,0,0) translate(-50%, -50%)
  -webkit-backface-visibility: hidden

  @media (max-width: 768px)
    font-size: 72px

  @media (max-width: 575px)
    font-size: 60px

  @media (max-width: 475px)
    font-size: 50px

  @media (max-width: 400px)
    font-size: 40px

@-webkit-keyframes aitf
  0%
    background-position: 0% 50%
  100%
    background-position: 100% 50%


.glass
  z-index: 2
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%
  backdrop-filter: blur(120px)
  -webkit-backdrop-filter: blur(120px)

.items
  z-index: 1
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%
  filter: blur(70px)

.blob
  z-index: 1
  position: absolute
  top: 0
  left: 0
  width: 800px
  aspect-ratio: 1
  border-radius: 50%

.blue
  background-color: #42bce6

.purple
  background-color: rgba(#9ACD32, 0.5)

.white
  z-index: 2
  width: 300px
  background-color: #fff

.pink
  z-index: 2
  background-color: rgba(yellow, 0.3)
</style>
