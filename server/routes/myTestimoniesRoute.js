const express =require('express');
const router = express.Router();
const myHandler=require('../handlers/myTestimoniesHandler');

function IsIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/')
}



router.get('/',IsIn , (req, res) => {
    return res.sendFile('/client/myTestimonies.html', { root: "C:/Users/Itai/Desktop/project" });
});



router.post('/',IsIn , async (req, res) => {
    const tesArr= await myHandler.getMyTestimonies({Email:req.user.email})
    return res.send(tesArr)
})




module.exports=router