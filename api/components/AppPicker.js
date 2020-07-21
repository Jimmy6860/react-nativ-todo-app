import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import colors from "../config/colors";

function AppPicker({items}) {
  return (
    <View style={styles.container}>
        <DropDownPicker
            items={[
                {label: 'Item 1', value: 'item1'},
                {label: 'Item 2', value: 'item2'},
            ]}
            defaultIndex={0}
            containerStyle={{height: 40}}
            onChangeItem={item => console.log(item.label, item.value)}
            style={[styles.picker]}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      zIndex: 10,
  },
  picker: {
    borderColor: colors.grey,
    borderWidth: 0.5,
    zIndex: 20,
  }
});

export default AppPicker;