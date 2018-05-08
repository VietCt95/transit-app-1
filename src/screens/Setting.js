import React, { Component } from 'react';
import { View, StyleSheet, Switch} from 'react-native';
import { ListItem } from 'react-native-elements';
import colors from 'HSColors';

export default class Setting extends Component{
    constructor() {
        super()
        this.state = {
            showPlaces: false,
            switch1: false,
            switch2: false,
            selectedIndexStyle: 0
        }
      }
  
    switchState = (props) => {
        this.setState(previousState => ({
            props: !previousState.props
        }))
    }

    render(){
        const {
            showPlaces,
            switch1,
            switch2,
            selectedIndexStyle
        } = this.state;

        return(
            <View style={styles.list}>
                <ListItem
                    title="Bus Transit Only"
                    switch={{value: switch1}}
                    bottomDivider
                />
                <ListItem 
                    title="Push Notification" 
                    switch={{value: switch2}}

                    bottomDivider 
                />
                <ListItem
                    title="Map Styles"
                    buttonGroup={{
                        buttons: ['Dark', 'Light'],    
                    }}
                    bottomDivider
                />
                <ListItem
                    title="Show Places"
                    checkBox={{ checked: showPlaces }}
                    onPress={ () =>
                        this.setState(previousState => ({
                            showPlaces: !previousState.showPlaces
                        }))
                    }
                    bottomDivider
                />
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
      marginTop: 20,
      borderTopWidth: 1,
      borderColor: colors.greyOutline,
      backgroundColor: '#fff',
    },
  });