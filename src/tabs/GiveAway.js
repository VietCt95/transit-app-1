import React from 'react';
import { StackNavigator } from 'react-navigation';
import {Icon} from 'react-native-elements';

import GiveAway from '../screens/GiveAway';

const GiveAwayTabView = ({ navigation }) => (
  <GiveAway navigation={navigation} />
);


const GiveAwayTab = StackNavigator({
  GiveAway: {
    screen: GiveAwayTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'GiveAway',
      headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: 'forestgreen',
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

export default GiveAwayTab;
