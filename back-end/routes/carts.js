const express = require("express");
const router = express.Router();
const _ = require("lodash");
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");
const CryptoJS = require("crypto-js");
const { Cart } = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyTokens");

// CREATE
router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).send(savedCart);
  } catch (error) {
    res.status(400).send(error);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedCart);
  } catch (err) {
    res.status(500).send(err);
  }
});
//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).send("Cart deleted!");
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET Cart
router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne(req.params.id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
});

//GET ALL Carts

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).send(carts);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
