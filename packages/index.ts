import type { Component, App } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn' // 因element-plus默认是英文，我们指定一下默认中文
import YtLayoutPage from './layout-page'
import YtLayoutPageItem from './layout-page-item'
import YtQueryCondition from './query-condition'
import YtTable from './table'
import YtForm from './form'
import YtSelect from './select'
import YtSelectTable from './select-table'
import YtDetail from './detail'
import YtButton from './button'
import YtStepWizard from './step-wizard'
import YtTimerBtn from './timer-btn'
import YtModuleForm from './module-form'
import YtAdaptivePage from './adaptive-page'
import YtDatePicker from './date-picker'
import YtRadio from './radio'
import YtCheckbox from './checkbox'
import YtChart from './chart'
import YtMap from './map'
import YtTabs from './tabs'

// 存储组件列表
const components: {
  [propName: string]: Component
} = {
  YtLayoutPage,
  YtLayoutPageItem,
  YtQueryCondition,
  YtTable,
  YtForm,
  YtSelect,
  YtSelectTable,
  YtDetail,
  YtButton,
  YtStepWizard,
  YtTimerBtn,
  YtModuleForm,
  YtAdaptivePage,
  YtDatePicker,
  YtRadio,
  YtCheckbox,
  YtChart,
  YtMap,
  YtTabs
}
// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents: any = (app: App) => {
  // components.forEach((comp: any) => {
  //   app.component(comp.name as string, comp)
  // })
  //   app.use(ElementPlus, {
  //     locale // 语言设置
  //   // size: Cookies.get('size') || 'medium' // 设置默认尺寸
  // })
  for (const key in components) {
    app.component(key, components[key])
    console.log(key)
  }
}
// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install: any = (app: any, router?: any) => {
  // !router && installRouter(app);
  installComponents(app)
}

// 按需引入
export {
  YtLayoutPage,
  YtLayoutPageItem,
  YtQueryCondition,
  YtTable,
  YtForm,
  YtSelect,
  YtSelectTable,
  YtDetail,
  YtButton,
  YtStepWizard,
  YtTimerBtn,
  YtModuleForm,
  YtAdaptivePage,
  YtDatePicker,
  YtRadio,
  YtCheckbox,
  YtChart,
  YtMap,
  YtTabs
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
}
