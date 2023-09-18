
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 添加或者更新医生
function orgDoctorSaveOrUpdate ({
  id = '',
  name = '',
  password = '',
  mobile = '',
  hospitalId = '',
  hospitalDepartmentId = '',
  jobTitleId = '',
  headImg = '',
  certificate = '',
  introduce = ''
}) {
  return doPost({
    id,
    name,
    password,
    mobile,
    hospitalId,
    hospitalDepartmentId,
    jobTitleId,
    headImg,
    certificate,
    introduce
  }, url.org_doctor_saveOrUpdate)
}

// 根据名字模糊查询医院
function dataHospitalQuery (params) {
  return doGet(params, url.data_hospital_query)
}

// 查看医生详情
function orgDoctorGet (params) {
  return doGet(params, url.org_doctor_get)
}

// 查找医院的一级部门
function dataHospitalDepartmentGetFirstLevel (params) {
  return doGet(params, url.data_hospitalDepartment_getFirstLevel)
}

// 查找医院的二级（含）以下的部门
function dataHospitalDepartmentGetSubDepartment (params) {
  return doGet(params, url.data_hospitalDepartment_getSubDepartment)
}

// 获取业务角色相应的职称列表
function orgJobTitleListByBusinessRole (params) {
  return doGet(params, url.org_jobTitle_listByBusinessRole)
}

export {
  orgDoctorSaveOrUpdate,
  dataHospitalQuery,
  dataHospitalDepartmentGetFirstLevel,
  dataHospitalDepartmentGetSubDepartment,
  orgJobTitleListByBusinessRole,
  orgDoctorGet
}
