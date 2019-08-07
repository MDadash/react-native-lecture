import React, { useState } from "react";
import { ScrollView, View, Text, AsyncStorage } from "react-native";
import { ThemedInput, ThemedButton } from "../../components";
import * as yup from 'yup';
import { Formik } from 'formik'
import { connect } from 'react-redux';
import { logIn, signUp } from '../../store/actions/auth/authActions';

const Login = ({ navigation, login, signup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let valueglobal;

//   _storeData = async () => {
// 	try {
// 		console.log( 'LP - SetFunc - before');
// 		console.log( AsyncStorage.getItem('access_token'));
// 	  await AsyncStorage.setItem('access_token', 'login' );
// 	  console.log( 'LP - SetFunc - after');
// 	  console.log( AsyncStorage.getItem('access_token'));
// 	} catch (error) {
// 		console.log( error );
// 	  // Error saving data
// 	}
//   };

  _retrieveData = async () => {
	try {
	  const value = await AsyncStorage.getItem('access_token');
	  valueglobal = value;
	  console.log('getvalue LP');
	  console.log( value );
	} catch (error) {
		console.log( error );
	}
  };

  console.log(email, password);   

  if (valueglobal === null ) {
	  return ( navigation.navigate("Dashboard") );
	
  } else {

	return (
		<ScrollView>
			<Text>Login</Text>
			
			<Formik 
				initialValues={{ email: '', password: '' }}
				// initialValues={...}
				onSubmit={values => Alert.alert(JSON.stringify(values))}
				validationSchema={
				yup.object().shape({
					email: yup
						.string()
						.email()
						.required(),
					password: yup
						.string()
						.min(6)
						.required(),
				})}
			>
			{({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
				 <View>
				<ThemedInput 
					value={values.email} 
					onChangeText={handleChange('email')} 
					placeholder="E-mail"
					// onBlur={() => setFieldTouched('email')}
				/>
				{/*touched.email &&*/ errors.email &&
					<Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
				}  

				<ThemedInput
					value={values.password}
					onChangeText={handleChange('password')}
					placeholder="Password"
					secureTextEntry
					// onBlur={() => setFieldTouched('password')}
				/>
				{/*touched.email && */errors.password &&
					<Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
				} 

				<Text>{JSON.stringify(values)}</Text>

				<ThemedButton
					title="Login"
					disabled={!isValid}
					onPress={() => { handleSubmit; login(navigation, email, password); }}
				/>
				<ThemedButton
					title="Sign Up"
					disabled={!isValid}
					onPress={() => { handleSubmit; signup(navigation, email, password); }}
				/>
				</View>
				)}        
			</Formik>
		</ScrollView>
	);
  }
};



Login.navigationOptions = {
  title: "Login"
};

const mapDispatchToProps = (dispatch) => {
    return {
		login: (navigation, email, password) => dispatch( logIn( navigation, email, password)),
		signup: (navigation, email, password) => dispatch( signUp(navigation, email, password))
    }
}

export default connect(null, mapDispatchToProps)(Login);
// export default Login;
