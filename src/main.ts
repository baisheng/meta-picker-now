import { NowRequest, NowResponse } from '@now/node'
import got from 'got'
import {getUrlFromPath, isValidUrl} from "./validator";
// import cheerio from 'cheerio'
// @ts-ignore
import read from 'read-art'
export default async (request: NowRequest, response: NowResponse) => {
  const metascraper = require('metascraper')([
    require('metascraper-author')(),
    require('metascraper-date')(),
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-logo')(),
    require('metascraper-clearbit')(),
    require('metascraper-publisher')(),
    require('metascraper-title')(),
    require('metascraper-url')(),
    // require('metascraper-readability')()
  ])
  const { body } = request
  const targetUrl = getUrlFromPath(body.url);
  if (!isValidUrl(targetUrl)) {
    response.statusCode = 400;
    response.setHeader('Content-Type', 'text/json');
    response.end(`<h1>Bad Request</h1><p>The url <em>${targetUrl}</em> is not valid.</p>`);
  }

  const { body: html, url } = await got(targetUrl, {
    retry: 10
  })

  // const $ = cheerio.load(body);
  // @ts-ignore
  // read({
  //   cheerio: $
  // }, (err, art, options, resp) => {
  //   console.log(art)
  // });

  // const {art} = await read({cheerio: $})
  // console.log(html)
  const metadata = await metascraper({ html, url })
  const json = {
    ...metadata,
    // read: {
    //   articleContent
    // }
    // readability: {
    //   ...content
    // }
  }

  response.setHeader('Content-Type', 'application/json; charset=gb2312');
  response.json(json)

}
