import React, { Component } from 'react';
import { 
    View, 
    Image, 
    Dimensions,
    StyleSheet 
} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Login from '../drawer/Login';
import Profile from '../drawer/Profile';
import Setting from '../drawer/Setting';
import MainTabNavigation from './MainTabNavigation';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
    <View style={styles.sideBarContainer}>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/icons/main-logo.png')}
          style={{ width: SCREEN_WIDTH * 0.3 }}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 3, marginLeft: 10 }}>
        <DrawerItems {...props} />
      </View>
    </View>
  );
  
  const SideBar = DrawerNavigator(
    {
      Main: {
        path: '/MainTabNavigation',
        screen: MainTabNavigation
      },
      Profile: {
        path: '/Profile',
        screen: Profile,
      },
      Settings: {
        path: '/Setting',
        screen: Setting,
      },
      Login: {
        path: '/Login',
        screen: Login,
      },
    },
    {
      initialRouteName: 'Login',
      contentOptions: {
        activeTintColor: '#548ff7',
        activeBackgroundColor: 'transparent',
        inactiveTintColor: '#ffffff',
        inactiveBackgroundColor: 'transparent',
        labelStyle: {
          fontSize: 15,
          marginLeft: 0,
        },
      },
      drawerWidth: SCREEN_WIDTH * 0.5,
      contentComponent: CustomDrawerContentComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
    }
  );

  export default class SideBarNavigation extends Component{
    render(){
        return(
            <SideBar/>
        )
    }
  }

  const styles = StyleSheet.create({
    sideBarContainer:{
      flex: 1, 
      backgroundColor: '#43484d', 
      alignItems: 'flex-start'
    },
    logo:{
      flex:1, 
      marginTop: 40, 
      marginLeft: 25,
      justifyContent: 'center', 
      alignItems: 'flex-end'
    }
  })