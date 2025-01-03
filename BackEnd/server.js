const express = require('express');
const app = express();

const connectToMongo =  require('./mongodb');

connectToMongo();
app.use(express.json());
app.use('/form',require('./routes/form'))

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});
