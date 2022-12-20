// axios for promice based http client for node
const axios = require("axios");

// exports to render pages

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/games
  axios
    .get("http://localhost:3000/api/games")
    .then(function (response) {
      res.render("index", { games: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_game = (req, res) => {
  res.render("add_game");
};

exports.update_game = (req, res) => {
  axios
    .get("http://localhost:3000/api/games", { params: { id: req.query.id } })
    .then(function (gamedata) {
      res.render("update_game", { game: gamedata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
