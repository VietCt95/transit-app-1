import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class Dashboard extends Component{
    render(){
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
                <View style={styles.dashboardInfor}>
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
        marginTop: 5
    },
    dashboardInfor:{
        flex: 4
    }

})