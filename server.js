import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import Server from 'socket.io';
import path from 'path';
import http from 'http';
import session from 'express-session';
import iosession from 'socket.io-express-session';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import * as config from './webpack.config'; 
//import gameRoutes from './server/routes';
import gameManager from './server/routes';

let compiler = webpack( config );
let port = 3002;
let app = express();
let httpServer = http.Server( app );
let serverSession = session({
	secret: 'test'
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
let server = app.listen( port, 'localhost', function (err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log( 'server listening on port: %s', port );
});

let socket = Server( server );
socket.use( iosession( serverSession ) );
gameManager( gameRouter, socket );