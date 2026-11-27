const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.use(express.urlencoded())
app.get('/person',(req,res) => {
    res.sendFile(path.join(__dirname,('person.html')))
})
app.post('/process',(req,res) => {
    name= req.body.txt1
    tell=req.body.txt2
    sex=req.body.sex
    notion=req.body.notion
    if(sex === 'Male')
        res.send(`Hello <b>Sir:  ${name} </b> i saw you nation <b>${notion} </b>
    i will contact you <b> ${tell} </b> `)
    else 
          res.send(`Hello <b>Madam:  ${name} </b> i saw you nation <b>${notion} </b>
    i will contact you <b> ${tell} </b> `)
})
app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});
app.get("/process", (req, res) => {
  name = req.query.txt1;
  tell = req.query.txt2;
  res.send(`Hi <b>${name} <b>${tell}</b>`);
});
app.listen(4000, () => {
  console.log(`Server is Runing Port 4000`);
});
