import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MapTab from '../tabs/Map';
import DashboadTab from '../tabs/Dashboard';
import GiveAwayTab from '../tabs/GiveAway';


const MainTabNavigation = TabNavigator(
  {
    Dashboad: {
      screen: DashboadTab,
      path: '/Dashboad',
      navigationOptions: {
        tabBarLabel: 'Dashboad',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    Map: {
      screen: MapTab,
      path: '/Map',
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='map'
            size={30}
            type="entypo"
            color={tintColor}
          />
        ),
      },
    },
    GiveAway: {
      screen: GiveAwayTab,
      path: '/GiveAway',
      navigationOptions: {
        tabBarLabel: 'Giveaway',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="gift"
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Map',
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
    },
  }
);

MainTabNavigation.navigationOptions = {
  drawerLabel: 'View',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="dashboard"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default StackNavigator(
  {
    ComponentsTabs: { screen: MainTabNavigation },
  },
  {
    headerMode: 'none',
  }
);

