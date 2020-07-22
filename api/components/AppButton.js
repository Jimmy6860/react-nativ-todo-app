import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../config/colors';

function AppButton({color, text, onPress, width= '100%'}) {
  return (
    <TouchableOpacity 
            style={[styles.container, {backgroundColor: colors[color], width}]}
            onPress={onPress}
        >
        <Text style={styles.text}>
            {text}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default AppButton;