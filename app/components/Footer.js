const React = require('react'); 


function Footer(props){
	if(!props.isLoading)
		return(
			<div className="footer">
				<div className="footer-content">
					 {props.content} 
					 <span>
					 	<a className="instagram" href="https://www.instagram.com/">
					 	</a>
					 	<a className="twitter" href="https://twitter.com/">
					 	</a>
					 	<a className="github" href="https://github.com/">
					 	</a>
					 </span>
				</div>
			</div>
		)
	else
		
		return(<div>LOADING</div>)
	
}

module.exports=Footer;