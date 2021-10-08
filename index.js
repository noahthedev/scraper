const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

axios('https://www.theverge.com/')
  .then(res => {
    const data = res.data
    const chr = cheerio.load(data)
    const articles = []

    chr(".c-entry-box--compact__title", data).each(function() {
      const title = chr(this).text()
      const url = chr(this).find('a').attr('href')
      articles.push({
        title,
        url
      })
    })
    console.log(articles)
  })
  .catch(err => console.log(err))

