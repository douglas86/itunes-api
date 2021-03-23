import express from "express";
import axios from "axios";

let app = express();

const getBreeds = async () => {
  try {
    return await axios.get(
      `https://itunes.apple.com/search?term=jack+johnson&limit=1&entity=musicVideo`
    );
  } catch (err) {
    console.log(err);
  }
};

const countBreeds = async () => {
  const breeds = await getBreeds();

  console.log(breeds.data.results);
};

app.get(`/`, (req, res) => {
  res.send(countBreeds());
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
