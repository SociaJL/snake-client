const { connect } = require('./client');
console.log('Connecting ...');
connect();

connect.on('connection', (client) => {
  client.write('Name: Joe');
});

