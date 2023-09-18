import Cookies from 'js-cookie'

const TokenKey = 'idoctor'

/**
 * 获取token
 * @access public
 * @author 燕鹏
 * @return {string} token
*/
function getToken () {
  return Cookies.get(TokenKey)
}
/**
 * 设置token
 * @access public
 * @author 燕鹏
 * @param {string} token
*/
function setToken (token) {
  return Cookies.set(TokenKey, token)
}
/**
 * 删除token
 * @access public
 * @author 燕鹏
 * @param {string} color1 - The first color, in hexidecimal format.
 * @return {string} The blended color.
*/
function removeToken () {
  return Cookies.remove(TokenKey)
}

export {getToken, setToken, removeToken}
