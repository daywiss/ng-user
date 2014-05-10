var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var shortid = require('short-id')
var db = require('../database')

db.users.put('root',{username:'root',password:'admin'},function(err){
  if(err)console.log(err)
})

passport.use(new LocalStrategy(
  function(username,password,done){
    console.log(username,password)
    db.users.byUsername.get(username,function(err,user){
      if(err) return done('No User found ' + username,false)  
      if(!user) return done('No user found',false)
      if(user.password === password) return done(null,user)
      done('Passwords dont match',false)
    })
  }
))
passport.serializeUser(function(user,done){
  if(user.id == null) user.id = shortid.generate()
  done(null,user.id)
})
passport.deserializeUser(function(id,done){
  db.users.get(id,function(err,user){
    if(err) done(err,user)
    done(null,user)
  })
})
module.exports = passport
