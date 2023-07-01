const mongoose = require("mongoose");

mongoose
  .connect("mongo://localhost:27017/RazerAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((data) => {
    console.log(`MongoDB connected to ${data.connection.host} server successfully!`);
  }).catch((err)=>{
    console.log(err);
  })
