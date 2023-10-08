const Comments = require('../models/comment');
 const Post = require('../models/post')
module.exports.create = function(req,res){
Post.findByid(req.body.post, function(err,post){
 
    if (Post){
        Comments.create({
            content : req.body.content,
            post : req.body.post,
            user : req.user._id 
        },function(err,comment){
            // handle error
            if(err){console.log('error in posting comments');return}

            post.comment.push(comment);
            post.save();

            res.redirect('/');
        });
    }
});
}