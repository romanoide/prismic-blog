const React = require('react'), 
ReactRouter = require('react-router'),
navHelpers = require('../utils/navHelper'),
Link = ReactRouter.Link;

//http://nomorehumans.org/tagged/photography
//http://nomorehumans.org/tagged/blog
function NavListElement(props){
	//console.log("no interpol", props)
	if (navHelpers.isExternal(props.link))
		return(
			<li className="navElement">
			 	<a href={props.link} target="_blank">
			 		{props.linkName}
			 	</a>
			</li>
		)
		return(
			<li className={`navElement ${props.isActive}`}>
			 	<Link to={props.link}>
			 		{props.linkName}
			 	</Link>
			</li>
		)
}

module.exports=NavListElement;