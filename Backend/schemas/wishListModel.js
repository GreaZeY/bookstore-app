const mongoose = require('mongoose')

const WishListSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "UsersOfBookstore",
        required: true
    },
    WishList: [{
        isbn:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        bookCover: {
            type: String,
            required:true
        },
        author: {
            type: String,
            required:true
        },
        date_added:{
            type:Date,
            default:Date.now
        }

    }],
  

})





module.exports = mongoose.model("WishListofBookstore", WishListSchema )
