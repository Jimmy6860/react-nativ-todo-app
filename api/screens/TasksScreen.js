import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {connect} from 'react-redux';
import Screen from '../components/Screen';
import Card from '../components/Card';

function TasksScreen({tasks}) {
   
  return (
    <Screen>
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={tasks => tasks.id}
                style={styles.flatList}
                renderItem={({item}) => 
                    <Card
                        title={item.title}
                        description={item.description} 
                        time={item.time} 
                        priority={item.priority}
                    />
                }
            >
            </FlatList>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  flatList: {
    width: '100%'
  }
});

const mapStateToProps = (state) => {
    return {
        tasks: state.tasksReducer,
    }
};

export default connect(mapStateToProps)(TasksScreen);