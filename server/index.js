const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.


const houses = require('./db.json')
let globalId = 4

//////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
					 "A dubious friend may be an enemy in camouflage.",
					 "A faithful friend is a strong defense.",
           "An important person will offer you support.",
           "Believe in yourself and others will too.",
           "Better ask twice than lose yourself once.",
           "Change is happening in your life, so go with the flow!"
  ];

  // choose random fortune
  let randomIndex2 = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex2];

  res.status(200).send(randomFortune);
  
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/api/favorite", (req, res) => res.status(200).send(favorites))

app.delete("/api/favorite/:id", (req, res) => {
  let index = favorites.findIndex(elem => elem.id === +req.params.id)
  favorites.splice(index, 1)
  res.status(200).send(favorites)
})

app.post("/api/favorite", (req, res) => {
  let { name, city, movie } = req.body
  let newFavorite = {
      id: globalId,
      name, 
      city,
      movie
  }
  favorites.push(newFavorite)
  res.status(200).send(favorites)
  globalId++
})






app.listen(4000, () => console.log("Server running on 4000"));
