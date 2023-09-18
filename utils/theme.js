/*
  医生 指导专家 e控糖护士 牵头专家 二级主任 社区护士 主题颜色：#2CA8FF 44,168,255
  护士主题颜色：#00C88C 0,200,140
  患者主题颜色：#24BB9C 36,187,156
*/
import util from '@/utils/util'
let query = util.getQueryObject()
const appSign = query.appSign || localStorage.getItem('appSign')
const body = document.getElementsByTagName('body')[0]
let themeColor, themeColorRGB

if (appSign === 'doctor' || appSign === 'director' || appSign === 'community_nurse' || appSign === 'community_director' || appSign === 'PI' || appSign === 'nurse') {
  themeColor = '#2CA8FF'
  themeColorRGB = '44,168,255'
} else if (appSign === 'idoctor_nurse') {
  themeColor = '#00C88C'
  themeColorRGB = '36,187,156'
}

if (!body.style.getPropertyValue('--themeColor').trim()) {
  body.style.setProperty('--themeColor', themeColor)
  body.style.setProperty('--themeColorRGB', themeColorRGB)
}
