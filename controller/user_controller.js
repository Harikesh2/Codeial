module.exports.profile = function(req, res){
    res.end ('<h1>User profile</h1>');
}

// render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up', {
        title : "Codieal | sign up"
    })
}

// render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_In', {
        title : "Codieal | sign In"
    })
}
