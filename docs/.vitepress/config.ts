import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: '雅拓前端组件库',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  base: '/yt-ui-pro/',
  lastUpdated: true,
  themeConfig: {
    logo: '../../public/img/bank.png',
    siteTitle: '雅拓科技',
    outline:[2,6],
    nav: [
      {
        text: '安装指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/YTSelect/base.md' },
    ],
    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [
            { text: 'Button组件', link: '/components/YTButton/base.md' },
            { text: '下拉选择组件', link: '/components/YTSelect/base.md' },
            { text: '详情组件', link: '/components/YTDetail/base.md' },
            { text: 'Radio组件', link: '/components/YTRadio/base.md' },
            { text: '多选框组组件', link: '/components/YTCheckbox/base.md' },
            { text: '日期组件', link: '/components/YTDatePicker/base.md' },
            { text: 'Tabs组件', link: '/components/YTTabs/base.md' },
            { text: '步骤组件', link: '/components/YTStepWizard/base.md' },
            // { text: '地图坐标选择组件', link: '/components/YTMap/base.md' },
          ],
        },
        {
          text: '复杂组件',
          items: [
            { text: 'Chart图表组件', link: '/components/YTChart/base.md' },
            {
              text: '下拉选择表格组件',
              link: '/components/YTSelectTable/base.md',
            },
            {
              text: 'TAdaptivePage组件',
              link: '/components/YTAdaptivePage/base.md',
            },
            {
              text: '条件查询组件',
              link: '/components/YTQueryCondition/base.md',
            },
            { text: '表单组件', link: '/components/YTForm/base.md' },
            { text: '模块表单组件', link: '/components/YTModuleForm/base.md' },
            { text: 'table组件', link: '/components/YTTable/base.md' },
          ],
        },
      ],
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  },
})
