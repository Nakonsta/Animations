<script setup lang="ts">
import { ref, onMounted } from 'vue';

onMounted(() => {});
</script>

<template>
  <div class="root">
    <div class="inner">
      <div class="box">
        <video autoplay muted loop class="video">
          <source src="/video/video1.mp4" type="video/mp4" />
        </video>
        <img
          src="/img/silhouette.jpg"
          alt="Iceland silhouette"
          class="silhouette"
        />
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

  @media (max-width: 575px)
    height: 50vh

.inner
  display: flex
  justify-content: center
  align-items: center
  @media (max-width: 767px)
    width: 100%

.box
  position: relative
  width: 765px
  height: 530px
  @media (max-width: 767px)
    width: 100%
    height: 400px

  @media (max-width: 575px)
    height: 250px

  @media (max-width: 360px)
    height: 200px


.silhouette
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  object-fit: cover
  mix-blend-mode: screen

  // @media (max-width: 767px)
  //   object-fit: contain

.video
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  object-fit: cover
</style>
