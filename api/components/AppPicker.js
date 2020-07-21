import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import colors from "../config/colors";

function AppPicker({items, pickElement}) {
    const handleOnChange = (item) => {
        pickElement(item)
    };

  return (
    <View style={styles.container}>
        <DropDownPicker
            items={items}
            defaultIndex={0}
            containerStyle={{height: 40}}
            onChangeItem={item => item}
            style={[styles.picker]}
            placeholder='Priority'
        />
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
      zIndex: 10,
  },
  picker: {
    borderColor: colors.grey,
    borderWidth: 0.5,
    zIndex: 20,
  }
});

export default AppPicker;