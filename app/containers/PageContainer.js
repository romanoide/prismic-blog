const React = require('react'),
Home = require('../components/Home'), 
pageHelpers = require('../utils/pageHelper'),
pageSelector = require('./PageTypeSelection')


const PageContainer = React.createClass({
	getInitialState:function(){
		//console.log("PAGE GIS")
		return{
			contentIsLoading: true,
			type:this.props.params.type,
			page:{}
		}
	},
	componentDidMount: function(){
		//console.log("PAGE CDM","this")
		pageHelpers.getPageContent(this.props.params.type)
		.then(page=>{
			//console.log("PAGE THEN",page)
			//Promise.all(api)
			this.setState({
				contentIsLoading:false,
				type:this.props.params.type,
				page:page
			})
		})
		.catch(error=>{
			console.log("ERROR",error)
			this.setState({
				contentIsLoading:true,
				type:this.props.params.type,
				page:{}
			})
		})
	},
	render:function(){
		//console.log("PAGE RENDER",this.state.type);
		return(
				pageSelector(this.state)
			)
	},
	componentWillUnmount:function(){
		//console.log("unmounting")
	},
	componentWillReceiveProps:function(nextProps){
		this.setState({
				contentIsLoading:true,
				type:nextProps.params.type,
				page:{}
			});
		pageHelpers.getPageContent(nextProps.params.type)
		.then(page=>{
			//console.log("PAGE THEN 2",page)
			//Promise.all(api)
			this.setState({
				contentIsLoading:false,
				type:this.props.params.type,
				page:page
			})
		})
	}
})

module.exports = PageContainer