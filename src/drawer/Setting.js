import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Setting from '../screens/Setting';

const SettingsDrawerItem = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
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
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
});

SettingsDrawerItem.navigationOptions = {
  drawerLabel: 'Setting',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="cog"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="entypo"
      color={tintColor}
    />
  ),
};

export default SettingsDrawerItem;
