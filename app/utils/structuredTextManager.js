const React =require('react'),
HtmlToReactParser = require('html-to-react').Parser,
prismicFormatter= require('./prismicRichTextConverter')
let types ={},
htmlToReactParser = new HtmlToReactParser()



let key=0;
function textFormat(content,index){
	//console.log(content)
	key++;
	let text = content.text
	//console.log(prismicDom.RichText.asHtml(container,doc=>"/"))
	if(content.spans&&content.spans.length>0){
		//console.log("this is a paragraph",content)
		text = htmlToReactParser.parse(prismicFormatter.toHtml(content,linkValue=>{
			// linkValue.isBroken:bool
			// linkValue.document:{
			// 	id:string
			// 	lang:string
			// 	slug:string
			// 	tags:array
			// 	type:string
			// 	uid:string
			// }
			//console.log("hey",linkValue)
			return linkValue.document.type;

		}))
	}else{
		//console.log("this is not a paragraph",content)
	}
	let types={
		"heading1":(<h1 key={key+content.type}>{text}</h1>),
		"heading2":(<h2 key={key+content.type}>{text}</h2>),
		"heading3":(<h3 key={key+content.type}>{text}</h3>),
		"heading4":(<h4 key={key+content.type}>{text}</h4>),
		"heading5":(<h5 key={key+content.type}>{text}</h5>),
		"paragraph":(<p key={key+content.type}>{text}</p>),
		"default":(<span>{text}</span>)
	}
	return(types[content.type]||types['default'])
}

function groupFormat(groupElement, index){
	let key = "100"+index
	let groupContent=groupElement.content.value.map(textFormat);
	return (<div key={key}>{groupContent} </div>)
}

function extractText(content, contentType) {
	//console.log(content)
		if (contentType==="Group"){
			return(
				content.map(groupFormat)
			)
		}
		else{
			return(
				content.map(textFormat)
			)
		}
}

module.exports= extractText;