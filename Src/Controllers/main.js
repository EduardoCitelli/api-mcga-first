const getRoot = (req, res) => {
    res.json({
      msg: "Hello from the main router!",
    });
  };
  
  module.exports = {
    getRoot,
  };
  