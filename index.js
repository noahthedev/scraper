const axios = require('axios')
const cheerio = require('cheerio')

axios('https://www.theverge.com/')
  .then(res => {
    const data = res.data
    const chr = cheerio.load(data)
    const articles = []

    chr(".c-entry-box--compact__title", data).each((i, el) => {
      const title = chr(el).text()
      const url = chr(el).find('a').attr('href')
      articles.push({
        title,
        url
      })
    })
    console.log(articles)
  })
  .catch(err => console.log(err))

