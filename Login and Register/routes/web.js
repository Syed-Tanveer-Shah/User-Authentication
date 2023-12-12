import express from "express";
const router = express.Router()
import usercontroller from '../controllers/usercontroller.js'


router.get('/',usercontroller.home)
router.get('/registration',usercontroller.registration)
router.post('/registration',usercontroller.createuserDoc)
router.get('/login',usercontroller.login)
router.post('/login',usercontroller.verifiedlogin )
router.get('/dashboard',usercontroller.dashboard)

export default router