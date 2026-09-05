require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

const weather = {"coord":{"lon":78.1792,"lat":26.2236},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"base":"stations","main":{"temp":26.86,"feels_like":31.34,"temp_min":26.86,"temp_max":26.86,"pressure":1004,"humidity":100,"sea_level":1004,"grnd_level":977},"visibility":10000,"wind":{"speed":2.57,"deg":50},"rain":{"1h":0.92},"clouds":{"all":100},"dt":1788528114,"sys":{"type":1,"id":9166,"country":"IN","sunrise":1788481709,"sunset":1788527092},"timezone":19800,"id":1270583,"name":"Gwalior","cod":200}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("vedantbhagat627@gmail.com")
})

app.get('/login', (req, res) => {
    res.send("<h1 style = 'color: red'>Enter your login details: </h1>")
})

app.get('/weather', (req, res) => {
    res.json(weather);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

