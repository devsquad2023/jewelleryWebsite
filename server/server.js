require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const Jewellery = require("./mongoose");
const bodyParser = require("body-parser");
const multer = require('multer');
const ImageKit = require('imagekit');
const cors = require("cors");
const {v4: uuidv4 } = require('uuid');

// app.use(express.static(path.join(__dirname, "./client/build")));

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', false);
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

const upload = multer();

const imagekit = new ImageKit({
  publicKey: process.env.PUBLIC_API_KEY,
  privateKey: process.env.PRIVATE_API_KEY,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT, // e.g., 'https://ik.imagekit.io/your_imagekit_id'
});

app.get("/hello", (req, res) => {
  res.send('Hello');
});

try {
    app.get("/fetchCategory", (req, res) => {
      const type = req.body.type;
        Jewellery.find({type: type})
        .then(result => res.send(result))
        .catch(err => res.send(err));
    })
}
catch (error) { console.log(error.message) };

app.post('/upload',upload.single('imageData'), (req, res) => {
  try {
    let imageBuffer = req.file.buffer;
    let newItem = JSON.parse(req.body.JSON);
    let DBresponse;

    imagekit
      .upload({
        file: imageBuffer,
        fileName: 'image.jpg',
      })
      .then((result) => {
        console.log('Uploaded Image URL:', result.url);

        newItem = { ...newItem,
          id: uuidv4(),
          imageURL: result.url
        }
        newItem = new Jewellery(newItem);

        newItem.save()
        .then(res => {
          console.log("item uploaded to database");
          DBresponse = JSON.stringify(res);
        })
        .catch(err => {
          res.status(400).json({ success: false, message: {
            'database error': err,
            'image URL': result.url
          } });
        });

        res.status(200).json({ success: true, message: {
          'DBresponse': DBresponse,
          'database': 'Upload Success',
          'image URL': result.url,
        } });
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        res.status(500).json({ success: false, error: 'Image upload failed.' });
      });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ success: false, error: 'Item processing failed.' });
  }
});

// app.on('ready', function() { 

//     Bug.find((err, foundBugs) => {
//         if(err){
//             console.log("Error Retrieving Data");
//         }
//         else if(foundBugs.length === 0){
//             const fakeBugs = fakeDataGenerator();
//             Bug.insertMany(fakeBugs, function(err){
//                 if(err){
//                     console.log(err);
//                 }
//             })
//         }
//     });

//     app.listen(port, () => console.log(`Server listening on port ${port}`));
// }); 

app.listen(port, () => console.log(`Server listening on port ${port}`));