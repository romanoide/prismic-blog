const React = require('react'),
HomeButton = require('../components/HomeButton'),
NavList = require('../components/NavList'); 

function puke (obj){
	return <pre>{JSON.stringify(obj,2,' ')}</pre>
}

function Nav(props){
	if(!props.isLoading)
	return(

				<div className="nav-container">
					<HomeButton />
					<NavList links={props.links}/>

				</div>
			)
	else
		
		return(<div>LOADING</div>)
	
}

module.exports=Nav;