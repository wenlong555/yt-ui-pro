<template>
  <yt-layout-page class="t_button_demo">
    <yt-layout-page-item>
      <yt-button text style="font-size: 28px" tip="编辑" icon="Edit" />
      <yt-button text tip="删除" icon="Delete" />
      <yt-button link tip="primary" icon="Search" />
      <yt-button text tip="primary" icon="Search" />
      <yt-button text type="primary" tip="primary" icon="Edit" />
      <yt-button text type="success" tip="success" icon="Check" />
      <yt-button text type="info" tip="info" icon="Message" />
      <yt-button text type="warning" tip="warning" icon="Star" />
      <yt-button
        text
        type="danger"
        tip="danger"
        icon="Delete"
        :tipProps="{
          effect: 'light',
          placement: 'bottom',
        }"
      />
    </yt-layout-page-item>
  </yt-layout-page>
</template>