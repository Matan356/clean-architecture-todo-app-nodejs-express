const mongoose = require('mongoose');
const config = require('config');

async function connect() {
  const dbUri = config.get('dbUri');

  try {
    await mongoose.connect(dbUri, {
      w: 'majority',
    });
    console.log('DB connected');
  } catch (error) {
    console.error('Could not connect to db');
    console.error(error);
    process.exit(1);
  }
}

module.exports = connect;
