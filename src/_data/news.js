require("dotenv").config()
const axios = require("axios")
const api_key = require("process").env["NEWS_API"]
const {countries} = require("./langage.json")

 
async function getNews (country){
    const getUrl = (country) => `http://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=${api_key}`
   
    
   response =   await axios.get(getUrl(country))
   return {
       country,
       articles: response.data.articles
   }
}

module.exports = async function(){
    
    newsPromise = countries.map(country => getNews(country))
       return Promise.all(newsPromise) 
}