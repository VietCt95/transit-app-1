import React from 'react';
import { StackNavigator } from 'react-navigation';
import {SimpleLineIcons} from '@expo/vector-icons';

import Login from '../screens/Login';

const LoginDrawerItem = StackNavigator({
  Login: { screen: Login }
  },
  {
    headerMode: 'none'
  }
);

LoginDrawerItem.navigationOptions = {
  drawerLabel: 'Logout',
  labelStyle:{
    marginTop: 200
  },
  drawerIcon: ({ tintColor }) => (
    <SimpleLineIcons
      name="logout"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="simpleLineIcons"
      color={tintColor}
    />
  ),
};

export default LoginDrawerItem;
