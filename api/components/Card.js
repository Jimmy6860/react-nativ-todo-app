import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function Card({title, description, priority, time}) {

    const renderRightActions = () => 
        <View style={styles.swipeRight}>

        </View>

  return (

    <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.container}>
            <View style={styles.details}>
              <View style={[styles.priority, {backgroundColor: colors[priority]}]}>
                <Text style={styles.text}>{priority}</Text>
              </View>
              <Text>{time}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>
                  {title}
                </Text>
                <Text style={styles.description}>
                  {description}
                </Text>
            </View>
        </View>
        <View style={styles.seperator}/>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'red',
    borderRadius: 5,
    height: 80,
    paddingHorizontal: 16,
    width: '100%',
  },
  description: {
    color: colors.grey
  },
  details: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: 6
  },
  info: {
    flex: 1,
  },
  priority: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    marginRight: 8,
    width: 70
  },
  seperator: {
    backgroundColor: colors.light,
    height: 2,
    width: '100%'
  },
  swipeRight: {
    backgroundColor: colors.done,
    width: 50,
  },
  text: {
    color: colors.white
  },
  title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5
  }
});

export default Card;