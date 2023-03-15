const {  confirmEmail, signIn } = require('./parent.auth')
const{signup} = require('../user.auth')

const router=require('express').Router()

router.post("/:userType/signup",signup)
router.get("/:userType/confirmEmail/:id",confirmEmail)
router.post("/signIn",signIn)
// router.get("/refreshEmail/:id",refreshEmail)



// router.post("/sendCode",sendCode)
// router.post("/forgetPassword",forgetPassword)

module.exports=router