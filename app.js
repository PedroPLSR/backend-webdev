//app.js
const { MongoClient, ObjectId } = require("mongodb");

async function connect() {
  if (global.db) return global.db;
  const conn = await MongoClient.connect(
    "mongodb+srv://samueo:root@webdev-backend.n5e8lbj.mongodb.net/?retryWrites=true&w=majority"
  );
  if (!conn) return new Error("Can't connect");
  global.db = await conn.db("betavo");
  return global.db;
}

const express = require("express");
const app = express();
const PORT = 3000; //porta padrão

app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//definindo as rotas
const router = express.Router();

<<<<<<< Updated upstream
router.get("/", (req, res) => res.json({ message: "Connected to Betavo DB!" }));

// ==== CARDS API ====
// GET /cards || GET /cards/{id}
=======
router.get("/", (req, res) => res.json({ message: "Funcionando!" }));

// ==== CARDS COLLECITON ====
// GET
>>>>>>> Stashed changes
router.get("/cards/:id?", async function (req, res, next) {
  try {
    const db = await connect();
    if (req.params.id) {
      res.json(
        await db
          .collection("cards")
          .findOne({ _id: new ObjectId(req.params.id) })
      );
    } else {
      res.json(await db.collection("cards").find().toArray());
    }
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

<<<<<<< Updated upstream
// POST /cards
=======
// POST
>>>>>>> Stashed changes
router.post("/cards", async function (req, res, next) {
  try {
    const customer = req.body;
    const db = await connect();
    res.json(await db.collection("cards").insertOne(customer));
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

<<<<<<< Updated upstream
// PUT /cards/{id}
=======
// PUT
>>>>>>> Stashed changes
router.put("/cards/:id", async function (req, res, next) {
  try {
    const customer = req.body;
    const db = await connect();
    res.json(
      await db
        .collection("cards")
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: customer })
    );
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

<<<<<<< Updated upstream
// DELETE /cards/{id}
=======
// DELETE
>>>>>>> Stashed changes
router.delete("/cards/:id", async function (req, res, next) {
  try {
    const db = await connect();
    res.json(
      await db
        .collection("cards")
        .deleteOne({ _id: new ObjectId(req.params.id) })
    );
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});
<<<<<<< Updated upstream
=======

// ==== BETS COLLECITON ====
// GET
router.get("/bets/:id?", async function (req, res, next) {
  try {
    const db = await connect();
    if (req.params.id) {
      const match = await db.collection("matches").findOne({
        _id: new ObjectId(req.params.id),
      });
    } else {
      res.json(await db.collection("bets").find().toArray());
    }
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

// POST
router.post("/bets", async function (req, res, next) {
  try {
    const customer = req.body;
    const db = await connect();
    res.json(await db.collection("bets").insertOne(customer));
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

// PUT
router.put("/bets/:id", async function (req, res, next) {
  try {
    const customer = req.body;
    const db = await connect();
    res.json(
      await db
        .collection("bets")
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: customer })
    );
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

// DELETE
router.delete("/bets/:id", async function (req, res, next) {
  try {
    const db = await connect();
    res.json(
      await db
        .collection("bets")
        .deleteOne({ _id: new ObjectId(req.params.id) })
    );
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});
>>>>>>> Stashed changes

app.use("/", router);

//inicia o servidor
console.log(
  `Server runnning on PORT ${PORT}\nServer URL: http://localhost:3000/`
);
app.listen(PORT);
<<<<<<< Updated upstream
=======
console.log(`Server runnning on PORT ${PORT}`);
>>>>>>> Stashed changes
