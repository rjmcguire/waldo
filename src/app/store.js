import { applyMiddleware, compose, createStore } from 'redux';
import dev_tools from './dev_tools.js'
import middleware from './middleware.js'
import reducer from './reducer.js'
import io from 'socket.io-client'

// TODO: connect to our socket server
export const socket = () => 'replace this function with a socket.io connection to our socket server';

export const store = compose(
	applyMiddleware(middleware(socket)),
	window.devToolsExtension ? window.devToolsExtension() : dev_tools.instrument()
)(createStore)(reducer, {});