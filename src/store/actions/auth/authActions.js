import * as types from '../actionTypes';
import { LOG_IN, SIGN_UP } from '../../../https/endpoints';
import axios from 'axios';

export const logIn = (navigation, email, password) => dispatch => {
	// Api call logic
	axios.post(LOG_IN, 
	{ 
		email,
		password 
	}
	).then(function(response) {
		if (response.status >= 200 && response.status <= 300) {
			console.log('login success')
			navigation.navigate("Dashboard");
			return response;
		}
		throw new TypeError("Oops, login error");
	}).catch(function(error) {
		console.log('login error', error)
		return error;
	});

	console.log('axios', email, password);
};

export const signUp = (navigation, email, password) => dispatch => {
  // Api call logic
  axios.post(SIGN_UP, 
	{
		email: email, 
		password: password
	  }
	).then(function(response) {
		if (response.status >= 200 && response.status <= 300) {
			console.log('registration success')
			navigation.navigate("Dashboard");
			return response;
		}
		throw new TypeError("Oops, registration error");
	}).catch(function(error) {
	  console.log('Error on Registration');
	  console.log(error);
	});

	console.log('axios', email, password);
  
	  return {
		  type: types.REGISTER_USER,
		  payload: 'register'
	  };
};
