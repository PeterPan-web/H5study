
import {
  url,
  doGet2 as doGet
} from '@/services/utils/util2.0'

// 获取RWCIS小结详情
function vmRwciDetail (params) {
  return doGet(params, url.tc_task_rwci_detail)
}

export {
  vmRwciDetail
}
