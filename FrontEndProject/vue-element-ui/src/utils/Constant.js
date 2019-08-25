const BASE_URL = $requestContext.path;
const API_SERVICE = BASE_URL + "/api_service";

const PAGE_SIZE_ARRAY = [10,20,30,50];
const CURRENT_PAGE = 1;
const PAGE_SIZE = 10;

const YYYY_MM_DD = "YYYY-MM-DD";
const YYYYMMDD = "YYYY/MM/DD";
const YYYYMMDD_HHmmss = "YYYY-MM-DD HH:mm:ss";
const YYYYMMDDHHmmss = "YYYY/MM/DD HH:mm:ss";

export const CONSTANT = {
  URL:{
    BASE_URL: BASE_URL,
    API_SERVICE: API_SERVICE
  },
  TABLE:{
    PAGE_SIZE_ARRAY: PAGE_SIZE_ARRAY,
    CURRENT_PAGE: CURRENT_PAGE,
    PAGE_SIZE: PAGE_SIZE,
  },
  DATE:{
    YYYY_MM_DD: YYYY_MM_DD,
    YYYYMMDD: YYYYMMDD,
    YYYYMMDD_HHmmss: YYYYMMDD_HHmmss,
    YYYYMMDDHHmmss: YYYYMMDDHHmmss,
  }


}
