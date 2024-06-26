<script setup lang="ts">
import { ref, onMounted } from 'vue';

const wrapper = ref<null | Element>(null);

onMounted(() => {
  const options = {
    threshold: 0.5,
  };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wrapper.value?.classList.add('animated');
        setTimeout(() => {
          wrapper.value?.classList.add('hoverAdded');
        }, 2000);
      } else {
        wrapper.value?.classList.remove('animated');
        wrapper.value?.classList.remove('hoverAdded');
      }
    });
  }, options);

  if (wrapper.value) observer.observe(wrapper.value);
});
</script>

<template>
  <div class="root">
    <div ref="wrapper" class="h2">
      Believe
      <span>Believe</span>
      <span>Believe</span>
      <span>in yourself</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@keyframes pushingTopEffect
  0%
    top: 0
  50%
    top: -18px
  100%
    top: 0

@keyframes pushingBottomEffect
  0%
    top: 0
  50%
    top: 18px
  100%
    top: 0

@keyframes showEffect
  0%
    transform: translateY(-50%) scaleY(0)
  50%
    transform: translateY(-50%) scaleY(1)
  100%
    transform: translateY(-50%) scaleY(0)


.root
  position: relative
  min-height: 100vh
  font-family: monospace

.h2
  position: absolute
  top: 50%
  left: 50%
  margin: 0
  padding: 0
  font-size: 6em
  font-weight: 700
  color: transparent
  text-transform: uppercase
  transform: translate(-50%, -50%)

  @media (max-width: 425px)
    font-size: 5em

  @media (max-width: 360px)
    font-size: 4.5em

  span:nth-child(1)
    position: absolute
    top: 0
    left: 0
    color: #000
    transition: 0.5s
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%)
    overflow: hidden

  span:nth-child(2)
    position: absolute
    top: 0
    left: 0
    color: #000
    transition: 0.5s
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%)
    overflow: hidden

  span:nth-child(3)
    position: absolute
    top: 50%
    left: 0
    width: calc(100% - 10px)
    margin-left: 5px
    padding-left: 20px
    font-size: 0.25em
    font-weight: 500
    letter-spacing: 0.7em
    text-align: center
    color: #000
    background: #ff0
    transform: translateY(-50%) scaleY(0)
    transition: 0.5s

  &.hoverAdded:hover
    span:nth-child(1)
      transform: translateY(-18px)
    span:nth-child(2)
      transform: translateY(18px)
    span:nth-child(3)
      transform: translateY(-50%) scaleY(1)

.h2.animated
  span:nth-child(1)
    animation: pushingTopEffect 1s ease 0.5s 1
  span:nth-child(2)
    animation: pushingBottomEffect 1s ease 0.5s 1
  span:nth-child(3)
    animation: showEffect 1s ease 0.5s 1
</style>
