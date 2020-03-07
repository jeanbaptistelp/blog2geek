
const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title : {
        type : String,
        required: false
    },
    subtitle : {
        type : String,
        required: false
    },
    author : {
        type : String,
        required: false
    },
    content : {
        type : String,
        required: false
    },
    category : {
        type : String,
        required: false
    },
    date : {
        type : Date,
        default : Date.now,
        required: true
    },
})

// on crée le modele, et on lui donne le nom de Posts qui va apparaitre dans la DB
module.exports = mongoose.model('Posts', PostSchema)
