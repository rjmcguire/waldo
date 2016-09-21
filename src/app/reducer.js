
export default function (state = {}, action) {
	let { response_key, question, message } = action;
	switch (action.type) {
		case "RECEIVE_MESSAGE":
			return {
				response_key, question, message
			}
	}
	return state;
}