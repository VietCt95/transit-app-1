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
                          large
                          rounded
                          title="G"
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                    />
                </View>
                <View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatarContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5
    },

})