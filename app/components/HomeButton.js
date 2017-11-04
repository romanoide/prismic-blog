const React = require ('react'),
ReactRouter = require('react-router'),
Link = ReactRouter.Link,

HomeButton = React.createClass({
	render:function(){
		return(
				<div className="home-button">
					<Link to="/">
						<div className="home-button--link">
							<span>
								ROMÁN
							</span>
							<br />
							<span>
								GARCÍA								
							</span>
						</div>
								
					</Link>
				</div>
			)
	}
});

module.exports= HomeButton;