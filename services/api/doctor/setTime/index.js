
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 保存医生出诊时间
function orgDoctorOnlineSave (params) {
  return doPost(params, url.org_doctorOnline_save)
}

// 医生出诊时间列表
function orgDoctorOnlineList (patientId) {
  return doGet({patientId}, url.org_doctorOnline_list)
}

export {
  orgDoctorOnlineSave,
  orgDoctorOnlineList
}
