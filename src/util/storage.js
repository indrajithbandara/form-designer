
import cookie from 'js-cookie'
const allowedStoreType = ['sessionStorage', 'localStorage']

function isStorageSupported () {
  try {
    return allowedStoreType.every(function (item) {
      return item in window && window[item]
    })
  } catch (e) {
    return false
  }
}

function createStorageApi (storeType) {
  if (allowedStoreType.indexOf(storeType) === -1) {
    throw new Error('storeType is not supported!')
  }
  if (isStorageSupported()) {
    return {
      get: function (key) {
        let val = window[storeType].getItem(key)

        try {
          val = JSON.parse(val)
        } catch (e) {
        }

        return val
      },
      set: function (key, value) {
        let val = value

        if (typeof value === 'undefined') {
          return window[storeType].removeItem(key)
        }

        if (typeof value === 'object') {
          try {
            val = JSON.stringify(val)
          } catch (e) {
          }
        }

        return window[storeType].setItem(key, val)
      },
      remove: function (key) {
        return window[storeType].removeItem(key)
      },
      clear: function () {
        return window[storeType].clear()
      }
    }
  } else {
    return {
      get: function (key) {
        let val = cookie.get(key)

        return val
      },
      set: function (key, value) {
        let val = value

        if (typeof val === 'undefined') {
          return cookie.remove(key)
        }

        cookie.set(key, val)

        return val
      },
      remove: function (key) {
        return cookie.remove(key)
      }
    }
  }
}

export const session = createStorageApi('sessionStorage')
export const local = createStorageApi('localStorage')
