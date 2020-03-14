// const { URL } = require('url');
import {URL} from 'url'

const getInt = (str: string) => {
  return /[0-9]+/.test(str) ? parseInt(str) : undefined;
}

const getUrlFromPath = (url: string) => {
  // console.log(str)
  // let url = str.slice(1);
  if (!url.startsWith('http')) {
    return 'https://' + url;
  }
  return url;
}

const isValidUrl = (str: string) => {
  try {
    const url = new URL(str);
    return url.hostname.includes('.');
  } catch (e) {
    return false;
  }
}

export {getInt, getUrlFromPath, isValidUrl};
