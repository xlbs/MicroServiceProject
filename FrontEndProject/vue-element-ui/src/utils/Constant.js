const BASE_URL = $requestContext.path;
const API_SERVICE = BASE_URL + "/api_service";

const PAGE_SIZE_ARRAY = [10,20,30,50];
const CURRENT_PAGE = 1;
const PAGE_SIZE = 10;

export const CONSTANT = {
  URL:{
    BASE_URL: BASE_URL,
    API_SERVICE: API_SERVICE
  },
  TABLE:{
    PAGE_SIZE_ARRAY: PAGE_SIZE_ARRAY,
    CURRENT_PAGE: CURRENT_PAGE,
    PAGE_SIZE: PAGE_SIZE,
  }


}
