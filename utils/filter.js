import Vue from 'vue'

let shipperMap = {
  '1': '总部',
  '2': '服务站'
}
Vue.filter('shipper', function (value) {
  let str = shipperMap[value]
  if (!str) {
    str = ''
  }
  return str
})

let auditMap = {
  '0': '未审核',
  '1': '审核通过',
  '2': '审核不通过'
}
Vue.filter('auditStatus', function (value) {
  let str = auditMap[value]
  if (!str) {
    str = ''
  }
  return str
})

// 产品订单状态 1-待付款 2-未确认 3-未发货 4-未完成 5-已完成 6-已取消
const orderStatusMap = {
  '1': '待付款',
  '2': '未确认',
  '3': '未发货',
  '4': '未完成',
  '5': '已完成',
  '6': '已取消'
}
Vue.filter('orderStatusFilter', function (value) {
  let data = value.toString()
  let str = orderStatusMap[data]
  if (!str) {
    str = ''
  }
  return str
})

// 产品支付方式
const modesPaymentMap = {
  '2': '在线支付',
  '1': '货到付款'
}
Vue.filter('modesPayment', function (value) {
  let data = value.toString()
  let str = modesPaymentMap[data]
  if (!str) {
    str = ''
  }
  return str
})

// 服务订单状态
const serviceStatusMap = {
  '1': '未支付',
  '2': '待核销',
  '3': '待完成',
  '4': '已完成',
  '5': '已取消'
}
Vue.filter('serviceStatus', function (value) {
  let str = serviceStatusMap[value]
  if (!str) {
    str = ''
  }
  return str
})

// 服务支付方式
const modesPaymentServceMap = {
  '2': '在线支付',
  '1': '卡劵抵扣'
}
Vue.filter('modesPaymentServce', function (value) {
  let str = modesPaymentServceMap[value]
  if (!str) {
    str = ''
  }
  return str
})

// 性别
const genderMap = {
  '1': '男',
  '2': '女'
}
Vue.filter('genderMap', function (value) {
  let str = genderMap[value]
  if (!str) {
    str = ''
  }
  return str
})

// 状态 1是0否
const stateMap = {
  '1': '是',
  '0': '否'
}
Vue.filter('stateMap', function (value) {
  let str = stateMap[value]
  if (!str) {
    str = ''
  }
  return str
})

// 糖尿病类型糖尿病类型
// <van-radio name="6">耐糖量减少</van-radio>
//             <van-radio name="5">空腹血糖受损</van-radio>
//             <van-radio name="3">妊娠糖尿病</van-radio>
//             <van-radio name="2">1型</van-radio>
//             <van-radio name="1">2型</van-radio>
//             <van-radio name="4">其他</van-radio>
const diabetesTypeMap = {
  '1': '1型(T1DM)',
  '2': '2型(T2DM)',
  '3': '妊娠型',
  '4': '其他',
  '5': '空腹血糖受损',
  '6': '糖耐量减低'
}
Vue.filter('diabetesType', function (value) {
  let str = diabetesTypeMap[value]
  if (!str) {
    str = ''
  }
  return str
})

const sportStrengthMap = {
  '1': '低',
  '2': '中',
  '3': '高'
}
Vue.filter('sportStrength', function (value) {
  let str = sportStrengthMap[value]
  if (!str) {
    str = ''
  }
  return str
})

const frequencyMap = {
  '1': '1~2',
  '2': '3~5',
  '3': '5~7'
}
Vue.filter('frequency', function (value) {
  let str = frequencyMap[value]
  if (!str) {
    str = ''
  }
  return str
})
const timeTypeMap = {
  '1': '空腹',
  '2': '早餐后',
  '3': '午餐前',
  '4': '午餐后',
  '5': '晚餐前',
  '6': '晚餐后',
  '7': '睡前'
}
Vue.filter('timeTypeMap', function (value) {
  let str = timeTypeMap[value]
  if (!str) {
    str = ''
  }
  return str
})

const sugarTypeMap = {
  '1': '偏低',
  '2': '正常',
  '3': '偏高'
}
Vue.filter('sugarTypeMap', function (value) {
  let str = sugarTypeMap[value]
  if (!str) {
    str = ''
  }
  return str
})

// 类型
const carTypeMap = {
  '0': '门诊',
  '1': '住院'
}
Vue.filter('carTypeMap', function (value) {
  let str = carTypeMap[value]
  if (!str) {
    str = ''
  }
  return str
})
