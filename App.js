import React, {Component} from 'react';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Text, View, Dimensions, Image } from 'react-native';

import SideBarNavigation from './src/navigation/SideBarNavigation';

const SCREEN_WIDTH = Dimensions.get('window').width;



cacheFonts = (fonts) => {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends Component {
  state = {
    isReady: false,
  };

  async _cacheResourcesAsync() {
    const images = [
      require('./assets/images/bg_screen1.jpg'),
      require('./assets/images/bg_screen2.jpg'),
      require('./assets/images/bg_screen3.jpg'),
      require('./assets/images/bg_screen4.jpg'),
      require('./assets/images/user-cool.png'),
      require('./assets/images/user-hp.png'),
      require('./assets/images/user-student.png'),
      require('./assets/images/avatar1.jpg'),
    ];
    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    
    const fontAssets = cacheFonts([FontAwesome.font, Ionicons.font]);

    await Promise.all(cacheImages,[...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <SideBarNavigation/>
    );
  }
}

Expo.registerRootComponent(App);
