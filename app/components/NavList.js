const React = require('react'),
NavListElement = require('../components/NavListElement'),
ReactRouter = require('react-router'),
withRouter = ReactRouter.withRouter;

function currentPage(){
	//console.log("hash hash hash",location.pathname.split("/")[1])
	let currentLocation=location.pathname.split("/")[1]||'home'
	return currentLocation;
}

function NavList(props){
	
	const current=currentPage();
	const links= props.links.map((link,i)=>{
		if(current===link.ref){
			return <NavListElement isActive="navElement--active" key={i} link={link.ref} linkName={link.name} />
		}
		else{
			return <NavListElement isActive="" key={i} link={link.ref} linkName={link.name} />
		}
	})
	
	return(
				<ul className="nav">
					{links}
				</ul>
			)
}

module.exports=withRouter(NavList);