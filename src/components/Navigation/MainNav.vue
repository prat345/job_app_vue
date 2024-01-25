<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-2xl"
          >Logo</router-link
        >

        <nav class="h-full">
          <ul class="flex h-full list-none">
            <li v-for="(item, idx) in navItems" :key="idx" class="h-full">
              <router-link :to="item.url" class="flex h-full items-center px-4 py-2.5">{{
                item.text
              }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ActionButton v-if="!isLogin" @click="LOGIN_USER" text="Sign in" variant="primary" />
          <ProfileImage v-else />
        </div>
      </div>
      <SubNav v-if="isLogin" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user"
import { computed, ref } from "vue"

import ActionButton from "@/components/Shared/ActionButton.vue"
import ProfileImage from "./ProfileImage.vue"
import SubNav from "./SubNav.vue"

const navItems = ref([
  { text: "Teams", url: "/teams" },
  { text: "Location", url: "/" },
  { text: "Benefits", url: "/" },
  { text: "Jobs", url: "/jobs/results" },
  { text: "Students", url: "/" }
])

const userStore = useUserStore()
const isLogin = computed(() => userStore.isLogin)
const headerHeightClass = computed(() => ({
  "h-16": !isLogin.value, // isLogin() from store
  "h-32": isLogin.value
}))
const LOGIN_USER = userStore.LOGIN_USER
</script>

<style></style>
