const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
let notice = [];

app.get("/", (req, res) => {
  res.send("Blic!");
});


app.post("/saveItem", (req, res) => {
    var data = req.body;
    console.log(data);
  
    data = { ...data, id: uuidv4(), name: Value(), price: value(), brand, };
    notice.push(data);
    res.send(notice);

    data:{
        item:{ 
            name:"Hlace";
            price: 70.53;
            brand: "New"
        }
    }
  });


  app.get("/getBrand", (req, res) => {
    var data;
    var temp = [];
  
    for (k in notice) {
      data = notice[k].naziv + " " + notice[k].datum;
      temp.push(data);
    }
    res.send(temp);
    
    {
        status:"OK";
        data:{
            brand:"New",
            items:[
                {name:"Hlace", price:70.53},
                {name:"Jakna", price: 250.1}
            ]
        
    }

  }
});


  app.get("/getItemId", (req, res) => {
    var data;
    var temp = [];
  
    for (k in notice) {
      temp.push(data);
    }
    res.send(temp);
{
    status:"OK";
    data:{
        item:{
            name:"Hlace";
            price: 70.53;
            brand:"New";
        }
    }
}

});


  