import _ from 'lodash';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Avatar, Button } from 'react-native-elements'

import { Font } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const NEXT_GIFT = [
  {
    name: 'Iphone 7',
    avatar: 'https://images.kogan.com/image/fetch/s--NNTk9sAR--/b_white,c_pad,f_auto,h_400,q_auto:good,w_600/https://assets.kogan.com/files/product/iPhone7and7Plus/KHIP7XXBLK_1.jpg',
    value: '- 164'
  },
  {
    name: 'Egg',
    avatar: 'data:image/jpeg;base64,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',
    value: '+ 203',
    positive: true
  },
  {
    name: 'Bicycle',
    avatar: 'https://cdn.shopify.com/s/files/1/2061/4497/products/3035d95b5fdbc71e2e375a7aa79df974_2f54f859-32dc-43fc-9120-a563ba886122_800x.png?v=1509342906',
    value: '+ 464',
    positive: true
  },
  {
    name: 'Amazon eGift',
    avatar: 'https://production-gameflipusercontent.fingershock.com/us-east-1:0715d83a-5070-4644-b946-222dc21f54cd/6dbd4901-5056-4d27-ac2c-c215fa80b147/9db8d3e4-7425-4783-bd8a-779d62fab74e',
    value: '- 80',
    positive: false
  },
  {
    name: 'Dell XPS',
    avatar: 'https://s.aolcdn.com/hss/storage/midas/199376e393dc744e85546cd5c55658ce/205605150/dell-xps-13-intel-8th-gen-quad-core-2017-08-28-01.jpg',
    value: '- 230',
    positive: false
  },
  {
    name: 'Beat Headphone',
    avatar: 'https://www.beatsbydre.com/content/dam/beats/web/pcp/headphones/pro/_0002_overear-pro-black-rgb-thrqrtleft.png.large.1x.png',
    value: '+ 160',
    positive: true
  },
];

export default class GiveAway extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'georgia': require('../../assets/fonts/Georgia.ttf'),
      'regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
      'light': require('../../assets/fonts/Montserrat-Light.ttf'),
      'bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  renderValue(user) {
    const { value, positive } = user;

    if (positive) {
      return (
        <View style={{ backgroundColor: 'rgba(220,230,218,1)', width: 70, height: 28, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 10}}>
          <Icon
            name='md-arrow-dropup'
            color='green'
            size={25}
          />
          <Text style={{color: 'green', fontFamily: 'regular', fontSize: 13, marginLeft: 5}}>{value}</Text>
        </View>
      );
    } else {
      return (
        <View style={{ backgroundColor: 'rgba(244,230,224,1)', width: 70, height: 28, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 10}}>
          <Icon
            name='md-arrow-dropdown'
            color='red'
            size={25}
          />
          <Text style={{color: 'red', fontFamily: 'regular', fontSize: 13, marginLeft: 5}}>{value}</Text>
        </View>
      );
    }
  }

  renderCard(user, index) {
    const { name, avatar } = user;

    return (
      <View key={index} style={{height: 60, marginHorizontal: 20, marginTop: 10, backgroundColor: 'white', borderRadius: 5, alignItems: 'center', flexDirection: 'row'}}>
        <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginLeft: 15}}>
            <Avatar
              small
              rounded
              source={{
                uri: avatar,
              }}
              activeOpacity={0.7}
            />
          </View>
          <Text style={{fontFamily: 'regular', fontSize: 15, marginLeft: 10, color: 'gray'}}>
            {name}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 10 }}>
          {this.renderValue(user)}
          <View style={{ backgroundColor: 'rgba(222,222,222,1)', width: 35, height: 28, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
            <Icon
              name='ios-heart'
              color='gray'
              size={20}
              onPress={   () =>
                      {}  
              }
            />
          </View>
        </View>
      </View>
    );
  }

  renderListCards() {
    return _.map(NEXT_GIFT, (user, index) => {
      return this.renderCard(user, index);
    });
  }

  render() {
    return (
      <View>
        {this.state.fontLoaded ?
          <View>
            <View style={styles.statusBar} />

            <ScrollView style={{ marginBottom: 20}}>
              <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', borderRadius: 5, alignItems: 'center', marginHorizontal: 10, height: 250, marginBottom: 10}}>
                <View style={{flex: 3, flexDirection: 'row'}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Avatar
                      width={145}
                      height={145}
                      source={{
                        uri: 'http://d2pa5gi5n2e1an.cloudfront.net/global/images/product/gameconsoles/Microsoft_Xbox_One_X/Microsoft_Xbox_One_X_L_1.jpg',
                      }}
                      activeOpacity={0.7}
                      avatarStyle={{borderRadius: 145/2}}
                      overlayContainerStyle={{backgroundColor: 'transparent'}}
                    />
                  </View>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ flex: 1, marginTop: 10, justifyContent: 'center'}}>
                      <Text style={{ fontFamily: 'bold', fontSize: 25, color: 'rgba(98,93,144,1)', marginLeft: -15}}>
                        Xbox X
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{width: 300, borderWidth: 0.5, borderColor: 'rgba(222, 223, 226, 1)', marginHorizontal: 20, height: 1, marginVertical: 10}} />
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, alignItems:'center'}}>
                    <Button
                      title='Description'
                      buttonStyle={{height: 33, width: 120, backgroundColor: 'rgba(222, 223, 226, 1)', borderRadius: 5}}
                      titleStyle={{fontFamily: 'regular', fontSize: 13, color: 'gray'}}
                      onPress={() => console.log('aye')}
                      underlayColor="transparent"
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Button
                      title='Enter'
                      buttonStyle={{height: 33, width: 120, backgroundColor: 'rgba(113, 154, 112, 1)', borderRadius: 5}}
                      titleStyle={{fontFamily: 'regular', fontSize: 13, color: 'white'}}
                      onPress={() => console.log('aye')}
                      underlayColor="transparent"
                    />
                  </View>
                </View>
              </View>
              {this.renderListCards()}
            </ScrollView>
          </View> :
          <Text>Loading...</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameHeader: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'regular',
    marginLeft: 20
  }
});
