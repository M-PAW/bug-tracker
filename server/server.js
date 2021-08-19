require('dotenv').config()
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false},(err) => {
    if (!err) return console.log('DB Connected Successfully');
    console.log(err);
})

const PORT = process.env.PORT || 5500;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(cors());
app.use(cookieParser());

app.use('/auth', require('./Controller/Routes/auth'))
app.use('/user', require('./Controller/Routes/user'))
app.use('/team/', require('./Controller/Routes/team'))

app.get('/', (req,res) => {
    res.status(200).json('Online')
})



app.listen(PORT, () => {
    console.log(`Server Online: ${PORT}`);
})
