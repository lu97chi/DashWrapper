// for https request
import Axios from 'axios';


function makeUrl(url, params) {
  let auxUrl = url;
  params.forEach((param) => {
    auxUrl = auxUrl.replace('$$', param);
  });
  return auxUrl;
}

async function makeCall(domain, type, data) {
  try {
    const response = await Axios[type](domain, data);
    return response;
  } catch (error) {
    return error;
  }
}

export async function Caller(config, domain) {
  const {
    endPoint, type, params, data,
  } = config;
  let url = `${domain}${endPoint}`;
  if (params) {
    url = makeUrl(url, params);
  }
  const response = await makeCall(url, type, data);
  return response;
}
