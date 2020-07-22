import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import {connect} from 'react-redux';
import Separator from '../components/Separator';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';
import {finalDelete, addTask} from '../store/actions/taskActions';

function DoneScreen({tasks, finalDelete, addTask}) {

  const onPressDelete = (id) => {
    finalDelete(id)
  };

  const onPressRestore = (item) => {
    addTask(item)
    finalDelete(item.id)
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
  <TouchableOpacity onPress={() => onPressRestore(item)} style={styles.swipeRight}>
    <MaterialCommunityIcons
      name="backup-restore"
      color={colors.white}
      size={24}
    />
  </TouchableOpacity>

  return (
    <Screen>
        <View style={styles.container}>
          <Separator/>
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
    flex: 1,
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
    backgroundColor: colors.restore,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
});

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksDoneReducer
  }
}

export default connect(mapStateToProps, {finalDelete, addTask})(DoneScreen);