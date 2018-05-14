import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text} from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import colors from 'HSColors';

export default class Profile extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.list}>
                    <ListItem
                        title="Full Name"
                        input={{ placeholder: 'Enter your name' }}
                        chevron
                        bottomDivider
                    />
                    <ListItem
                        title="Email"
                        input={{ placeholder: 'Enter your email' }}
                        chevron
                        bottomDivider
                    />
                    <ListItem
                        title="Address"
                        input={{ placeholder: 'Enter your address' }}
                        chevron
                        bottomDivider
                    />
                    <ListItem
                        title="Phone Number"
                        input={{ placeholder: 'Enter your phone' }}
                        chevron
                        bottomDivider
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{
                        flex:1,
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                        <Button
                        title='Save'
                        titleStyle={{color: 'white'}}
                        buttonStyle={styles.button}
                        underlayColor='transparent'
                        onPress={() => console.log("Todo: Save profile")}
                        />
                    </View>
                    <View style={{ flex:1 }}>
                        <Text style={{color: 'grey'}}>
                            Note: Information need to be recise in order to receive your items when wining giveaway.
                        </Text>   
                    </View>
                </View>
                <View style={{flex:1}}/>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
        flex: 1,
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: colors.greyOutline,
        backgroundColor: '#fff',
    },
    buttonContainer:{
        flex: 1,
        backgroundColor: 'white',
        marginTop: 3
    },
    button:{
        marginTop: 10,
        backgroundColor: 'forestgreen',
        borderRadius: 10,
        height: 50,
        width: 100,
    }
  });