const primsicApi=require('./prismicHelper'),
Prismic = require('prismic.io') 


function linkResolver(doc) {
  // Pretty URLs for known types
  if (doc.type === 'blog') return "/post/" + doc.uid;
  if (doc.type === 'page') return "/" + doc.uid;
  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.id;
}


function pageContentHelper(api,type){
	//console.log("PAGE HELPER",api)
	return api.getSingle(type).then(parsePageContent);
}

function parsePageContent(page){
	//console.log("PAGE HELPER STUFF",page);
	//if (page.data["home.content"])
	//console.log("final test",prismicDom.RichText.asHtml(page.data["home.content"],linkResolver))
	return page.data;
}

const pageHelpers ={

	getPageContent: type=>{
		
		let pageType=type||"home"
		
		return primsicApi.apiConection().then(api => pageContentHelper(api,pageType))
	}

};
module.exports = pageHelpers;