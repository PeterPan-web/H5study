/**
 * @file 患者端 url
 * @access public
 * @author 燕鹏
*/
// let httpUrl = process.env.http_url
let httpEnv = process.env.VUE_APP_http_env // 环境
console.log('httpEnv', httpEnv)
let url = ''
let urlProtocolBase = ''
if (httpEnv === 'dev') {
  url = 'http://18k925i398.iok.la/dev/api/patient-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/dev/api/manager/'
} else if (httpEnv === 'dev2') {
  url = 'http://18k925i398.iok.la/dev2/api/patient-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/dev2/api/manager/'
} else if (httpEnv === 'test') {
  url = 'http://18k925i398.iok.la/test/api/patient-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/test/api/manager/'
} else if (httpEnv === 'staging') {
  url = 'http://18k925i398.iok.la/staging/api/patient-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/staging/api/manager/'
} else {
  url = 'https://bs.medicine-o2o.com/api/patient-app/'
  urlProtocolBase = 'https://bs.medicine-o2o.com/api/manager/'
}
export default {
  webapiBase: url, //
  // doctorApiBase: url,
  protocolBase: urlProtocolBase, // 协议使用
  // imgBase: httpUrl,

  bs_cgm_getCgmMarkedDataTable: 'cgm/getCgmMarkedDataTable' // 获取指定月份/指定日期标记CGM血糖列表

}
