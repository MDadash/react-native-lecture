import React from 'react';
import { ScrollView, Text, AsyncStorage } from 'react-native';
import { ThemedButton } from '../../components/index';

const Dashboard = ({ navigation }) => {

	_deleteData = async () => {
		try {
		  await AsyncStorage.removeItem('access_token');
		  console.log( AsyncStorage.getItem('access_token'));
		  navigation.navigate("Login")
		} catch (error) {
			console.log( error );
		}
	  };
	  console.log( AsyncStorage.getItem('dash'));
	  console.log( AsyncStorage.getItem('access_token'));

	//   _retrieveData = async () => {
	// 	try {
	// 	  const value = await AsyncStorage.getItem('access_token');
	// 	  valueglobal = value;
	// 	} catch (error) {
	// 		console.log( error );
	// 	}
	//   };

  return (
    <ScrollView>
      <Text>Dashboard</Text>
	  
	  <ThemedButton title="Logout"
        onPress={() =>  _deleteData() } />
    </ScrollView>
  );
};

Dashboard.navigationOptions = {
  title: 'Dashboard'
};

export default Dashboard;
