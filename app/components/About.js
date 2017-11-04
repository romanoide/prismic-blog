const React = require ('react'),
ReactRouter = require('react-router'),
Link = ReactRouter.Link,
textManager= require('../utils/structuredTextManager')

function About(props){
	if(!props.contentIsLoading){
		let title = props.page["about.title"].value[0].text,
		content = props.page["about.contenido"].value

		content=textManager(content)
		return(

			<div className="main-container content">
				<h1>{title}</h1>
				<div >{content}</div>
			</div>
		)
	}
	else
		return <div>LOADING</div>
}

module.exports= About;