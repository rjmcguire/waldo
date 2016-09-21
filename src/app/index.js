import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {store, socket} from 'app/store.js'
import Form from 'app/form.jsx!'

//TODO: Dispatch whatever the socket emits

ReactDOM.render(
	<Provider store={store}>
 		<Form />
 	</Provider>
 , document.getElementById('root'));