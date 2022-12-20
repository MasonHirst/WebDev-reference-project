const {Product} = require('./models')

let allProducts = [
   {
      name: "Squatty Potty",
      price: 19.99,
      clearance: false
   },
   {
      name: "Door",
      price: 149.45,
      clearance: false
   },
   {
      name: "8 foot board",
      price: 77.78,
      clearance: false
   },
   {
      name: "Oculus",
      price: 249.99,
      clearance: true
   }
]

const seed = async () => {
   await Product.bulkCreate(allProducts)
}

module.exports = seed