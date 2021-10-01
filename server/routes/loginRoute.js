const express =require('express');
const router = express.Router();
const users =require('.././models/users')
const myHandler=require('../handlers/authinticationHandler')
const bcrypt= require('bcryptjs')
const passport=require('passport')
const initializePassport= require('../passport-config')
const AuthHandler=require('../handlers/authinticationHandler')

function IsOut(req,res,next){
    if(!req.isAuthenticated()) return next();
    res.redirect('/')
}

router.get('/', IsOut, (req, res) => {
    console.log(req.flash())
    return res.sendFile('/client/login.html', { root: "C:/Users/Itai/Desktop/project" });
});

router.post('/',passport.authenticate('local',{
    successRedirect:'/login/successLogin',
    failureRedirect:'/login/faillogin',
    failureFlash:true
}))

router.get('/failLogin', (req, res) => {
    const ERROR = req.flash()
    return res.send(false)
})
router.get('/successLogin', (req, res) => {
    return res.send(true)
})

    //------------------- לפני פספורט-------------------------------------------

// router.post('/', async (req, res) => {
//     // const isExist= await users.findOne({$and:[{name:req.body.name},{password:req.body.password}]})
//     // if (isExist) {console.log("ok")
//     //     {
//     //         currntUser=req.body.name
//     //         return res.send("ok")
//     //     }
//     // }
//     // console.log("no")
//     // return res.send("no")
//     const exist= await myHandler.IsExist(req.body.name,req.body.password)
//     return res.send(exist)
// })
      //------------------- נגמר לפני פספורט-------------------------------------------


module.exports=router