import httpRequest from '../utils/httpRequest'
import { API_URL, SUCCESS_CODE } from '../const'

const dayCountry = (data) => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.DAY_COUNTRY,
      method: 'post',
      data,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};

const dayArea = (data) => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.DAY_AREA,
      method: 'post',
      data,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};
const weekCountry = (data) => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.WEEK_COUNTRY,
      method: 'post',
      data,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};
const weekArea = (data) => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.WEEK_AREA,
      method: 'post',
      data,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};
const monthCountry = (data) => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.MONTH_COUNTRY,
      method: 'post',
      data,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};
const monthArea = (data) => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.MONTH_AREA,
      method: 'post',
      data,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};

export  {
  dayCountry,
  dayArea,
  weekCountry,
  weekArea,
  monthCountry,
  monthArea
}
