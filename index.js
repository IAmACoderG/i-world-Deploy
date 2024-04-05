const connectToMongo = require('./db');
const express = require('express');
var cors = require("cors");
require('dotenv').config()

connectToMongo();

const app = express();
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

//Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/contact', require('./routes/contact'));

app.use(express.static(path.join(__dirname,"./frontend/build")));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,"./frontend/build/index.html"))
})



app.listen(port, () => {
    console.log(`iNoteBook Backend listening on port http://localhost:${port}`)
});