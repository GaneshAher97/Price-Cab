export default {
  BASE_URL: "http://192.168.170.152/taxiservice/",
  SUCCESS_TYPE: "success",
  FAILURE_TYPE: "failure",
};

export function ToFormData(obj) {
  let formdata = new FormData();
  for (let key in obj) {
    formdata.append(key, obj[key]);
  }
  return formdata;
}

export function BuildSeachParams(obj) {
  let searchParams = new URLSearchParams(obj);

  return searchParams.toString();
}
