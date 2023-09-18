
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 科主任添加或更新社区主任
function cmntLeaderSaveOrUpdate (params) {
  return doPost(params, url.cmnt_leader_saveOrUpdate)
}

// 查看社区中心主任详情
function cmntLeaderGet (params) {
  return doGet(params, url.cmnt_leader_get)
}

// 查看社区护士详情
function cmntCareleaderGet (params) {
  return doGet(params, url.cmnt_careleader_get)
}

// 科主任添加社区护士
function cmntCareleaderSaveOrUpdate (params) {
  return doPost(params, url.cmnt_careleader_saveOrUpdate)
}

// 根据名字模糊查询医院
function dataHospitalQuery (params) {
  return doGet(params, url.data_hospital_query)
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

// 创建社区中心（科主任用）
function arCmntGroupSave (params) {
  return doPost(params, url.ar_cmntGroup_save)
}

// 医院新增
function dataHospitalAdd (params) {
  return doPost(params, url.data_hospital_add)
}

// 查找所有省份
function dataProvinceFindAll () {
  return doGet({}, url.data_province_findAll)
}

// 根据省份code查找城市
function dataCityFindAll (params) {
  return doGet(params, url.data_city_findAll)
}

export {
  cmntLeaderSaveOrUpdate,
  cmntLeaderGet,
  cmntCareleaderGet,
  cmntCareleaderSaveOrUpdate,
  dataHospitalQuery,
  dataHospitalDepartmentGetFirstLevel,
  dataHospitalDepartmentGetSubDepartment,
  orgJobTitleListByBusinessRole,
  arCmntGroupSave,
  dataHospitalAdd,
  dataProvinceFindAll,
  dataCityFindAll
}
