require('dotenv').config();
const express = require("express");
const axios = require('axios')

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file
app.use(express.static("public"));
app.set("view engine", "ejs");

// routers
app.get("/", (req, res) => {
  res.render("index", {weather: null});
});

app.post('/', async (req,res) => {
  const postalCode = req.body.postalCode;
  const url = `${process.env.BASE_URL}?key=${process.env.API_KEY}&q=${postalCode}&days=7`

  try {
    const response = await axios.get(url);
    const weather = response.data;
    console.log(weather);
    res.render('index', {weather: weather, error: null });
  } catch (error) {
    res.render('index', { weather: null, error: "Error fetching weather" });
  }
})

// server listening
app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});
