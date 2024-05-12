<template>
  <yt-layout-page class="t_button_demo">
    <yt-layout-page-item>
      <yt-map
        v-model="data"
        placeholder="请选择坐标"
      ></yt-map>
      <div style="margin-top: 10px;">modelValue：{{ data }}</div>
    </yt-layout-page-item>
  </yt-layout-page>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const data = ref([])
</script>
