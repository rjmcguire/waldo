/**
 * Middleware to emit dispatched 'SEND_ANSWER' actions to a socket server.
 *
 * @param socket socket.io connection
 */
export default socket => store => next => action => {
	if (action.type != "SEND_ANSWER") {
		return next(action);
	}
	socket.emit('answer', action);
}