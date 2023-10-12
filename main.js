const express = require('express');
const path = require('path'); 

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/add', (req, res) => {

    res.redirect('/add.html');
  });
  
  app.get('/', (req, res) => {

    res.redirect('/home.html');
  });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});