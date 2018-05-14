import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import Map from '../screens/Map';
import Login from '../screens/Login';
import DashBoard from '../screens/Dashboard';
import GiveAway from '../screens/GiveAway';

const RootStackNavigator = StackNavigator(
  {
    Map: {
        screen: Map,
    },
    Login:{
        screen: Login
    },
    DashBoard:{
        screen: DashBoard
    },
    GiveAway: {
      screen: GiveAway
    }
  },

);

export default class DummyNav extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
