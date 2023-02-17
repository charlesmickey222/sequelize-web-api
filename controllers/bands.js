const Band = require("../models")

const create = async (req,res) => {
  try {
    const band = await Band.create(req.body)
    res.status(200).json(band)
  } catch (error) {
    res.status(500).json(error)
  }
}
const index = async (req,res) =>{
  try {
    const bands = await Band.findAll()
    res.status(200).json(bands)
  } catch (error) {
    res.status(500).json(error)
  }
}
const update = async (req,res) =>{
  try {
    const band = await Band.findByPk(req.params.id)
    band.set(req.body)
    await band.save()
    res.status(200).json(band)
  } catch (error) {
    res.status(500).json(error)
  }
}
const deleteBand = async (req,res) =>{
  try {
    const band = await Band.findByPk(req.params.id)
    await band.destroy()
    res.status(200).json(band)
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports = {
  create,
  index,
  update,
  delete:deleteBand
}