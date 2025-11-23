const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_DB)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));
const authroutes = require('./routes/Authentication');
app.use('/api/auth',authroutes);
const PORT = process.env.PORT;
app.listen(PORT, ()=> {
    console.log('server is running');
})
