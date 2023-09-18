import SparkMD5 from 'spark-md5'
var _ = require('lodash')
var sessionstorage = require('sessionstorage')
var IDValidator = require('id-validator')
var Validator = new IDValidator()
const uuidv1 = require('uuid/v1')

/**
 * 获取url附带的参数 转换成对象返回
 * @access public
 * @author 燕鹏
 * @param {string} url - window.location.href
 * @return {Object} 参数对象
*/
function getQueryObject (url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}
/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码
 *
 * return URL参数字符串
 */
function urlEncode (param, key, encode = false) {
  if (param == null) return ''
  var paramStr = ''
  var t = typeof (param)
  if (t === 'string' || t === 'number' || t === 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param)
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
      paramStr += urlEncode(param[i], k, encode)
    }
  }
  return paramStr
};
/**
 * 合并对象,将source对象合并到target对象中
 * @access public
 * @author 燕鹏
 * @param {Object} target - 目标对象
 * @param {Object} source - 源对象
 * @return {Object} target 合并后的target对象
*/
function objectMerge (target, source) {
  /* Merges two  objects,
     giving the last one precedence */

  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach((property) => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}
/**
 * 格式化时间
 * @access public
 * @author ***
 * @param {Date} time
 * @param {String} cFormat {y}-{m}-{d} {h}:{i}:{s}
 * @return {String} 字符格式的时间 "2018-08-03 10:20:17:周五"
*/
function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    if (isAndroid()) {
      date = new Date(time)
    } else {
      time = time.split('-').join('/')
      date = new Date(time)
    }
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
/**
 * 清空对象每个key对应的value
 * @access public
 * @author 燕鹏
 * @param {Object} obj -
 * @return {Object}
*/
function emptyObject (obj) {
  if (_.isObject(obj)) {
    console.log('obj.length', obj.length)
    for (const k of Object.keys(obj)) {
      obj[k] = ''
    }
    return obj
  } else {
    console.log('emptyObject', '传入参数错误')
    return false
  }
}
function rulesNospace (rule, value, callback) { // form表单验证输入是否为空或者多个空格无文字
  if ((new RegExp('^[ ]+$')).test(value) || value === undefined) {
    callback(new Error('请正确输入!'))
  } else {
    callback()
  }
}
function rulesNumberLength (rule, value, callback) { // 验证数字长度小于10
  console.log((new RegExp(/^\d{1,10}$/)).test(value))
  if (!(new RegExp(/^\d{1,10}$/)).test(value)) {
    callback(new Error('不得超过10位数!'))
  } else {
    callback()
  }
}
function rulesArry (rule, value, callback) { // form表单验证数组
  if (value.length === 0) {
    callback(new Error('请正确选择!'))
  } else {
    callback()
  }
}
/**
 * 判断数据是否存在
 * @param  {} obj
 */
function isEmpty (obj) {
  if (typeof obj === 'undefined' || obj === null || obj.trim() === '') {
    return true
  } else {
    return false
  }
}
/**
 * 设置sessionStorage
 * @param  {} key
 * @param  {} value
 */
function setSession (key, value) {
  // body
  sessionstorage.setItem(key, value)
}
/**
 * 从sessionStorage取值
 * @param  {} key
 */
function getSession (key) {
  // body
  return sessionstorage.getItem(key)
}
/**
 * 获取用户信息
 */
function getUser () {
  // body
  // console.log('user', JSON.parse(sessionstorage.getItem('user')))
  return sessionstorage.getItem('user') ? JSON.parse(sessionstorage.getItem('user')).data : {}
}
/**
 * 这里过滤的是除了英文字母和数字的其他字符
 * @param  {string} val 需要过滤的字符
 */
function filterInput (val) {
  return val.replace(/[^A-z0-9]/, '')
}
/**
 *  过滤非整数
 * @param  {} val
 */
function filterInputInteger (val) {
  // body
  return val.replace(/[^0-9]/, '')
}
/**
 * 根据身份证号 获取性别
 * @access public
 * @author ***
 * @param {string} psidno - 身份证号
 * @return {String} 性别，1男2女
*/
function Getsex (psidno) {
  return Validator.getInfo(psidno)
}
/**
 * @description 获取身份证信息,不符合身份证规则返回false,符合返回如下信息
 * /*
 * 号码有效时返回内容示例:
 * {
 *   'addrCode': 100101, //地址码信息,
 *   'addr':     '北京市东城区', //地址信息, 只在实例化时传入了GB2260时返回
 *   'birth':    '1988-01-20', //出生年月日
 *   'sex':      1, //性别，0为女，1为男
 *   'checkBit': 'X', //校验位，仅当18位时存在
 *   'length':   18 //身份证类型，15位或18位
 * }
 *
 * @param  {string} idCard
 * @returns false | {***}
 */
function getIdCardInfo (idCard) {
  return Validator.getInfo(idCard)
}

function checkBloodSugatType (data) {
  // 检查血糖类型
  let typeArray = ['空腹', '早餐后', '午餐前', '午餐后', '晚餐前', '晚餐后', '睡前']
  return typeArray[data - 1]
}

/**
 * 根据输入的 年 月 返回每月有多少天
 * @param  {string | number} year
 * @param  {string | number} month , 1,2,3,...,12
 */
function monthTdays (year, month) {
  var d = new Date(year, month, 0)
  return d.getDate()
}

function isAndroid () {
  var u = navigator.userAgent
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  return isAndroid
}
function isIOS (params) {
  var u = navigator.userAgent
  var isIOS = u.indexOf('iPhone') > -1 || u.indexOf('ios') > -1 // iphone 客户端
  return isIOS
}

/**
 * @description post 请求防抖动
 * @param  {Function} callback 需要防抖动的方法
 */
function idtDebounce (callback) {
  return _.debounce(callback, 200)
}

/**
 * @description 获取uuid, 通用唯一识别码 ,
 * 暂时在上传时有使用
 * @returns {string} uuid
 */
function getUuid () {
  return uuidv1()
}

/**
 * @description // 获得文件md5
 * 本来是使用同步回调方法 获取mdt
 * 鉴于计算md5 必然比上传文件速度快，改为异步promise
 * // function getFileMD5 (file, callback) {
 * @param  {} file
 * @returns {string} 33c7ebfea3ecc5810c680ac930bb2d3e
 */
function getFileMD5 (file) {
  return new Promise((resolve, reject) => {
    // 声明必要的变量
    let fileReader = new FileReader()

    // 文件每块分割2M，计算分割详情
    let chunkSize = 2097152
    let chunks = Math.ceil(file.size / chunkSize)
    let currentChunk = 0

    // 创建md5对象（基于SparkMD5）
    let spark = new SparkMD5()

    // 每块文件读取完毕之后的处理
    fileReader.onload = function (e) {
    // 每块交由sparkMD5进行计算
      spark.appendBinary(e.target.result)
      currentChunk++

      // 如果文件处理完成计算MD5，如果还有分片继续处理
      if (currentChunk < chunks) {
        loadNext()
      } else {
      // callback(spark.end())
        resolve(spark.end())
      }
    }

    // 处理单片文件的上传
    function loadNext () {
      let start = currentChunk * chunkSize
      let end = start + chunkSize >= file.size ? file.size : start + chunkSize

      fileReader.readAsBinaryString(file.slice(start, end))
    }

    loadNext()
  })
}
/**
 * @description 获取元素在页面上的绝对位置 left
 * @param  {} element 在vue中可以使用 ref
 * @returns 当前元素的定位
 */
function getElementPageLeft (element) {
  var actualLeft = element.offsetLeft
  var parent = element.offsetParent
  while (parent != null) {
    actualLeft += parent.offsetLeft + (parent.offsetWidth - parent.clientWidth) / 2
    parent = parent.offsetParent
  }
  return actualLeft
}
/**
 * @description 获取元素的绝对位置 top
 * @param  {} element 在vue中可以使用 ref
 * @returns 当前元素的定位
 */
function getElementPageTop (element) {
  var actualTop = element.offsetTop
  var parent = element.offsetParent
  while (parent != null) {
    actualTop += parent.offsetTop + (parent.offsetHeight - parent.clientHeight) / 2
    parent = parent.offsetParent
  }
  return actualTop
}
/**
 * @description 获取页面的高度
 * @param  {}
 * @returns 页面的高度
 */
function getClientHeight () {
  var clientHeight = document.body.clientHeight
  return clientHeight
}
/**
 * @description 获取元素的绝对定位
 * @param  {} element
 * @returns {object} {top, bottom}
 *  top 改元素顶部距离页面顶部的绝对定位
 *  bottom 改元素底部距离页面顶部的绝对定位
 */
function getElementPosition (element) {
  let clientHeight = getClientHeight()
  let top = getElementPageTop(element)
  let height = element.getBoundingClientRect().height
  let bottom = top + height
  return {
    clientHeight,
    top,
    bottom
  }
}

/**
 * @description 获取元素的绝对定位
 * @param  {} element 数组形式传入
 * @returns {object} {xxx:{clientHeight:0,top:0,bottom:0},yyy:{clientHeight:0,top:0,bottom:0}}
 *  top 改元素顶部距离页面顶部的绝对定位
 *  bottom 改元素底部距离页面顶部的绝对定位
 */
function getArrayElementPosition (param) {
  let result = {}
  for (const index in param) {
    if (typeof param[index].$el === 'undefined') {
      result[index] = getElementPosition(param[index])
    } else if (param[index].$el.tagName) {
      result[index] = getElementPosition(param[index].$el)
    } else {
      result[index] = {'clientHeight': getClientHeight(), 'top': 0, 'bottom': 0}
    }
  }
  return result
}

/**
 * @description 判断开始时间是否小于于结束时间
 * @param  {String} strTime 2021-03-01 13:00:00
 * @param  {String} endTime 如果不传则取当前时间 2021-03-01 13:00:00
 * @returns {Boolean} true/false
 */
function isTimeOut (strTime, endTime) {
  strTime = strTime.replace(/-/g, '/')// 时间转换
  endTime = endTime && endTime.replace(/-/g, '/')// 时间转换

  // 时间
  var date1 = new Date(strTime)
  // 现在时间
  var date2 = (endTime && new Date(endTime)) || new Date()
  // 判断时间是否过期
  return date1.getTime() < date2.getTime()
}

/**
 * @description 根据数字或者周几转换为相应的数据
 * @param  {String} param 数字1-7，或者周几
 * @returns {Object} {num,name}
 */
function transformationWeekName (param) {
  let list = [
    {num: 1, name: '周一'},
    {num: 2, name: '周二'},
    {num: 3, name: '周三'},
    {num: 4, name: '周四'},
    {num: 5, name: '周五'},
    {num: 6, name: '周六'},
    {num: 7, name: '周日'}
  ]
  if (param === undefined) return list
  if (typeof param === 'number') {
    return list[list.map(m => m.num).indexOf(param)]
  } else {
    return list[list.map(m => m.name).indexOf(param)]
  }
}

/**
 * @description 将不同类型的饮食方案的数据转化为需要的数据
 * @param  {String}  type 正向，反向，intvalue，
 * @returns {Object} outvalue
 */
function returnschemeContent(type,intvalue){
  if (type==1) {
    let outvalue={
          simpleType: intvalue.simpleType,
          breakfast: {
            stapleFood: intvalue.breakfastStapleFood,
            meatEggs: intvalue.breakfastMeatEggs,
            vegetable: intvalue.breakfastVegetable,
            fatAndLeanMeat: '',
            remark: intvalue.breakfastRemark,
            meatEggsLC: intvalue.breakfastMeatEggsLC,
            vegetableLC: intvalue.breakfastVegetableLC,
            remarkLC: intvalue.breakfastRemarkLC,
          },
          lunch: {
            stapleFood: intvalue.lunchStapleFood,
            meatEggs: intvalue.lunchMeatEggs,
            vegetable: intvalue.lunchVegetable,
            fatAndLeanMeat: intvalue.lunchFatAndLeanMeat,
            remark: intvalue.lunchRemark,
            meatEggsLC:'',
            vegetableLC: intvalue.lunchVegetableLC,
            remarkLC: intvalue.lunchRemarkLC,
          },
          dinner: {
            stapleFood: intvalue.dinnerStapleFood,
            meatEggs: intvalue.dinnerMeatEggs,
            vegetable: intvalue.dinnerVegetable,
            fatAndLeanMeat: intvalue.dinnerFatAndLeanMeat,
            remark: intvalue.dinnerRemark,
            meatEggsLC:'',
            vegetableLC: intvalue.dinnerVegetableLC,
            remarkLC: intvalue.dinnerRemarkLC,
          },
        }
         return outvalue
  }else{
let breakfast=intvalue.breakfast
let lunch=intvalue.lunch
let dinner=intvalue.dinner
    let outvalue={
      simpleType: intvalue.simpleType,
      breakfastStapleFood:breakfast.stapleFood,
      breakfastMeatEggs:breakfast.meatEggs,
      breakfastVegetable:breakfast.vegetable,
      breakfastRemark:breakfast.remark,
      lunchStapleFood:lunch.stapleFood,
      lunchMeatEggs:lunch.meatEggs,
      lunchVegetable:lunch.vegetable,
      lunchRemark:lunch.remark,
      dinnerStapleFood:dinner.stapleFood,
      dinnerMeatEggs:dinner.meatEggs,
      dinnerVegetable:dinner.vegetable,
      dinnerRemark:dinner.remark,
      breakfastMeatEggsLC:breakfast.meatEggsLC,
      breakfastVegetableLC:breakfast.vegetableLC,
      breakfastRemarkLC:breakfast.remarkLC,
      lunchFatAndLeanMeat:lunch.fatAndLeanMeat,
      lunchVegetableLC:lunch.vegetableLC,
      lunchRemarkLC:lunch.remarkLC,
      dinnerFatAndLeanMeat:dinner.fatAndLeanMeat,
      dinnerVegetableLC:dinner.vegetableLC,
      dinnerRemarkLC:dinner.remarkLC,
    }
    return outvalue
  }
}
let util = {
  getArrayElementPosition,
  getElementPosition,
  getElementPageTop,
  getElementPageLeft,
  getClientHeight,
  getFileMD5,
  getUuid,
  getIdCardInfo,
  isIOS,
  isAndroid,
  getQueryObject,
  urlEncode,
  objectMerge,
  parseTime,
  emptyObject,
  isEmpty,
  rulesNospace,
  rulesNumberLength,
  rulesArry,
  getUser,
  filterInput,
  filterInputInteger,
  setSession,
  getSession,
  Getsex,
  checkBloodSugatType,
  monthTdays,
  idtDebounce,
  isTimeOut,
  transformationWeekName,
  returnschemeContent
}
export default util
