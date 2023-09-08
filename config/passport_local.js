const passport = require('passport');

const Localstrategy = require('passport-local').Strategy;
const User = require('../models/user');


// authentication using passport
passport.use(new Localstrategy({
usernameField :'email'
},
function(email,password,done){
    // find a user and establish the identity
    User.findOne({email:email}, function(err, user){
        if(err){
        console.log('Error in finding the User --> Passport');
        return done(err);
        }
        if (!user || user.password != password){
            console.log('Invalid User/Password');
            return done (null,)
        }
    })

}
));