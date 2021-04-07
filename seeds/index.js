const mongoose = require("mongoose");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers");
const Campground = require("../models/campground");

// mongoose and database related
mongoose.connect("mongodb://localhost:27017/yelpcamp", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

// for sampling from our seed helpers to generate a random title.
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // YOUR USER ID
            author: "605f80bb89d9d301ec767010",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis massa tellus, eu iaculis ex accumsan a. Etiam at auctor risus. Mauris et scelerisque ipsum, sit amet dapibus odio. Nulla bibendum dapibus dui, et euismod ex posuere in. Aliquam et egestas tortor, blandit consequat tellus. Nam dui lorem, imperdiet vehicula leo non, finibus convallis eros. Proin dignissim ut neque eget maximus. Etiam at eros ut diam fermentum faucibus sed ac felis. Donec ultrices malesuada volutpat. Vestibulum a tempor augue.",
            price,
            geometry: {
                type: "Point",
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            images: [ 
                {
                  "url" : "https://res.cloudinary.com/dnyeu9uif/image/upload/v1617285118/YelpCamp/wm3mgfyfa1miznzct54s.jpg", 
                  "filename" : "YelpCamp/wm3mgfyfa1miznzct54s" 
                }, 
                { 
                  "url" : "https://res.cloudinary.com/dnyeu9uif/image/upload/v1617285140/YelpCamp/czlzfexlzllst0krqjlt.jpg", 
                  "filename" : "YelpCamp/czlzfexlzllst0krqjlt" 
                } 
            ]
        });

        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})