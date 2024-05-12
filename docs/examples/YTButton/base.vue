<template>
  <yt-layout-page class="t_button_demo">
    <yt-layout-page-item>
      <div style="display: flex; align-items: center">
        <div style="width: 140px; font-weight: 700">输入防抖时间：</div>
        <el-input-number
          style="width: 240px"
          v-model="time"
          placeholder="请输入防抖时间（毫秒）"
          :min="1000"
          :max="10000"
          :controls="false"
          @change="handleChange"
        />
      </div>
      <yt-button
        style="margin-top: 15px"
        color="#626aef"
        :time="time"
        @click="exportExcel"
        >导出</yt-button
      >
      <yt-button
        style="margin-top: 15px"
        type="sucess"
        :time="time"
        @click="exportExcel"
        >导出</yt-button
      >
    </yt-layout-page-item>
    <yt-layout-page-item>
      <div class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </div>
    </yt-layout-page-item>

    <yt-layout-page-item>
      <div class="mb-4">
        <yt-button>Default</yt-button>
        <yt-button type="primary" time >Primary</yt-button>
        <yt-button type="success">Success</yt-button>
        <yt-button type="info">Info</yt-button>
        <yt-button type="warning">Warning</yt-button>
        <yt-button type="danger">Danger</yt-button>
      </div>
    </yt-layout-page-item>
  </yt-layout-page>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const time = ref(1000)
const handleChange = (val) => {
  console.log('输入框的值：', val)
}
const exportExcel = () => {
  console.log('点击事件')
}
</script>
