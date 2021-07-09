if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

const CURRENCYFREAKS_API_KEY = process.env.CURRENCYFREAKS_API_KEY;
const url = `https://api.currencyfreaks.com/latest?apikey=${CURRENCYFREAKS_API_KEY}`;

// middlewares
app.use(cors()); // this initializes cors(cross origin resource sharing ) in all routes
app.use(express.json());

app.post("/rates", (req, res) => {
  axios({
    url: url,
    responseType: "json",
  })
    .then((api) => res.json(api.data))
    .catch((error) => console.log(error));
});

app.listen(PORT, () => console.log(`server running on port ${PORT} `));
