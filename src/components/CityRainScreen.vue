<script setup lang="ts"></script>

<template>
  <div class="root">
    <section ref="section" class="section">
      <div ref="rain" style="opacity: 0.5" class="rain"></div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
@keyframes color-change
  0%, 100%
    filter: hue-rotate(0deg)
  50%
    filter: hue-rotate(360deg)

@keyframes rain
  0%
    background-position: 0 0
  100%
    background-position: 3% 100%

@keyframes rain-opacity
  0%, 100%
    opacity: 1

  50%
    opacity: 0.3

.section
  position: relative
  width: 100%
  height: 100vh
  background-image: url('/img/city.jpg')
  background-position: 50% 75%
  background-size: cover
  animation: color-change 3s linear infinite

.rain
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-image: url('/img/rain.png')
  animation: rain 0.2s linear infinite, rain-opacity 10s linear infinite
</style>
