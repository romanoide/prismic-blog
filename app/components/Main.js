const React = require('react'),
//var Nav = require('../components/Nav');
NavContainer = require('../containers/NavContainer'),
FooterContainer = require('../containers/FooterContainer'),
Main = React.createClass({	
	render:function(props){
		
		return(

				<div>
				<NavContainer />
					{this.props.children}
				<FooterContainer />
				</div>
			)
	}
})
module.exports=Main;