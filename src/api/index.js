import fetch from 'common/js/http'
// import { ERR_OK } from './config'
export function login () {
  const url = ``
  const data = {}
  return fetch.post(url,data).then((res) => {
    return Promise.resolve(res)
  })
  .catch((err) => {
    return Promise.reject(err)
  })
}