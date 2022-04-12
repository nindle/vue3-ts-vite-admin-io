<template>
  <div class="css" @click="goAbout">登录</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import store from '../../store/index';
const router = useRouter();
const goAbout = () => {
  store.commit('setToken');
  router.push({ path: '/' });
};
</script>

<style scoped lang="scss"></style>
