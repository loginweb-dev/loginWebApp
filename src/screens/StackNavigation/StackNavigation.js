
import React from 'react';
import { Button, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

// Configurations
import { Config } from '../../config/config.js';

// Views
import Login from '../Auth/Login/Login';
import Index from '../Index/Index';
import Details from '../Details/Details';

const Stack = createStackNavigator();

const Main = ({ navigation })=> {
//   render() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name="Index" component={Index}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft:10 }}>
                            <Icon name="bars" size={35} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => alert('Options')} style={{ marginRight:20 }}>
                            <Icon name="ellipsis-v" size={35} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
//   }
}

export default Main;
