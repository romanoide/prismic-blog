const reactStringReplace = require('react-string-replace')
String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function toHtml(content,linkHandler){

	let spanUrl="",
	spanPlaceholder="",
	insertedLine = "",
	spanContent="",
	span ={},
	y=0 ,
	text = content.text,
	arr=content.spans.map(span=>JSON.parse(JSON.stringify(span)))

	for(let i = 0; i<arr.length;i++){
		span=arr[i]
		spanContent= text.slice(span.start,span.end)
		spanUrl=""
		if(span.data&&span.data.type=="Link.web"){
			spanUrl= span.data.value.url
		}else if(span.data&&span.data.type=="Link.document"){
			if(linkHandler)
				spanUrl=linkHandler(span.data.value)
			else
				spanUrl="/"
		}
		text=text.splice(span.start,0,span.type) //put a marker at the beginning of the span on the currente text chunk
		text=text.splice(span.end+span.type.length,0,span.type)//put a marker at the end of the span
		spanPlaceholder=text.slice(span.start,span.end+(span.type.length*2))
		insertedLine=spanTypeSelector(span.type,spanContent,1000+i,spanUrl)
		y = 1
		
		while(arr[i+y]){

			let next = arr[i+y],
			current = arr[i]
			

			if(next.start < current.start  &&  next.end < current.start){
				//do nothing, the next insertion is before the current one
			}else if(next.start > current.start  &&  next.end < current.end){
				//is nested, the next insertion is nested in the current one
				arr[i+y].start=next.start+insertedLine[0].length
				arr[i+y].end=next.end+insertedLine[0].length
			}else if(next.start < current.start  &&  (next.end < current.end  &&  next.end > current.start) ){
				//semi nested, the next insertion starts before the current one but ends first
				arr[i+y].end=next.end+insertedLine[0].length
			}else if (( (next.start > current.start)  &&  (next.start < current.end) )  &&  (next.end > current.end) ){
				//semi nested, the next insertion starts before the current one ends, but ends after 
				arr[i+y].start=next.start+insertedLine[0].length
				arr[i+y].end=next.end+insertedLine[0].length+insertedLine[2].length
			}else if(next.start > current.end){
				//the next insertion is after the current one
				arr[i+y].start=next.start+insertedLine[0].length+insertedLine[2].length
				arr[i+y].end=next.end+insertedLine[0].length+insertedLine[2].length
			}else if (next.start < current.start  &&  next.end > current.end){
				//the next insertion starts before the begining of the current one, but ends after the ending
				arr[i+y].end=next.end+insertedLine[0].length+insertedLine[2].length
			}else if (next.start === current.start  &&  next.end < current.end){
				//the start of the current and next insertion are in the same position but the ending of the next insertion comes first
				arr[i+y].end=next.end+insertedLine[0].length
			}else if(next.start === current.end){
				//the start of the next insertion is in the same position with the end of the current one
				arr[i+y].start=next.start+insertedLine[0].length+insertedLine[2].length
				arr[i+y].end=next.end+insertedLine[0].length+insertedLine[2].length
			}else if(next.start === current.start  &&  next.end > current.end){
				//...
				arr[i+y].end=next.end+insertedLine[0].length+insertedLine[2].length
			}else if(next.start < current.start  &&  next.end === current.end){
				//...
				arr[i+y].end=next.end+insertedLine[0].length+insertedLine[2].length
			}else if((next.start > current.start  &&  next.start < current.end)  &&  next.end === current.end){
				//...
				arr[i+y].start=next.start+insertedLine[0].length
				arr[i+y].end=next.end+insertedLine[0].length
			}
			else if(next.start === current.start  &&  next.end === current.end){
				//...
				arr[i+y].end=next.end+insertedLine[0].length+insertedLine[2].length
			}
			y=y+1
		}

		text= text.replace(spanPlaceholder,insertedLine.join(""))
	}
	return text;
}

function spanTypeSelector(type,spanText,key,link){
	let tkey=key+100
	let types={
		"strong":["<strong key='"+tkey+"str' className='strong'>",spanText,"</strong>"],
		"em":["<em key='"+tkey+"str' className='em'>",spanText,"</em>"],
		"hyperlink":["<a  key='"+tkey+"a' href="+link+">",spanText,"</a>"],
		"default":["<span  key='"+tkey+"dspn'>",spanText,"</span>"]
	}

	return (types[type]||types.default)

}

let prismicParagraphFormatter={
	toHtml:toHtml
}
module.exports=prismicParagraphFormatter