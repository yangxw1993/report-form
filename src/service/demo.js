import httpRequest from '../utils/httpRequest'
import { API_URL, SUCCESS_CODE } from '../const'

const getJSON = () => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.TEST,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};

export  {
  getJSON,
}
