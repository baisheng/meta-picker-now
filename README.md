# 网站 meta 信息获取服务

这个项目主要目标是获取网站的 meta 信息，后期会增加获取页面内容的功能

## 部署
本项目当前主要部署在 zeit 服务上

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/baisheng/meta-picker-now.git)

## 开发
`yarn install`
`yarn dev`

```bash
curl -X POST "https://metaserver-now.baisheng.now.sh/" \         
  -H "Content-Type: application/json" \
  -d '{
  "url": "https://medium.com/"
}'

```
### response

```json
{
  "author": null,
  "date": null,
  "description": "Medium is not like any other platform on the internet. Our sole purpose is to help you find compelling ideas, knowledge, and perspectives. We don’t serve ads—we serve you, the curious reader who loves to learn new things. Medium is home to thousands of independent voices, and we combine humans and t…",
  "image": "https://cdn-images-1.medium.com/max/1200/1*29XAq2WrtejUCxRzSgDLXA.png",
  "logo": "https://logo.clearbit.com/medium.com",
  "publisher": "Medium",
  "title": "Medium – Get smarter about what matters to you.",
  "url": "https://medium.com"
} 

```
