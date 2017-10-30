import axios from 'axios'
import Cookie from 'js-cookie'
// import { ENV } from '@/constant'

export const HTTP = axios.create({
  // baseURL: ENV.baseURL,
  timeout: 5000,
  headers: {
    'Authorization': Cookie.get('ticket'),
    post: {
      'Content-Type': 'application/json'
    }
  }
})
