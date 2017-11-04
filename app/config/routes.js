const React = require('react'),
ReactRouter = require('react-router'),
Router = ReactRouter.Router,
Route = ReactRouter.Route,
IndexRoute = ReactRouter.IndexRoute,
hashHistory = ReactRouter.hashHistory,
browserHistory = ReactRouter.browserHistory,
Main = require('../components/Main'),
Home = require('../components/Home'),
PageContainer = require('../containers/PageContainer');

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component = {PageContainer} />
			<Route path="/:type" component={PageContainer} />		
		</Route>
	</Router>
);

module.exports=routes;