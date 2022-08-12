//LIBRARIES

const express = require('express');
const bodyParser = require('body-paerser');
const mongoose = require('mongoose');

//EXPRESS APP

const app = express();
const PORT = 3000;

//MONGODB CONNECTION
const database_url = 'mongodb://localhost:27017/ussd';
mongoose.connect(database_url);
const db = mongoose.connection;
db.on('error', (err)=> {
    console.log(err);
})
db.once('open', ()=> {
    console.log('Database is running')
})

//BODY PARSER APP

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send("successful message!")
})

app.post('/ussd', (req, res) => {
    //Read the variables sent via post from our API
    const { sessionId, phoneNumber, text, serviceCode } = req.body;
    let response = '';
    if(text === ''){
        response = `CON what would you like to check?
        1. My Account
        2. My Phone Number`;

    } else if(text == '1'){
        //business logic for first level response
        response = `CON choose account information you wantb to view
        1. Account Number
        2. Account Balance`;
    } else if(text =='2'){
    
        response = `END your phone number is ${phoneNumber}`
    } else if(text == '1*1'){
        const accountNumber ='2120238699';

        //terminal request

        response = `End your account number is ${accountNumber}`;
    }else if(text === '1*2') {
        //Get data from the database
        const balance = `100,000`;
        response = `End your balance is ${balance}`;
    }
    //sending request back to the API

    res.set('Contet-Type: text/plain')
    res.send(response)

})

 exports.ussd = functions.http.onRequest(app);