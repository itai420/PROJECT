const express =require('express');
const myHandler=require('../handlers/homeHandler')

const router = express.Router();

function IsIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/login')
}



router.get('/', (req, res) => {
    return res.sendFile('/client/home.html', { root: "C:/Users/Itai/Desktop/project" });
});

router.post('/', async (req, res) => {
    const quoteArr= await myHandler.getQuotes()
    return res.send(quoteArr)
})


module.exports=router