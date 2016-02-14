import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import Server from 'socket.io';
import path from 'path';
import http from 'http';
import session from 'express-session';
import iosession from 'express-socket.io-session';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import * as config from './webpack.config';
//import gameRoutes from './server/routes';
import gameManager from './server/routes';

// Get port/host
let host = 'localhost';
let port = 3002;

if( process.env.SERVERURL ){
 	let hostPieces = process.env.SERVERURL.split(':');
	host = hostPieces[0] || host;
	port = hostPieces[1] || port;
}

let compiler = webpack( config );
let app = express();
let httpServer = http.Server( app );
let serverSession = session({
	secret: 'test',
	resave: true
});

app.use( bodyParser.json() );
app.use( serverSession );
app.use( webpackDevMiddleware( compiler, {
	publicPath: config.output.publicPath
}));
app.use( webpackHotMiddleware( compiler ) );
app.use( '/', express.static( path.join( __dirname ) ) );

// Routes
let gameRouter = express.Router();
app.use( '/game', gameRouter );

// Start listening
let server = app.listen( port, host, function (err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log( 'server listening on %s:%s', host, port );
});

let socket = Server( server );
let socketSession = iosession( serverSession, {
	autoSave: true
});
socket.use( socketSession );
gameManager( gameRouter, socket, socketSession );
