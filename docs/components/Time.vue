<script setup>
import { ref, onMounted } from 'vue'

const hour = ref(null)
const minute = ref(null)
const second = ref(null)

onMounted(() => {
  clock()

  function clock() {
    var now = new Date()
    var h = (now.getHours() % 12) + now.getMinutes() / 59
    var m = now.getMinutes()
    var s = now.getSeconds()
    h *= 30
    m *= 6
    s *= 6
    rotation(hour.value, h)
    rotation(minute.value, m)
    rotation(second.value, s)
  }

  function rotation(target, val) {
    target.style.transform = 'rotate(' + val + 'deg)'
  }

  setInterval(clock, 1000)
})
</script>

<template>
  <div class="time">
    <div class="clock">
      <div class="hand hour" ref="hour"></div>
      <div class="hand minute" ref="minute"></div>
      <div class="hand second" ref="second"></div>
      <div class="point"></div>
      <div class="marker">
        <div class="marker-1"></div>
        <div class="marker-2"></div>
        <div class="marker-3"></div>
        <div class="marker-4"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.time {
  position: relative;
  top: 50%;
  margin: 0 auto;
  width: 192px;
  height: 192px;
  transform: translateY(-50%);
}

.clock {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--vp-c-brand);
  border-radius: 50%;
}

.hand {
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  border-radius: 8px;
  z-index: 200;
}

.hand.hour {
  width: 3%;
  height: 28%;
  background-color: var(--vp-c-brand-dark);
}

.hand.minute {
  width: 2%;
  height: 35%;
  background-color: var(--vp-c-brand-darker);
}

.hand.second {
  width: 1%;
  height: 40%;
  background-color: var(--vp-c-brand-lighter);
}

.point {
  position: absolute;
  width: 5%;
  height: 5%;
  background-color: var(--vp-c-brand-lighter);
  border-radius: 50%;
  z-index: 300;
}

.marker {
  position: relative;
  width: 93%;
  height: 93%;
  box-shadow: inset 0.2rem 0.2rem 0.5rem var(--vp-c-brand-darker),
    inset -0.2rem -0.2rem 0.5rem var(--vp-c-brand-lighter);
  border-radius: inherit;
}

.marker::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  width: 80%;
  height: 80%;
  box-shadow: inset 0.1rem 0.1rem 0.2rem var(--vp-c-brand-darker),
    inset -0.1rem -0.1rem 0.2rem var(--vp-c-brand-lighter);
  border-radius: 50%;
  filter: blur(1px);
}

.marker-1,
.marker-2,
.marker-3,
.marker-4 {
  position: absolute;
  border-radius: 4px;
  box-shadow: inset 1px 1px 1px var(--vp-c-brand-darker),
    inset -1px -1px 1px var(--vp-c-brand-lighter);
}

.marker-1,
.marker-2 {
  width: 3px;
  height: 14px;
  left: 49%;
}

.marker-3,
.marker-4 {
  width: 14px;
  height: 3px;
  top: 49%;
}

.marker-1 {
  top: 3%;
}

.marker-2 {
  top: 96%;
  transform: translateY(-0.8rem);
}

.marker-3 {
  left: 3%;
}

.marker-4 {
  left: 96%;
  transform: translateX(-0.8rem);
}

@media (min-width: 640px) {
  .time {
    width: 256px;
    height: 256px;
  }
}

@media (min-width: 960px) {
  .time {
    width: 300px;
    height: 300px;
  }
}
</style>
