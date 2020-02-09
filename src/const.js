const BASE_URL = 'http://43.241.229.214:8090';
const prefix = '/chainsales/operationBull';

const SUCCESS_CODE = 0;
const API_URL = {
  // 运营快报日报表全国版
  DAY_COUNTRY: `${BASE_URL}${prefix}/dayOperationBull/getData`,
  // DAY_COUNTRY: `/assets/data/dayCountry`,
  // 运营快报日报表区域版
  DAY_AREA: `${BASE_URL}${prefix}/dayOperationBull/getareaData`,
  // 运营快报周报表全国版
  WEEK_COUNTRY: `${BASE_URL}${prefix}/weekOperationBull/getData`,
  // 运营快报周报表区域版
  WEEK_AREA: `${BASE_URL}${prefix}/dweekOperationBull/getareaData `,
  // 运营快报月报表全国版
  MONTH_COUNTRY: `${BASE_URL}${prefix}/monthOperationBull/getData`,
  // 运营快报月报表区域版
  MONTH_AREA: `${BASE_URL}${prefix}/monthOperationBull/getareaData `,
};

export  {
  SUCCESS_CODE,
  API_URL
}
