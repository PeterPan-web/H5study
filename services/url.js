/**
 * @file 根据 客户端返回的标识 返回不同客户端所需要的url
 * @access public
 * @author 燕鹏
*/
import urlDirector from './url_director'// 指导专家
import urlDoctor from './url_doctor'// 医生
import urlNurse from './url_nurse'// DDMC护士
import urlPI from './url_PI'// 牵头专家
import urlCommunityNurse from './url_community_nurse'// 社区护士
import urlCommunityDirector from './url_community_director'// 社区主任
import urlIdoctorNurse from './url_idoctor_nurse'// 私人护士
import urlPatientApp from './url_patient_app'// 患者端
import urlCommon from './url_common'
import util from '@/utils/util'
let query = util.getQueryObject()
let appSign = query.appSign || localStorage.getItem('appSign')

let url = {
}
console.log('appSign', appSign)
// director PI doctor nurse
if (appSign === 'director') {
  url = urlDirector
} else if (appSign === 'doctor') {
  url = urlDoctor
} else if (appSign === 'nurse') {
  url = urlNurse
} else if (appSign === 'community_nurse') {
  url = urlCommunityNurse
} else if (appSign === 'community_director') {
  url = urlCommunityDirector
} else if (appSign === 'idoctor_nurse') {
  url = urlIdoctorNurse
} else if (appSign === 'patient_app') {
  url = urlPatientApp
} else {
  url = urlPI
}
Object.assign(url, urlCommon)
console.log('url', url)
export default url
