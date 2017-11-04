const React = require ('react'),
ReactRouter = require('react-router'),
Link = ReactRouter.Link,
textManager= require('../utils/structuredTextManager')

function puke (obj){
	return <div className="code"><pre>{JSON.stringify(obj,2,' ')}</pre></div>
}

function Home(props){
	
	if(!props.contentIsLoading&&props.page){
		//console.log("1121212323123123123123",props.page)
		let image = props.page["home.image"].value.main.url,
		title= props.page["home.title"].value[0].text,
		subtitle=props.page["home.title"].value[1].text,
		content= textManager(props.page["home.contentgroup"].value,props.page["home.contentgroup"].type)
		//console.log("CONTENT", content)
		return(
				<div className="main-container" >
					<div className="home-main">
						<img src={image} className="home-main--image" />
						<div className="home-main--title-container">
							<h1 className="home-main--title">{title}</h1>
							<h2 className="home-main--title">{subtitle}</h2>
						</div>
					</div>
					<div className="content">
						{content}
					</div>
			
					
				</div>
			)
	}
	else
		return (<div>LOADING</div>)
}


module.exports= Home;