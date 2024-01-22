<template>
  <img :src="imageUrl" alt="profile-picture" class="h-8 w-8 object-contain" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    }
  }
}
</script>

<style></style>
