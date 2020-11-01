const express = require('express');
const app = express();
const users = require('./routes/users')
const connectToDatabase = require('./config/connectToDatabase');

connectToDatabase();

app.use(express.json({ extended: false}));

app.use('/api/users', users);

let PORT = process.env.PORT || 6000;

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
