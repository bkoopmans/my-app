const mongoose = require('mongoose');
/**
* Set to Node.js native promises
* Per https://mongoosejs.com/docs/promises.html
*/
mongoose.Promise = global.Promise;

const env = require('./env/environment');

// eslint-disable-next-line max-len
const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.mongo.cosmos.azure.com:${env.port}/?ssl=true&sslverifycertificate=false`;

function connect() {
  mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: false
  })
  .then(() => console.log('Connection to CosmosDB successful'))
  .catch((err) => console.error(err));;
}

module.exports = {
connect,
mongoose
};
