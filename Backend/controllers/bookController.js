const catchAsyncErros = require('../middleware/catchAsyncErrors')
const ErrorHandler = require("../utils/errorhandler")
 const WishList = require("../schemas/wishListModel")


 exports.addToWishList = catchAsyncErros(async (req,res,next)=>{
try{
        let UserWishList = await WishList.findOne({user:req.body.userId})
        if(!UserWishList){
        UserWishList = await WishList.create({
            user:req.body.userId,
            WishList:[req.body.book]
        })
    }else{
        for(let i in UserWishList.WishList){
            if(req.body.book.isbn===UserWishList.WishList[i].isbn) return next(new ErrorHandler('It is already in your wishlist.',400))
        }
        
            UserWishList.WishList.unshift(req.body.book)
            await UserWishList.save()
    }
    res.status(200).json({
        success:true,
        wishlist:UserWishList.WishList
    })
}catch(err){
    return next(new ErrorHandler(error.message,400))
}


})
exports.removeFromWishList = catchAsyncErros(async (req,res,next)=>{
        let UserWishList = await WishList.findOne({user:req.body.userId})
      
        if(!UserWishList){
            return next(new ErrorHandler('Wishlist does not exist.',400))
    }else{
        try{
        UserWishList.WishList = await UserWishList.WishList.filter((item) => item.isbn != req.body.isbn )
            await UserWishList.save()
        }catch(err){
            return next(new ErrorHandler(error.message,400))
        }

    }
        res.status(200).json({
            success:true,
            wishlist:UserWishList.WishList
        })

})

exports.getWishList = catchAsyncErros(async (req,res,next)=>{
        let UserWishList = await WishList.findOne({user:req.body.userId})
        if (!UserWishList) {
            return next(new ErrorHandler("You haven't added anything to List yet.",400));
        }
        res.status(200).json({
            success: true,
            wishlist:UserWishList.WishList
        })

})
