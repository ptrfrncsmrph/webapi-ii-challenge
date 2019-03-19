const express = require("express")

const db = require("../../data/db")

const router = express.Router()

router.post("/", async (req, res) => {
  const { title, contents } = req.body
  if (title == null || contents == null) {
    res.status(400).json({
      message: "Please provide title and contents for the post."
    })
  }
  try {
    const { id } = await db.insert({ title, contents })
    res.status(200).json({ title, contents, id })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Error creating the post."
    })
  }
})

router.get("/", async (_req, res) => {
  try {
    const posts = await db.find()
    res.status(200).json(posts)
  } catch (error) {
    console.log(JSON.stringify(error, null, 2))
    res.status(500).json({
      message: "Error finding the posts."
    })
  }
})

module.exports = router
