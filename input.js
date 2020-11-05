

const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //handleUserInput function = callback handler for stdin, checks for user ctrl + c input
  stdin.on('data', (key) => {
    const handleUserInput = function() {
      if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w'){
        conn.write('Move: up')
      }
      if (key === 's'){
        conn.write('Move: down')
      }
      if (key === 'a'){
        conn.write('Move: left')
      }
      if (key === 'd'){
        conn.write('Move: right')
      }
      if (key === 'i'){
        conn.write('Say: Sup')
      }
      if(key === 'o'){
        conn.write('Say: Yeet')
      }
      if (key === 'p'){
        conn.write('Say: Ayo')
      }
      
    };
    handleUserInput()
  })
  return stdin;
}



module.exports = { setupInput } 