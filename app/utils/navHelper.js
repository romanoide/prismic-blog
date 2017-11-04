const primsicApi=require('./prismicHelper')

function navLinksHelper(api){
	return api.getByID('WNFoux8AAAlWozoX').then(getLinksIds)
}

function getLinksIds(doc){
	console.log(doc)
	return doc.data['nav.links'].value.map(element=>{

		if (element.navlink.type==="Link.web")
			return {ref:element.navlink.value.url,
				    name:element.linktitle.value[0].text}
		else
			return {ref:element.navlink.value.document.type,
					name:element.linktitle.value[0].text}
	})
}

function isUrl(s) {
   const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
   return regexp.test(s)
}

const navHelpers ={
	getNavLinks: function(){
		return primsicApi.apiConection().then(navLinksHelper)
		
	},
	isExternal: function(link){
		return isUrl(link)
	}

};
module.exports = navHelpers;

//Fixing api calls, the fun way
// function getLinksInfo(doc){
// 	return Promise.all(
// 		doc.data['nav.links'].value.map(function(element){
// 			return api.getByID(element.navlink.value.document.id);
// 		})).then(parseLinksInfo)
// }
