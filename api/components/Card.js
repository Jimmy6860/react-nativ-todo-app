import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function Card({title, description, priority}) {

    const renderRightActions = () => 
        <View style={styles.swipeRight}>

        </View>

  return (
      
    <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.container}>
            <View style={styles.priority}/>
            <View style={styles.details}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>
                {description}
                </Text>
            </View>
        </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopColor: 'red',
    borderRadius: 5,
    height: 80,
    margin: 10,
    width: '95%',
  },
  description: {
    color: colors.medium
  },
  details: {
    flex: 1,
    padding: 10
  },
  priority: {
      backgroundColor: 'red',
      height: 5,
      width: '100%'
  },
  swipeRight: {
    backgroundColor: colors.done,
    height: 50,
    width: 50,
  },
  title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5
  }
});

export default Card;