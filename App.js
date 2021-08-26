import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { 
  Image,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import { Header } from 'react-native-elements';
import HomeScreen from './components/HomeScreen';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {

  render() {

    return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen
                name = "HomeScreen" 
                component = {HomeScreen}
                options = {{
                  headerShown: false
                }}
            />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

