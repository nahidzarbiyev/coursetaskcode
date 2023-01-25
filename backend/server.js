const express = require('express')
const port = 8000
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const app = express()
const cors = require("cors")
const { Schema } = mongoose;
app.get('/', (req, res) => {
  res.send('Hello World!')
})


const coursesSchema = new Schema(
    {
      caption: { type: String, required: true },
      fullname: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      personimg: { type: String, required: true },
      

    },
    { timestamps: true }
  );

  const Courses = mongoose.model("courses", coursesSchema);

  app.use(cors());
  app.use(bodyParser.json());

  app.get("/courses",(req,res)=>{
    Courses.find({}, (err, docs) => {
        if (!err) {
          res.send(docs);
        } else {
          res.status(500).json({ message: "error" });
        }
      });
  })


  app.get("/courses/:id", (req, res) => {
    const { id } = req.params;
  
    Courses.findById(id, (err, doc) => {
      if (!err) {
        if (doc) {
          res.send(doc);
          res.status(200);
        } else {
          res.status(404).json({ message: "error" });
        }
      } else {
        res.status(500).json({ message: "error" });
      }
    });
  });


  app.delete("/courses/:id", (req, res) => {
    const { id } = req.params;
    Courses.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.send("delete");
      } else {
        res.status(404).json({ message: err });
      }
    });
  });


  app.post("/courses/", (req, res) => {
    let cours = new Courses({
        caption: req.body.caption,
        fullname: req.body.fullname,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        personimg: req.body.personimg,
    });
  
    cours.save();
    res.send({ message: "gonderildi" });
  });
  

mongoose.connect(
  "mongodb+srv://nahidzarbiyev:nahidzarbiyev@cluster0.hzrtup0.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      console.log("connect");
      app.listen(port, () => {
        console.log(` http://localhost:${port}`);
      });
    }
  }
);