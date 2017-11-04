const Prismic = require('prismic.io'),
keys=require("../../.prismic-keys.js"),
accessToken=keys.accesToken,
endPoint=keys.endPoint



function prismicAPIConectionHelper (){
	console.log(keys)
	return Prismic.Api(endPoint,accessToken);
}


const apiHelpers ={
	apiConection:prismicAPIConectionHelper
}
/*
var apiHelpers ={
	apiConection:prismicAPIConectionHelper
	getBlogData: function(players){
		return prismicAPIHelper().then(function(api){
			//console.log("FIRST",api)
			return api.form('everything')
	        .ref(api.master())
	        .query(Prismic.Predicates.at("document.type", "navigation")).submit();
			
		}).catch(function(err) {
			console.warn("Error in get getBlogData",err)
		})
	}
	
};
*/

module.exports = apiHelpers;