import ENV from './env'

const moduleA = {
  getUserList: '/user/list'
}

const moduleB = {
  getFileList: '/file/list'
}

const sso = {
  login: '/sso/login-url',
  logout: '/sso/logout-url',
  checkTicket: '/sso/check-ticket',
  checkCode: '/sso/check-code'
}

export default {
  moduleA: addPrefix(moduleA, ENV.moduleA),
  moduleB: addPrefix(moduleB, ENV.moduleB),
  sso: addPrefix(sso, ENV.sso)
}

function addPrefix (apis, prefix) {
  for (let i in apis) {
    if (apis.hasOwnProperty(i)) {
      apis[i] = prefix + apis[i]
    }
  }
  return apis
}
