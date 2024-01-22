<template>
  <header-container>
    <template v-slot:title>
      <h1 class="block text-4xl font-normal">Teams</h1>
    </template>
    <template v-slot:subtitle>
      <h2 class="my-4 block text-base font-light">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia.
      </h2>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "../components/Shared/HeaderContainer.vue"
export default {
  name: "TeamsView",
  components: { HeaderContainer }
}
</script>

<style></style>
