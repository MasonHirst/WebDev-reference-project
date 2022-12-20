//! Imports go at the top
const express = require('express')
const cors = require('cors')
const server = express()
const db = require('./util/database')
const {User, Product, Cart} = require('./util/models')
const seed = require('./util/seed')

//! Middlware (how our sever will function)
server.use(express.json())
server.use(cors())


//! Associations
User.hasMany(Cart)
Cart.belongsTo(User)

Product.hasMany(Cart)
Cart.belongsTo(Product)

//! endpoints
server.post('/api/addUser', async (req, res) => {
   const {username, password} = req.body
   try {
      await User.create({username: username, password: password})
      res.status(200).send("User created!")
   } catch {
      res.status(401).send('Could not create user')
   }

})

server.get('/api/user/:id', async (req, res) => {
   const {id} = req.params
   try {
      let info = await User.findOne({where: {id: id}})
      res.status(200).send(info)
   } catch {
      res.status(400).send("couldn't complete request")
   }
})



db
   .sync()
   // .sync({force: true})
   // .then(() => seed())
//! listen statement (port, function to run)
const PORT = 4000
server.listen(PORT, () => console.log(`server running on port ${PORT}`))
