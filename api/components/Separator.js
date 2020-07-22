import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function Separator(props) {
  return (
    <View style={styles.container}/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 2,
    width: '100%'
  }
});

export default Separator;