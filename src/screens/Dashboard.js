import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Platform, ScrollView } from 'react-native';
import { Avatar, PricingCard, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from 'HSColors';

giveawayScreen = () => {
    navigate('GiveAway')
}

export default class Dashboard extends Component{
    render(){
    const { navigate } = this.props.navigation;        
        return(
            <View style={{flex: 1}}>
                <View style={styles.avatarContainer}>
                    <Avatar
                        width={100}
                        height={100}
                        rounded
                        source={{uri: "http://pixelartmaker.com/art/e2dc0419ba5a091.png"}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                </View>
                <View style={{flex:4}}>
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <PricingCard
                        color={colors.primary}
                        title="Money Save"
                        price="$10"
                        info={['Gas cost around 0.3 per mile']}
                        button={{ title: 'MORE INFORMATION', icon: 'details' }}
                    />
                    <PricingCard
                        color={colors.secondary}
                        title="CO2 Cut"
                        price="200 Pounds"
                        info={['1 gallon of gas created 20 pounds of carbon dioxide']}
                        button={{ title: 'MORE INFORMATION', icon: 'details' }}
                    />
                    <PricingCard
                        color={colors.secondary2}
                        title="Available Tickets"
                        price="30"
                        info={['70 used', '10 Entering', '1 won']}
                        button={{ 
                            title: 'ENTER GIVEAWAY', 
                            icon: 'play-arrow', 
                            onPress: {giveawayScreen},    
                        }}
                    />
                </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatarContainer:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    dashboardInfor:{
        flex: 4
    },
    hero: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: colors.primary2,
      },
      heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
      },
      titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
        fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
        color: '#27ae60',
      },
      subtitleText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
        color: '#34495e',
      },
      viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
})