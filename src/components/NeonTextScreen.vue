<script setup lang="ts"></script>

<template>
  <div class="root">
    <h2 contenteditable="true" class="h2">Text</h2>
  </div>
</template>

<style lang="sass" scoped>
@keyframes neon
  0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%
    color: rgb(4, 50, 124)
    text-shadow: none

  18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%
    color: #fff
    text-shadow: 0 0 10px rgb(6, 149, 231), 0 0 20px rgb(6, 149, 231), 0 0 40px rgb(6, 149, 231), 0 0 80px rgb(6, 149, 231), 0 0 160px rgb(6, 149, 231)

.root
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  background: rgb(5, 30, 71)

  *
    font-family: 'Arial', serif

.h2
  position: relative
  width: 100%
  font-size: 6em
  line-height: 0.7em
  text-align: center
  letter-spacing: 15px
  color: rgb(4, 50, 124)
  text-transform: uppercase
  outline: none
  -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(11, 70, 138, 0.267))
  animation: neon 1s linear infinite
</style>
