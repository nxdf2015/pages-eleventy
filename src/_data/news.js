

require("dotenv").config()
const axios = require("axios")
const api_key = require("process").env["NEWS_API"]
console.log(api_key)
const getUrl = () => `http://newsapi.org/v2/top-headlines?country=fr&category=health&apiKey=${api_key}`
module.exports= async function(){
    const news  =  await axios.get(getUrl())
    console.log(news,api_key)
    
    return news.data
}