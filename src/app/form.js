import React from 'react'
import {connect} from 'react-redux'
import { sendAnswer } from './actions.js'

class FormComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { answer : '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleForm = this.handleForm.bind(this);
	}

	componentWillReceiveProps() {
		this.setState({ answer : '' })
	}

	handleForm(e) {
		e.preventDefault();
		// TODO: call sendAnswer
	}

	handleChange(e) {
		this.setState({ response_key : e.target.name, answer : e.target.value });
	}

	render() {
		return this.props.message ? <form onSubmit={this.handleForm} className="form">
			<h1>{this.props.message}</h1>
			{this.props.question ? <fieldset>
				<label>{this.props.question}</label>
				<input type="text" onChange={this.handleChange} name={this.props.response_key} value={this.state.answer}/>
				<button>Send</button>
			</fieldset> : null}
		</form> : <h1>Check the readme to connect to our socket server</h1>
	}
}
FormComponent.defaultProps = {
	response_key : '',
	question : '',
	message : ''
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	let { response_key, question, message } = stateProps;
	return {
		response_key,
		question,
		message,
		...dispatchProps
	}
};

export default connect(
	state => state,
	{ sendAnswer },
	mergeProps
)(FormComponent)