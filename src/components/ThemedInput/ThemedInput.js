import React from "react";
import { TextInput } from "react-native";
import styles from "./style";

const ThemedInput = ({ onChangeText, value, secureTextEntry, name}) => {
  return (
    <TextInput
      style={styles.loginForm}
      onChangeText={onChangeText}
      value={value}
	  secureTextEntry={secureTextEntry}
	  name={name}
    />
  );
};

export default ThemedInput;
