
import {
  url,
  doGet
} from '@/services/utils/util'

// 获取CGM血糖表格
function bsCgmGetCgmMarkedDataTable (params) {
  return doGet(params, url.bs_cgm_getCgmMarkedDataTable)
}

export {
  bsCgmGetCgmMarkedDataTable
}
