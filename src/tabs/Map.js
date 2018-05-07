import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Map from '../screens/Map';

const MapTabView = ({ navigation }) => (
  <Map navigation={navigation} />
);


const MapTab = StackNavigator({
  Map: {
    screen: MapTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      header: null,
      title: null,
    }),
  }
});

export default MapTab;
