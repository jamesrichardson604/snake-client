const setupInput = function() {
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
    };
    handleUserInput()
  })
  return stdin;
}

module.exports = { setupInput } 