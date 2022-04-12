<template>
  <div class="" @click="goAbout">123</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const goAbout = () => {
  router.push({ name: 'login' });
};
</script>

<style scoped lang="scss"></style>
