<template>
  <yt-layout-page>
    <yt-layout-page-item>
      <yt-radio v-model="value" :options="options" />
    </yt-layout-page-item>
  </yt-layout-page>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('1')
const options = ref([
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
])
</script>
