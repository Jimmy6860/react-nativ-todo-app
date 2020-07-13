import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';


const tasks = [
    {
        id: 1,
        title: 'Test123',
        description: 'Long story short time to tell.',
        priority: 'high'
    },
    {
        id: 2,
        title: 'Dummy1234',
        description: 'This is my dummy text.',
        priority: 'medium'
    },
    {
        id: 3,
        title: 'Test123',
        description: 'Long story short time to tell.',
        priority: 'high'
    },
    {
        id: 4,
        title: 'Test123',
        description: 'Long story short time to tell.',
        priority: 'high'
    },
    {
        id: 3,
        title: 'Test123',
        description: 'Long story short time to tell.',
        priority: 'high'
    },
    {
        id: 4,
        title: 'Test123',
        description: 'Long story short time to tell.',
        priority: 'high'
    },
    {
        id: 4,
        title: 'Test123',
        description: 'Long story short time to tell.',
        priority: 'high'
    },
    {
        id: 4,
        title: 'Test123',
        description: 'Long story short time to tell.',
        priority: 'high'
    },
    {
        id: 4,
        title: 'Test123',
        description: 'Long story short time to tell.',
        priority: 'high'
    },
    {
        id: 4,
        title: 'Test123',
        description: 'Long story short time to tell.',
        priority: 'high'
    },
]

function TasksScreen() {
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

export default TasksScreen;