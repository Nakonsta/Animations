<script setup lang="ts"></script>

<template>
  <div class="root">
    <div class="inner">
      <img src="/img/iphone.jpg" alt="iPhone empty screen" class="img" />
      <img src="/img/iphone.jpg" alt="iPhone empty screen" class="img" />
      <img src="/img/iphone.jpg" alt="iPhone empty screen" class="img" />
      <img src="/img/iphone.jpg" alt="iPhone empty screen" class="img" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.root
  display: flex
  justify-content: center
  align-items: center
  height: 100vh

.inner
  position: relative
  width: 360px
  height: 652px
  margin-top: 150px
  background-color: rgba(0, 0, 0, .1)
  transform: rotate(-30deg) skew(25deg) scale(.8)
  transition: 0.5s

  &:hover .img:nth-child(4)
    transform: translate(160px, -160px)
    opacity: 1

  &:hover .img:nth-child(3)
    transform: translate(120px, -120px)
    opacity: .8

  &:hover .img:nth-child(2)
    transform: translate(80px, -80px)
    opacity: .6

  &:hover .img:nth-child(1)
    transform: translate(40px, -40px)
    opacity: .4

.img
  position: absolute
  width: 100%
  transition: 0.5s
</style>
