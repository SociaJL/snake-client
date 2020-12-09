const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
    
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('server says:', data);
  });

  conn.on('connect', () => { 
    conn.write('Name: JOE');
  });
  
  return conn;
}
module.exports = {connect}
