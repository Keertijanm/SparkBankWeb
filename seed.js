const mongoose = require("mongoose");
const Customer = require("./models/user");

mongoose.connect("mongodb://localhost:27017/banking", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("error", err);
    })

const v = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany([
      {
        username: "keerti Gupta",
        email: "keertijanm@gmail.com",
        Balance: 1500,
        avatar: "https://ibb.co/xmhcMps",
        contact: 123456589,
        about: "Engineer",
      },
      {
        username: "khushi Chaurasia",
        email: "khushi.singgmail.com",
        Balance: 500,
        avatar: "https://ibb.co/r473hRh",
        contact: 7712400440,
        about: "Doctor",
      },
      {
        username: "sakshi singh",
        email: "karyana@gmail.com",
        Balance: 500,
        avatar: "https://ibb.co/Fb010Zp",
        contact: 8823324064,
        about: "Teacher",
      },
      {
        username: "mansi garg",
        email: "dhawan78@gmail.com",
        Balance: 500,
        avatar: "https://ibb.co/W54GDtW",
        contact: 7790422189,
        about: "Student",
      },
      {
        username: "deepanshi rawat",
        email: "sahil_Dogra@gmail.com",
        Balance: 500,
        avatar: "https://ibb.co/rtD3ZHx",
        contact: 6631123098,
        about: "Developer",
      },
      {
        username: "mansvi singh",
        email: "12preeta.sax@gmail.com",
        Balance: 500,
        avatar: "https://ibb.co/xzFQN1K",
        contact: 8234580971,
        about: "Teacher",
      },
      {
        username: "lori shrivastav",
        email: "kapoor90anku@gmail.com",
        Balance: 500,
        avatar: "https://ibb.co/2tRxTTY",
        contact: 2098453187,
        about: "Student",
      },
    ]);
};

v();