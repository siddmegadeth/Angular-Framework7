(function()
{
	http = module.exports = require("http");
	express = module.exports = require("express");
	app = module.exports = express();
	mongoose = module.exports = require("mongoose");
  	Schema = module.exports = mongoose.Schema;

  	app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.set('host', process.env.NODE_IP || 'localhost');
    app.set("PORT", process.env.PORT || 3001);
    // app.use(bodyParser.urlencoded({
    //     extended: true
    // }));
   // app.use(cors());
   // app.use(bodyParser.json());
    app.use("/", express.static("public/facebook/www"));


})()