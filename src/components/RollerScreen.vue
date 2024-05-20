<script setup lang="ts"></script>

<template>
  <div class="root">
    <div class="box">
      <div class="inner">
        <span class="vane"></span>
        <span class="vane"></span>
        <span class="vane"></span>
        <span class="vane"></span>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@keyframes rotation
  0%
    transform: perspective(1000px) rotateX(0)

  100%
    transform: perspective(1000px) rotateX(-360deg)


.root
  position: relative
  height: 100vh
  background-color: #171717

.box
  position: absolute
  top: calc(50% - 150px)
  left: calc(50% - 100px)
  width: 200px
  height: 300px
  transform: perspective(1000px) rotateY(-45deg)
  transform-style: preserve-3d
  // background-color: mediumvioletred

.inner
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  transform-style: preserve-3d
  animation: rotation 5s linear infinite

.vane
  position: absolute
  top: 0
  left: 0
  display: block
  width: 100%
  height: 100%
  border-radius: 20px
  background: linear-gradient(0deg, mediumvioletred, mediumorchid, mediumvioletred)

  &:nth-child(1)
    transform: rotateX(0deg)

  &:nth-child(2)
    transform: rotateX(45deg)

  &:nth-child(3)
    transform: rotateX(-45deg)

  &:nth-child(4)
    transform: rotateX(90deg)
</style>
