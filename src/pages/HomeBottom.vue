<script setup lang="ts">
import PlaneScreen from '@/components/PlaneScreen.vue';
import PushApartScreen from '@/components/PushApartScreen.vue';
import NeonTextScreen from '@/components/NeonTextScreen.vue';
import AnimatedEyesScreen from '@/components/AnimatedEyesScreen.vue';
import FunnelScreen from '@/components/FunnelScreen.vue';
import PhoneScreen from '@/components/PhoneScreen.vue';
import RollerScreen from '@/components/RollerScreen.vue';
import PushApartScreen1 from '@/components/PushApartScreen1.vue';
import SilhouetteScreen from '@/components/SilhouetteScreen.vue';
import CityRainScreen from '@/components/CityRainScreen.vue';
import ForestRain from '@/components/ForestRain.vue';
import GsapScreen from '@/components/GsapScreen.vue';
import BlobsScreen from '@/components/BlobsScreen.vue';
import TextsScreen from '@/components/TextsScreen.vue';
</script>

<template>
  <div class="root">
    <BlobsScreen title="Прогуляйтесь по&nbsp;дождливому Рейкьявику" />
    <CityRainScreen />
    <PushApartScreen />
    <TextsScreen />
    <SilhouetteScreen />
    <ForestRain />
    <!-- NeonTextScreen />
    <PhoneScreen />
    <FunnelScreen />
    <PushApartScreen1 />
    <RollerScreen / -->
    <!-- AnimatedEyesScreen / -->

    <!-- div class="container">
      <div>
        <a href="#" class="btn1">
          <span class="front">Hover</span>
          <span class="center"></span>
          <span class="back">Here</span>
        </a>
      </div>
      <div>
        <a href="#" class="btn2">Hover me</a>
      </div>
    </div -->
  </div>
</template>

<style lang="sass" scoped>

.btn1
  display: inline-block
  width: 118px
  height: 42px
  text-align: center
  transform-style: preserve-3d
  perspective: 1000px
  transform-origin: center center

  span
    position: absolute
    top: 0
    left: 0
    display: block
    height: 100%
    width: 100%
    text-align: center
    line-height: 42px
    font-size: 16px
    background-color: rgba(200, 200, 200, .10)
    transform-style: preserve-3d
    backface-visibility: hidden
    border-radius: 3px
    text-transform: uppercase
    color: white
    transition: .75s

  .front
    transform: rotateX(0deg) translateZ(20px)

  .back
    transform: rotateX(180deg) translateZ(20px)

  .center
    background: linear-gradient(to left, #c31a5b, #7129bd)
    backface-visibility: visible

  &:hover
    .front
      transform: rotateX(-180deg) translateZ(20px)
    .back
      transform: rotateX(0deg) translateZ(20px)
    .center
      transform: rotateX(-180deg) translateZ(0px)


.btn2
  position: relative
  display: inline-block
  margin: 10px 0
  padding: 5px 10px
  font-family: Roboto, Arial, sans-serif
  font-size: 22px
  color: deeppink
  border: 1px solid deeppink
  transition: all .5s ease 0s

  &:hover
    color: white

    &::after
      z-index: -1
      width: 100%

  &::after
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 0%
    height: 100%
    background-color: deeppink
    transition: all .5s ease 0s
</style>
