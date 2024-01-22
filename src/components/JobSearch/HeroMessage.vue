<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="['capitalize', messageClass]">{{ message }} </span><br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at ...</h2>
  </section>
</template>

<script>
export default {
  name: "HeroMessage",
  data() {
    return {
      message: "Build",
      messages: ["Build", "Create", "Design", "Code"],
      interval: null,
      count: 1
    }
  },
  computed: {
    messageClass() {
      return { [this.message.toLowerCase()]: true }
    }
  },
  created() {
    this.changeMessage()
  },
  beforeUnmount() {
    // interval will run forever even unmounted
    clearInterval(this.interval)
  },
  methods: {
    changeMessage() {
      this.interval = setInterval(() => {
        this.message = this.messages[this.count]
        const nextIdx = (this.count + 1) % this.messages.length
        this.count = nextIdx
      }, 3000)
    }
  }
}
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
