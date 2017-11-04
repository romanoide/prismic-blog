const React = require('react'),
Home = require('../components/Home'),
About = require('../components/About')


function pages(props){
//console.log("Selector: ",props)
	let page={
		home:(<Home type={props.type} contentIsLoading={props.contentIsLoading} page={props.page}  />),
		about:(<About type={props.type} contentIsLoading={props.contentIsLoading} page={props.page}  />),
		default:(<Home type={props.type} contentIsLoading={props.contentIsLoading} page={props.page}  />),
	}

	return (page[props.type]||page['default']);

}

function pageTypeSelection(props){
	return pages(props)
}

module.exports= pageTypeSelection;