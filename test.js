const http = require("http");
const express = require("express");
const render = require("./app");
let app = function(){
	try{
		//create instance express
		this.express = express();
		
		//create server whit express
		this.server = http.Server(this.express);
		
		//create render
		new render(this, __dirname + "/frontend/");
		
		//service
		this.express.get("/",function(req,res){
			res.render("index",{
				title: "Hola mundo",
				p: "El motor de plantillas trascender.render esta funcionando perfectamente",
				a: "https://github.com/jotacalderon90/trascender.render",
				if: true,
				repeat: [1,2,3,4,5]
			});
		});
		
		//start app
		this.server.listen(80, function(){
			console.log("started");
		});
		
	}catch(e){
		console.error("ERROR");
		console.error(e);
	}
}();
