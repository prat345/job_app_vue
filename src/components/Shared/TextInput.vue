<template>
  <input
    type="text"
    :value="modelValue"
    class="focus:outlne-none w-full text-lg font-normal"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"], // avoid eslint warning
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value) // send to JobSearchForm
    }
  }
}
</script>

<style></style>
