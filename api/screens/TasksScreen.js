import React, {useState} from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Modal, Button} from 'react-native';
import {connect} from 'react-redux';
import {deleteTask, taskDone} from '../store/actions/taskActions';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import LottieView from "lottie-react-native";
import ModalForm from '../components/ModalForm';


function TasksScreen({tasks, deleteTask, taskDone}) {

  const onPressDelete = (id) => {
    deleteTask(id)
  };

  const onPressDone = (item) => {
    taskDone(item)
    deleteTask(item.id)
  };

  const renderLeftActions = (id) =>
    <TouchableOpacity onPress={() => onPressDelete(id)} style={styles.swipeLeft}>
      <MaterialCommunityIcons
        name="delete-empty"
        color={colors.white}
        size={24}
      />
    </TouchableOpacity>

  const renderRightActions = (item) => 
    <TouchableOpacity onPress={() => onPressDone(item)} style={styles.swipeRight}>
      <MaterialCommunityIcons
        name="check"
        color={colors.white}
        size={24}
      />
    </TouchableOpacity>
   
  return (
    <Screen>
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={tasks => tasks.id}
                style={styles.flatList}
                renderItem={({item}) => 
                  <View>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                      <Card
                          key={item.id}
                          title={item.title}
                          description={item.description} 
                          time={item.time} 
                          priority={item.priority}
                          id={item.id}
                          renderLeftActions={() => renderLeftActions(item.id)}
                          renderRightActions={() => renderRightActions(item)}
                          item={item}
                      />
                    </TouchableOpacity>
                  </View>
                }
            />
        </View>
          {
            tasks.length > 0 ? null :
            <View style={styles.animationContainer}>
              <Text>Add a new task</Text>
              <LottieView
                      autoPlay
                      loop={true}
                      source={require('../../assets/arow.json')}
                      />
            </View>
          }
    </Screen>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1
  },
  flatList: {
    width: '100%'
  },
  swipeLeft: {
    backgroundColor: colors.delete,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  swipeRight: {
    backgroundColor: colors.done,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
});

const mapStateToProps = (state) => {
    return {
        tasks: state.tasksReducer,
    }
};

export default connect(mapStateToProps, {deleteTask, taskDone})(TasksScreen);