//var app = document.getElementById("app");

const React = require('react'),
ReacDOM = require('react-dom'),
routes = require('./config/routes'),
fonts = require('./css/fonts.css'),
skeleton = require('./css/skeleton.css'),
style = require('./css/style.css'),
normalize = require('./css/normalize.css')


ReacDOM.render(
	routes,
	document.getElementById('app')
);