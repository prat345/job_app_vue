<template>
  <input
    type="text"
    :value="modelValue"
    class="focus:outlne-none w-full text-lg font-normal"
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
import { defineComponent } from "vue"

defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(["update:modelValue"])

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit("update:modelValue", target.value) // send to JobSearchForm
}
</script>

<style></style>
