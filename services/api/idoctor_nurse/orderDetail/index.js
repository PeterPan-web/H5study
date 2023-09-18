
import {
  url,
  doGet
} from '@/services/utils/util'

// 订单详情
function saleProductOrderDetail (params) {
  return doGet(params, url.sale_productOrder_detail)
}
export {
  saleProductOrderDetail
}
