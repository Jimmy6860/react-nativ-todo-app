import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';

function AppTextInput({style, width='100%', ...otherProps}) {
  return (
    <TextInput 
        style={[styles.container, style, {width}]}
        {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  container: {
      borderColor: colors.grey,
      borderRadius: 20,
      borderWidth: 0.5,
      height: 40,
      padding: 10,
  }
});

export default AppTextInput;