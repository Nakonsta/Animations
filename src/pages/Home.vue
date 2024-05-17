import type { url } from 'inspector';
<script setup lang="ts"></script>

<template>
  <div class="root">
    <div class="container">
      <h2>CSS Transform 2D Tutorial</h2>
      <div class="div">This a normal div element.</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.root
  background-color: #fff

.div
  margin-top: 150px
  margin-left: 100px
  width: 200px
  height: 100px
  background-color: yellowgreen
  transform: skew(20deg, 20deg)

.img
  max-width: 50%
  margin: 0 auto
</style>
