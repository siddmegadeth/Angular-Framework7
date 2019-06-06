(function()
{
		log = console.log.bind(console);
		require("./module");
		require("./database");
		require("./schema");
		require("./route");


		http.createServer(app).listen(app.get("PORT"),function()
		{
			log("FB Mock Started : PORT : 3001");
		})
})()