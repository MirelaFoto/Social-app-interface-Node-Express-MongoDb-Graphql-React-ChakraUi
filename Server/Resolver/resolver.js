const User = require('../models/model')

const resolvers = {
   users:()=>{
        return User.find({})
    },
    userByName:(args)=>{
        return User.findOne({name:args.name})
    },
    addUser:(args)=>{
      let user = new User({
        name:args.name,
        email:args.email,
        phone:args.phone
      }) 
      user.save()
      return user
    }
}

module.exports = resolvers