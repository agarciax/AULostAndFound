"use strict"
let express = require('express');
let app = express();
//const {con} = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
let  data = {
"menu": [
      {id: 0, type: 'Meat', dish: 'Prime Rib', price: '22.99'},
      {id: 2, type: 'Meat', dish: 'Chicken Tenders', price: '12.99'},
      {id: 4, type: 'Veggie', dish: 'Mac and Cheese', price: '7.99'}
     ]
};
// Your REST code here
//
var Item = function (item) {
    this.type = item.type;
    this.dish = item.dish;
    this.price = item.price;

};

let port = 3000;
console.log(`Listening on 127.0.0.1:${port}`);
app.listen(port);