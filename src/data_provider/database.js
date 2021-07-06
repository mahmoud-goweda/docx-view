const mongoose = require('mongoose');
module.exports = class Database {
  constructor(connection){
    this.connection = connection;
    this.connected = false;
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(this.connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to db"));
    return mongoose.connect(this.connection);
  }
}
