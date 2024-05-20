<script setup lang="ts">
import { ref, onMounted } from 'vue';

const root = ref<null | HTMLElement>(null);
const eyeLeft = ref<null | HTMLElement>(null);
const eyeRight = ref<null | HTMLElement>(null);

onMounted(() => {
  root.value?.addEventListener('mousemove', (event) => {
    [eyeLeft.value, eyeRight.value].forEach((eye) => {
      let x = eye?.getBoundingClientRect()?.left + eye?.clientWidth / 2;
      let y = eye?.getBoundingClientRect()?.top + eye?.clientWidth / 2;
      let raidan = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = raidan * (180 / Math.PI) * -1 + 270;
      eye.style.transform = `rotate(${rot}deg)`;
    });
  });
});
</script>

<template>
  <div ref="root" class="root">
    <div class="face">
      <div class="eyes">
        <div ref="eyeLeft" class="eye eye2"></div>
        <div ref="eyeRight" class="eye"></div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.root
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  background-color: rgb(8, 84, 139)

.face
  position: relative
  display: flex
  justify-content: center
  align-items: center
  width: 300px
  height: 300px
  background-color: rgb(255, 198, 54)
  border-radius: 50%

  &::before
    content: ''
    position: absolute
    top: 180px
    width: 150px
    height: 70px
    background-color: crimson
    border-bottom-left-radius: 70px
    border-bottom-right-radius: 70px
    transition: 0.5s

  &:hover::before
    width: 150px
    height: 70px
    background-color: crimson
    border-bottom-left-radius: 60px
    border-bottom-right-radius: 60px

.eyes
  position: relative
  top: -40px
  display: flex

.eye
  position: relative
  width: 80px
  height: 80px
  margin: 0 15px
  background-color: #fff
  border-radius: 50%

  &::before
    content: ''
    position: absolute
    top: 50%
    left: 25px
    width: 40px
    height: 40px
    background-color: rgb(42, 42, 42)
    border-radius: 50%
    transform: translate(-50%, -50%)
</style>
