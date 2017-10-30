import Cookie from 'js-cookie'
import { API } from '@/constant'

export function checkLogin () {
  const param = location.search
  if (param.indexOf('code') > -1) {
    let url = API.sso.checkCode + param
    syncHttpRequest(url, 'GET', null, function (res) {
      removeTicket()
      Cookie.set('ticket', res.ticket)
      Cookie.set('username', res.username)
      Cookie.set('cnName', res.cnName)
      // window._paq.push(['setUserId', res.username])
      location.href = res.jumpto
    })
  } else {
    const ticket = Cookie.get('ticket')
    if (ticket) {
      checkTicket(ticket)
    } else {
      redirectToSSO()
    }
  }
}

export function redirectToSSO () {
  syncHttpRequest(API.sso.login + '?jumpto=' + encodeURIComponent(location.href), 'GET', null, function (res) {
    if (res.url) {
      location.href = res.url
    }
  })
}

export function checkTicket (ticket) {
  syncHttpRequest(API.sso.checkTicket, 'POST', 'ticket=' + ticket, function (res) {
    if (!res.isValid) {
      redirectToSSO()
    }
  })
}

export function logout () {
  const ticket = Cookie.get('ticket')
  if (ticket) {
    removeTicket()
    syncHttpRequest(API.sso.logout + '?jumpto=' + location.href, 'GET', null, function (res) {
      // window._paq.push(['setUserId', 'anonymous'])
      if (res.url) {
        location.href = res.url
      }
    })
  } else {
    console.log('用户未登录！')
  }
}

function removeTicket () {
  Cookie.remove('ticket')
  Cookie.remove('username')
  Cookie.remove('cnName')
}

function syncHttpRequest (url, method, params, callback) {
  var request = new XMLHttpRequest()
  request.open(method, url, true)
  request.onload = function () {
    var json = {}
    try {
      json = JSON.parse(request.response)
    } catch (err) {
      console.error(err)
    }
    callback(json)
  }

  if (method === 'POST') {
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  }
  request.send(params)
}
