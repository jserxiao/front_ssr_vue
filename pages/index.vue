<template>
    <div class="index">
      <NuxtWelcome/>
      <span @click="link('home')">home</span>
      <span @click="link('login')">login</span>
    </div>
  </template>
<script setup lang="ts">
const {push} = useRouter();
const link = (path: string) => {
  push(path)
}
</script>