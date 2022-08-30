const express = require('express');
const methodOverride = require('method-override');
const path = require('path');


const app = express();




//Template Engine
app.set("view engine", "ejs");


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);


//Routes
app.use((req,res) => {
  res.status(200);
  res.sendFile(path.join(__dirname,'views/index.html'))
})

app.use((req,res) => {
  res.status(404);
  res.sendFile(path.join(__dirname,'views/404.html'))
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});



