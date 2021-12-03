const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

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

const {
  getFavorites,
  deleteFavorite, 
  createFavorite, 
  // updateFavorite
} = require('./controller')


app.get("/api/favorite", getFavorites)
app.delete("/api/favorite/:id", deleteFavorite)
app.post("/api/favorite", createFavorite)





app.listen(4000, () => console.log("Server running on 4000"));
