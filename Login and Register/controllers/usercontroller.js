import usermodel from '../models/user.js'
import bcrypt from'bcrypt'


class usercontroller{
    static home = (req,res)=>{
        res.render("index")
    }


    static registration = (req,res)=>{
        res.render("registration")
    }

// create documnet 

    static createuserDoc = async(req,res) =>{
        const hashpassword = await bcrypt.hash(req.body.password,10)
        try {
            // creating new document using model
            const doc = new usermodel({
                name: req.body.name,
                email: req.body.email,
                password: hashpassword,
            })
            // saving document
             await doc.save()
            res.redirect('/login')
        } catch (error) {
            console.log(error);
        }
    }

    static login = (req,res)=>{
        res.render("login")
    }

    static verifiedlogin = async(req,res) =>{

        try {
            const {email, password} = req.body
            const result = await usermodel.findOne({email:email})
            //console.log(result)
           if(result != null)
           {
            const isMatch = await bcrypt.compare(password,result.password)
            if (result.email==email && isMatch) {
                res.render("dashboard");
            } else {
                res.send("<h5> Email Or Password are Invalid</h5>")
            }
           }
           else{
            res.send("<h5> Please Register First</h5>")
           }
            
        } catch (error) {
            console.log(error);
        }

    }


    static dashboard = (req,res)=>{
        res.render("dashboard")
    }    

}
export default usercontroller