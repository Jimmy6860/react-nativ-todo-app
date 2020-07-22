import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import {connect} from 'react-redux';
import Separator from '../components/Separator';

function DoneScreen({tasks}) {
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
});

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksDoneReducer
  }
}

export default connect(mapStateToProps)(DoneScreen);