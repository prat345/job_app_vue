<template>
  <img :src="imageUrl" alt="profile-picture" class="h-8 w-8 object-contain" />
</template>

<script lang="ts" setup>
import { ref } from "vue"

const imageUrl = ref("https://cdn-icons-png.flaticon.com/512/3135/3135715.png")
</script>

<style></style>
