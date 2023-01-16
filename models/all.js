const mongoose = require("mongoose");

 mongoose.connect("mongodb+srv://keertigupta:1835Ja0133Nm@datab.wet1xhr.mongodb.net/test", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("connected");
   })
     .catch((err) => {
       console.log("error", err);
   })

const databSchema = new mongoose.Schema({
    Date: Date,
    payment: String
});

const Datab = mongoose.model("Datab", databSchema);

module.exports = Datab;