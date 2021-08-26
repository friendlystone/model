import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import HomeScreenSecond from './components/HomeScreenSecond';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen
                name = "HomeScreenSecond" 
                component = { HomeScreenSecond }
                options = {{
                  headerShown: false
                }}
            />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

