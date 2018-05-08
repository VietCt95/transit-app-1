import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Dashboard from '../screens/Dashboard';

const DashboardTabView = ({ navigation }) => (
  <Dashboard navigation={navigation} />
);


const DashboardTab = StackNavigator({
    Dashboard: {
    screen: DashboardTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: 'forestgreen',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
      },
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  }
});

export default DashboardTab;
