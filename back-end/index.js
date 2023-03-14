import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from "body-parser";


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://root:Sumit@cluster0.muudh.mongodb.net/mernstack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((data) => {
  console.log("database connected");
}).catch((err) => {
  console.error(err);
})
const userSchema = new mongoose.Schema({
    fname: "string", lname: "string", email: "string", psw: "string", cpsw: "string"
})

const User =  new mongoose.model("User", userSchema);

// Routes 



app.post("/login", (req, res) => {
    const {email , psw} = req.body ;
    
    User.findOne({ email: email} , (err,user)=>{
        if(user){
            if(psw===user.psw)
            res.send({message:"login connected" , user})
            else{
                res.send({message:"incorrect password"})
            }
        }
        else{
            res.send({message:"user not found , please register first"});
        }
    })
})
app.post("/register", (req, res) => {
    const { fname, lname, email, psw, cpsw } = (req.body); 

    User.findOne({email:email} , (err ,Login)=>{
        if(Login){
            res.send(("user already exist"))
        }else{
            const user = new User({
                fname:fname,
                 lname:lname,
                 email:email,
                 psw:psw,
                 cpsw:cpsw
            })
        
            user.save((err) => {
                if (err) {
                    
                    res.send(("unsuccessful register"));
                } else {
                    
                    res.send(("registered successfully"));
                }
            }
            );
        }
    })
    
    
})


app.listen(9002, () => {
    console.log(`running at local host 9002`);
})
