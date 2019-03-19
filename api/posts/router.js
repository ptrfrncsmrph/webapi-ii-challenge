const express = require("express")

const db = require("../../data/db")

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const hubs = await db.find(req.query)
    res.status(200).json(hubs)
  } catch (error) {
    // log error to database
    console.log(error)
    res.status(500).json({
      message: "Error retrieving the hubs"
    })
  }
})

module.exports = router
