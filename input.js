let connection;



const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => handleUserInput(key));

  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    };
    if (key === 'w') {
      conn.write('Move: up');
    } else if (key === 'a') {
      conn.write('Move: left');
    } else if (key === 's') {
      conn.write('Move: down');
    } else if (key ==='d') {
      conn.write('Move: right');
    } else if (key === 'q') {
      conn.write('Say: gotcha');
    } else if (key === 'e') {
      conn.write('Say: Well that sucks');
    }
    return stdin;
  };
};
module.exports = { setupInput };