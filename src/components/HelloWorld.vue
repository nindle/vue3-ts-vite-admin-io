<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<
  {
    msg: string;
    bar?: number;
  }
>();

const emit = defineEmits<
  {
    (e: 'change', id: number): void;
    (e: 'update', value: string): void;
  }
>();

console.log(props.msg);
console.log(emit);

const count = ref(0);
</script>

<style scoped>
</style>
