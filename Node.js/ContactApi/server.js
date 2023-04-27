const express = require('express');
require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');

connectDB();
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json())
app.use("/api/contact",contactRoutes);
app.use("/api/users",userRoutes);
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`listning to port ${port}`)
})
