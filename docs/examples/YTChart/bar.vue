<template>
  <yt-layout-page>
    <yt-layout-page-item>
      <yt-chart :options="options" style="width: 100%; height: 500px" />
    </yt-layout-page-item>
  </yt-layout-page>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const options = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
})
</script>
