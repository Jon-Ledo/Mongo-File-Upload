const { StatusCodes } = require('http-status-codes')

const uploadProductImage = async (req, res) => {
  res.send('uploaded product image')
}

module.exports = {
  uploadProductImage,
}
