import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from "body-parser";


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect('mongodb+srv://root:Sumit@cluster0.muudh.mongodb.net/mernstack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((data) => {
  console.log("database connected");
}).catch((err) => {
  console.error(err);
})
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  psw: String,
  cpsw: String
})

const User = mongoose.model("User", userSchema);

const user = new User({
  fname: "Sumit",
  lname: "mishra",
  email: "sm@",
  psw: "sm",
  cpsw: "sm"
})

user.save((err) => {
  if (err) {

    console.log("unsuccesfully", err.message);
  } else {

    console.log("registered successfully", user);

  }
}
);



