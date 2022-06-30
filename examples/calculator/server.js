
(async function(){

  var psio = require("peersocial.io");

  psio.plugins = [
    "/example/calculator"
  ]
  
  psio.expose = [
    [__dirname, "/example/calculator"]
  ]
  
  psio = await psio;

  console.log("psio", psio)
})();
