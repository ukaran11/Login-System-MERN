const express = require('express');
const app = express();
const cors = require("cors");
const users = require('./routes/users')
const connectToDatabase = require('./config/connectToDatabase');
const fileUpload = require('express-fileupload');
connectToDatabase();

app.use(cors());
app.use(fileUpload());
app.use(express.json({ extended: false}));

app.use('/api/users', users);

// Picture upload feature
app.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });

let PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
