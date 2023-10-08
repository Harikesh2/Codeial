
const Post = require('../models/post');
module.exports.home = function (req,res){
    // return res.end('<h1>Express is up for codeial</h1>');


  // Post.find({}, function(err,posts){
  //   return res.render('home',{
  //       title : "Codieal ||home",
  //       posts: posts 
  //    }
  //   );
  // });


// populate the user of the each post
  post.find({}).populate('user').exec(function(err,posts){
    return res.render('home',{
      title : "Codieal ||home",
      posts: posts 
   }
  );

  })
}