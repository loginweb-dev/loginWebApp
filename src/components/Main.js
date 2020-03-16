
import React, { Component } from 'react';
import {
  AsyncStorage, Text
} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';

// Configurations
import { Config } from '../config/config.js';

// Views
import Login from '../screens/Auth/Login/Login';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
// import TabNavigation from '../screens/TabNavigation/TabNavigation';
import StackNavigation from '../screens/StackNavigation/StackNavigation';
import DrawerMenu from '../screens/DrawerMenu/DrawerMenu';

const DrawerNavigator = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView >
      <DrawerMenu />
    </DrawerContentScrollView>
  );
}

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        userToken: null
      }
      this.bootstrapAsync();
  }

  
  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      setTimeout(()=>{
        this.setState({
          userToken: 1,
          isLoading: false
        });
      }, 2500);
  };
  

  // Render any loading content that you like here
  render() {
    if (this.state.isLoading) {
      // We haven't finished checking for the token yet
      return <SplashScreen />;
    }
    
    return (
      <DrawerNavigator.Navigator
        drawerContent={props => CustomDrawerContent(props)}
        initialRouteName="Home"
      >
        <DrawerNavigator.Screen name="Home" component={StackNavigation} />
      </DrawerNavigator.Navigator>
    );
  }
}

export default Main;
