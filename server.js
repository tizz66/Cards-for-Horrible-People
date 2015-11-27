import express from 'express';
import webpack from 'webpack';
import socketio from 'socket.io';
import path from 'path';
import http from 'http';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import * as config from './webpack.config'; 
import gameRoutes from './server/routes/gameRoutes';

let compiler = webpack( config );
let port = 3002;
let app = express();
let httpServer = http.Server( app );

app.use( webpackDevMiddleware( compiler, {
	publicPath: config.output.publicPath
} ) );
app.use( webpackHotMiddleware( compiler ) );
app.use( '/', express.static( path.join( __dirname ) ) );

// Routes
let gameRouter = express.Router();
gameRoutes( gameRouter );
app.use( '/game', gameRouter );

// Start listening
let server = app.listen( port, 'localhost', function (err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log( 'server listening on port: %s', port );
});



let socket = socketio( server );