import YTLayoutPage from './layout-page/src/index.vue'
import YTLayoutPageItem from './layout-page-item/src/index.vue'
import YTQueryCondition from './query-condition/src/index.vue'
import YTTable from './table/src/index.vue'
import YTForm from './form/src/index.vue'
import YTSelect from './select/src/index.vue'
import YTSelectTable from './select-table/src/index.vue'
import YTDetail from './detail/src/index.vue'
import YTButton from './button/src/index.vue'
import YTStepWizard from './step-wizard/src/index.vue'
import YTTimerBtn from './timer-btn/src/index.vue'
import YTModuleForm from './module-form/src/index.vue'
import YTAdaptivePage from './adaptive-page/src/index.vue'
import YTDatePicker from './date-picker/src/index.vue'
import YTRadio from './radio/src/index.vue'
import YTCheckbox from './checkbox/src/index.vue'
import YTChart from './chart/src/index.vue'
import YTMap from './map/src/index.vue'
import YTTabs from './tabs/src/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    YTLayoutPage: typeof YTLayoutPage
    YTLayoutPageItem: typeof YTLayoutPageItem
    YTQueryCondition: typeof YTQueryCondition
    YTTable: typeof YTTable
    YTForm: typeof YTForm
    YTSelect: typeof YTSelect
    YTSelectTable: typeof YTSelectTable
    YTDetail: typeof YTDetail
    YTButton: typeof YTButton
    YTStepWizard: typeof YTStepWizard
    YTTimerBtn: typeof YTTimerBtn
    YTModuleForm: typeof YTModuleForm
    YTAdaptivePage: typeof YTAdaptivePage
    YTDatePicker: typeof YTDatePicker
    YTRadio: typeof YTRadio
    YTCheckbox: typeof YTCheckbox
    YTChart: typeof YTChart
    YTTabs: typeof YTTabs
    YTMap: typeof YTMap
  }
}
