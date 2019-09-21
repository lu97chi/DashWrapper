// for https request
import Axios from 'axios';

function makeUrl(url, params) {
  let auxUrl = url;
  params.forEach((param) => {
    auxUrl = auxUrl.replace('$$', param);
  });
  return auxUrl;
}

// config type can take dinamic key : values pair
function makeUrlConfig(url, config: any) {
  const { endPoint } = config;
  const dotAuxes = [];
  const dashAuxes = [];
  const namedVars = [];
  let auxString = endPoint;
  for (let i = 0; i <= endPoint.length; i += 1) {
    if (endPoint[i] === ':') {
      dotAuxes.push(i);
    }
    if (endPoint[i] === '$') {
      dashAuxes.push(i);
    }
  }
  dashAuxes.forEach((dash, i) => {
    namedVars.push(endPoint.substring(dash, dotAuxes[i] + 1));
  });
  namedVars.forEach((nameVar) => {
    auxString = auxString.replace(`:${nameVar}$`, config[nameVar]);
  });
  return `${url}${auxString}`;
}

function makeCall(domain, type, data) {
  try {
    const response = Axios[type](domain, data);
    return response;
  } catch (error) {
    return error;
  }
}

export function Caller(config, domain) {
  const {
    endPoint, type, params, data,
  } = config;
  let url = `${domain}`;
  if (endPoint.includes(':')) {
    url = makeUrlConfig(url, config);
  } else if (params) {
    url = `${url}${endPoint}`;
    url = makeUrl(url, params);
  } else {
    url = `${url}${endPoint}`;
  }

  const response = makeCall(url, type, data);
  return response;
}
