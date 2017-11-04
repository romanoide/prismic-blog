const React = require('react');
const PropTypes = React.PropTypes;
function puke (obj){
	return <pre>{JSON.stringify(obj,2,' ')}</pre>
}
function Test(props) {
	console.log("view")
	return (
			<div> Results {puke(props)}</div>
		)
	// body...
}



module.exports= Test