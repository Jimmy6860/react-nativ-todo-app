import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {deleteTask, taskDone} from '../store/actions/taskActions';
import {connect} from "react-redux";

function Card({
  title, 
  description, 
  priority, 
  time, 
  renderLeftActions, 
  renderRightActions}) 
  {

  return (
    <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
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
    backgroundColor: colors.white,
    borderTopColor: 'red',
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
  swipeLeft: {
    backgroundColor: colors.delete,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
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

const mapStateToProps = (state) => {
  return {
    allTasks: state.tasksReducer
  }
};

export default connect(mapStateToProps, {deleteTask})(Card);