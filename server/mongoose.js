const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const DB_URL = process.env.DB_URL;
// mongoose.connect(DB_URL);

const intialDbConnection = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true
    })
        .then(conn => {
            console.log(`db connected`);
        })
        .catch(err => {
            console.log(`Error connecting to Database ${err}`);
        })
}

intialDbConnection();

const jewellery = mongoose.Schema({
    id: String,
    type: String,
    name: String,
    imageURL: Array,
    description: String,
    price: String,
    reviews: Array,
    weight: String,
    brand: String,
    dimensions: String,
    material: String
});

const Jewellery = mongoose.model("Jewellery", jewellery);

module.exports = Jewellery;