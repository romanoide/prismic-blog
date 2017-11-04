var React = require('react')
var Test = require('../components/Test')
var prismicHelpers = require('../utils/prismicHelper')

var TestContainer = React.createClass({
	getInitialState:function(){
		return{
			isLoading: true,
			blogInfo:""
		}
	},
	componentDidMount: function(){
		console.log("Test:  ","hi")
		prismicHelpers.getNavLinks()
		.then(api=>{
			console.log("second",api)
			this.setState({
				isLoading:false,
				blogInfo:api
			})
		})
	},
	render:function(){
		console.log("no more");
		return(
			<Test isLoading={this.state.isLoading} blogInfo={this.state.blogInfo}/>
		)
	}
})

module.exports = TestContainer