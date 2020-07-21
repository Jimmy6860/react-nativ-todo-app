import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deleteTask, taskDone} from '../store/actions/taskActions';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

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
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description} 
                        time={item.time} 
                        priority={item.priority}
                        id={item.id}
                        renderLeftActions={() => renderLeftActions(item.id)}
                        renderRightActions={() => renderRightActions(item)}
                    />
                }
            />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
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