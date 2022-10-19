const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Successfully connected mongo database: ${con.connection.host}`);
    }).catch(con =>{
        console.log(`Couldn't stablish database connection `)
    })
}

module.exports=connectDatabase;