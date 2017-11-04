const React = require('react'),
Nav = require('../components/Nav'), 
navHelpers = require('../utils/navHelper');

const NavContainer = React.createClass({
	getInitialState:function(){
		return{
			isLoading: true,
			navLinks:{}
		}
	},
	componentDidMount: function(){
		//console.log("Test:  ","hi")
		navHelpers.getNavLinks()
		.then(api=>{
			//console.log("second",api)
			//Promise.all(api)

			this.setState({
				isLoading:false,
				navLinks:api
			})
		})
		.catch(error=>{
			console.log("ERROR",error)
			this.setState({
				isLoading:true,
				navLinks:{}
			})
		})

	},
	render:function(){
		//console.log("no more");
		return(
				<Nav isLoading={this.state.isLoading} links={this.state.navLinks}/>
			)
	}
})

module.exports = NavContainer