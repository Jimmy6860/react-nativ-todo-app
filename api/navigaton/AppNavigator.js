import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Provider} from 'react-redux';
import TasksScreen from "../screens/TasksScreen";
import AddScreen from "../screens/AddScreen";
import DoneScreen from "../screens/DoneScreen";
import NavigationTheme from './NavigationTheme';
import AddButton from './AddButton';
import store from '../store/index';

const Tab = createBottomTabNavigator();

function AppNavigator() {

    return (
        <Provider store={store}>
        <NavigationContainer theme={NavigationTheme}>
            <Tab.Navigator>
                <Tab.Screen
                    name='Tasks'
                    component={TasksScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="pencil" color={color} size={size} />
                        ),
                      }}
                />
                <Tab.Screen
                    name='Add'
                    component={AddScreen}
                    options={({ navigation }) => ({
                        tabBarButton: () => (
                            <AddButton
                            onPress={() => navigation.navigate({name: 'Add'})}
                          />
                        )
                      })}
                />
                <Tab.Screen
                    name='Done'
                    component={DoneScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="check-bold" color={color} size={size} />
                        ),
                      }}
                />
            </Tab.Navigator>
        </NavigationContainer>
        </Provider>
    );
};

export default AppNavigator;