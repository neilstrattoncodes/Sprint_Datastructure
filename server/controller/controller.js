var Gamedb = require("../model/model");

// create and save new game
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }

  // new game database Schema
  const game = new Gamedb({
    name: req.body.name,
    desc: req.body.desc,
    type: req.body.type,
    price: req.body.price,
    sku: req.body.sku,
    platform: req.body.platform,
    status: req.body.status,
  });

  // save game in the database
  game
    .save(game)
    .then((data) => {
      //res.send(data)
      res.redirect("/add-game");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

// retrieve and return all games/ retrive and return a single game
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Gamedb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found game with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving game with id " + id });
      });
  } else {
    Gamedb.find()
      .then((game) => {
        res.send(game);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving game information",
        });
      });
  }
};

// Update a new idetified game by game id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Gamedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update game with ${id}. Maybe game not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update game information" });
    });
};

// Delete a game with specified game id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Gamedb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "game was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete game with id=" + id,
      });
    });
};
