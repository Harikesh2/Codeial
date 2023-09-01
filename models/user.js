const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email : {
        type : string,
        require : true, 
        unique : true
    },
    password :{
        type : string,
        require : true
    },
    name : {
        type : string,
        require : true
    },
},
    {
        timestamps : true

    });
    const User = mongoose.model('User', userSchema);

    module.exports = User;