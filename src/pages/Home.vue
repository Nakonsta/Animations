import type { url } from 'inspector';
<script setup lang="ts"></script>

<template>
  <div class="root">
    <div class="container">
      <a href="#" class="btn">Hover me</a>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.btn
  position: relative
  display: inline-block
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
