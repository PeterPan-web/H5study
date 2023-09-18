
import {
  url,
  doGet2,
  doPost2
} from '@/services/utils/util2.0'

// 添加或者更新医生
function orgDoctorThirdTypeSaveOrUpdate (params) {
  return doPost2(params, url.org_doctor_thirdType_saveOrUpdate)
}
// 添加或者更新医生
function orgThirdTypeDoctorAuthGetByLogin (params) {
  return doGet2(params, url.org_thirdTypeDoctorAuth_getByLogin)
}

// 获取用于编辑的医生信息
function orgDoctorGetForEdit (params) {
  return doGet2(params, url.org_doctor_get_forEdit)
}

// 手机号是否已使用
function orgStaffIsMobileExist (params) {
  return doGet2(params, url.org_staff_isMobileExist)
}

// 根据名字模糊查询医院
function dataHospitalQuery (params) {
  return doGet2(params, url.data_hospital_query)
}

// 员工状态和审核情况
function orgStaffGetStatus (params) {
  return doGet2(params, url.org_staff_getStatus)
}

// 查找医院的一级部门
function dataHospitalDepartmentGetFirstLevel (params) {
  return doGet2(params, url.data_hospitalDepartment_getFirstLevel)
}

// 查找医院的二级（含）以下的部门
function dataHospitalDepartmentGetSubDepartment (params) {
  return doGet2(params, url.data_hospitalDepartment_getSubDepartment)
}

// 获取业务角色相应的职称列表
function orgJobTitleListByBusinessRole (params) {
  return doGet2(params, url.org_jobTitle_listByBusinessRole)
}

export {
  orgDoctorThirdTypeSaveOrUpdate,
  orgThirdTypeDoctorAuthGetByLogin,
  orgDoctorGetForEdit,
  orgStaffIsMobileExist,
  dataHospitalQuery,
  dataHospitalDepartmentGetFirstLevel,
  dataHospitalDepartmentGetSubDepartment,
  orgJobTitleListByBusinessRole,
  orgStaffGetStatus
}
