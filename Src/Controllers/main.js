const getRoot = (req, res) => {
  res.send('<h1>Servidor ok</h1>')
    res.json({
      msg: "Hello from the main router!",
    });
  };
  
  module.exports = {
    getRoot,
  };
  