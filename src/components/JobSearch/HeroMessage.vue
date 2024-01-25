<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="['capitalize', messageClass]">{{ message }} </span><br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at ...</h2>
  </section>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue"

const message = ref("Build")
const messages = ["Build", "Create", "Design", "Code"]
const count = ref(1)
const interval = ref<ReturnType<typeof setInterval>>(null)

const messageClass = computed(() => ({ [message.value.toLowerCase()]: true }))
const changeMessage = () => {
  interval.value = setInterval(() => {
    message.value = messages[count.value]
    const nextIdx = (count.value + 1) % messages.length
    count.value = nextIdx
  }, 3000)
}
onMounted(changeMessage) // or onCreated
onBeforeUnmount(() => clearInterval(interval.value))
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: green;
}
.design {
  color: orange;
}
.code {
  color: red;
}
</style>
