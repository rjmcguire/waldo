import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {store, socket} from './store.js'
import Form from './form.js'

//TODO: Dispatch whatever the socket emits

ReactDOM.render(
	<Provider store={store}>
 		<Form />
 	</Provider>
 , document.getElementById('root'));