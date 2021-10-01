const express =require('express');
const router = express.Router();
const myHandler=require('../handlers/pendingTestimoniesHandler');
const testimonies = require('../models/testimonies');

function Ismanager(req,res,next){

    if(req.user&&req.user.manager) return next();
    res.redirect('/login')
}


router.get('/',Ismanager, (req, res) => {
    return res.sendFile('/client/pendingTestimonies.html', { root: "C:/Users/Itai/Desktop/project" });
});



router.post('/',Ismanager, async (req, res) => {
res.send(await myHandler.changeTestimonieStatus(req.body.tetimonieId,req.body.change))
})




module.exports=router