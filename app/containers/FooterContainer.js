const React = require('react'),
Footer = require('../components/Footer'),
footerHelper = require('../utils/footerHelper')

const FooterContainer = React.createClass({
	getInitialState:function(){
		return{
			content:"",
			isLoading: true
		}
	},
	componentDidMount: function(){
		//console.log("Test:  ","hi")
		//console.log("hiiiiiii",footerHelper.getFooter())
		footerHelper.getFooter().
		then(footerContent=>{
			this.setState({
				content:footerContent,
				isLoading:false
			})
		})
		.catch(error=>{
			console.log("ERROR",error)
			this.setState({
				content:"",
				isLoading:true
			})
		})
		
	},
	render:function(){
		//console.log("no more");
		return(
				<Footer isLoading={this.state.isLoading} content={this.state.content}/>
			)
	}
})

module.exports = FooterContainer