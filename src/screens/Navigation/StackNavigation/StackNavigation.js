
import React, { Component } from 'react';
import { Button, TouchableOpacity, Text, View, AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

// Configurations
import { Config } from '../../../config/config.js';

// Views
import SplashScreen from '../../SplashScreen/SplashScreen';
import Login from '../../Auth/Login/Login';
import Index from '../../Index/Index';
import Details from '../../Details/Details';

// Screens System config
import Update from '../../System/Update/Update';
import { concat } from 'react-native-reanimated';

const Stack = createStackNavigator();

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          isLoggedIn: false
        }
        this.bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    bootstrapAsync = async () => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        setTimeout(()=>{
            this.setState({
                isLoggedIn: isLoggedIn == '1' ? true : false,
                isLoading: false
            });
        }, 2500);
    };

    render() {
        if(this.state.isLoading){
            return(<SplashScreen />);
        }
        return (
            <Stack.Navigator initialRouteName={ this.state.isLoggedIn ? 'Index' : 'Login' }>
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
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{ marginLeft:10 }}>
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

                {/* Screens System config */}
                <Stack.Screen name="Update" component={Update} />
            </Stack.Navigator>
        );
    }
}

export default Main;
