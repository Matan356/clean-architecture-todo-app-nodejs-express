const axiosClient = require('axios');
const { v4: uuidv4 } = require('uuid');
const logger = require('./logger');
const { axios } = require('./vars');

const client = axiosClient.create({
  baseURL: axios.baseUrl,
  timeout: axios.timeout,
  headers: {
    // 'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
    Accept: '*/*',
    'Access-Control-Allow-Origin': '*',
  },
});

/* eslint-disable */
client.interceptors.request.use((config) => {
  config.metadata = config.metadata || {};
  config.metadata.requestTime = new Date().getTime();
  config.metadata.uid = uuidv4();

  // if url starts with url prefix then remove our baseurl set in env
  const pattern = /^((http|https|ftp):\/\/)/;
  if (pattern.test(config.url)) {
    config.baseURL = '';
  }

  logger.info(
    `${config.method} request made to ${config.baseURL}${config.url}`,
    {
      uid: config.metadata.uid,
      label: logger.labels.request,
      method: config.method,
      url: `${config.baseURL}${config.url}`,
      requestTime: config.metadata.requestTime,
    }
  );

  return config;
}, (error) => {
  return Promise.reject(error);
});

client.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  const metadata = response.config.metadata;
  metadata.responseTime = new Date().getTime();
  metadata.durationTime = metadata.responseTime - metadata.requestTime;

  logger.info(
    `${response.config.method} response from ${response.config.baseURL}${response.config.url}`,
    {
      uid: metadata.uid,
      label: logger.labels.response,
      responseTime: metadata.responseTime,
      url: `${response.config.baseURL}${response.config.url}`,
      durationTime: metadata.durationTime,
    }
  );

  return response;
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  const responseTime = new Date().getTime();
  const durationTime = responseTime - error.config.metadata.requestTime;

  logger.error(
    `${error.code}: ${error.config.method} response from ${error.config.baseURL}${error.config.url}`,
    {
      uid: error.config.metadata.uid,
      label: logger.labels.error,
      responseTime,
      url: `${error.config.baseURL}${error.config.url}`,
      durationTime,
    }
  );
  return Promise.reject(error);
});

module.exports = client;
