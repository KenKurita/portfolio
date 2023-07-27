const express = require('express');
const port = 3000;
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.static(__dirname + '/../client/public'))
app.use(express.urlencoded(true));


//********** Routing ***********//
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/public/index.html'));
});

//*********** Routing End ***********//


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})