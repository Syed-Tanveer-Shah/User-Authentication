// app.js
import express from 'express';
import connectDB from './connections/connectdb.js';
import web from './routes/web.js'
const app = express();
const port = process.env.PORT || '8000';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';

// database connection

connectDB(DATABASE_URL); // Function to establish the database connection

// ejs engine 
app.set('view engine', 'ejs')

// urlencoded
app.use(express.urlencoded ({extended:true}));

// load routers
app.use('/',web)


app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
