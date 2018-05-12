import React, { Component } from 'react';
import { MapView, Location, Permissions } from 'expo';
import { View, StyleSheet, Dimensions } from 'react-native';

import MapSearchBar from '../components/MapSearchBar';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Map extends Component{
    static initialState = () => ({
        initialRegion: {
            latitude: 37.335187,
            longitude: -121.881072, 
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        mapRegion: {
            latitude: 0,
            longitude: 0, 
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        isPermited: false,
    })

    constructor(props) {
        super(props);
        this.state  = Map.initialState();
    }

    componentWillMount() {
        this._getLocationAsync();
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
          this.setState({
            isPermited: true
          });
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            mapRegion: { 
            latitude: location.coords.latitude, 
            longitude: location.coords.longitude 
            }
        });
        
    };

    render(){
        const {
            initialRegion,
            mapRegion,
            isPermited,
        } = this.state;

        if (isPermited) {
            console.log(mapRegion);
        } 

        return(
            <View style={{flex:1}}>
                <MapSearchBar/>
                <MapView style={styles.map}
                    initialRegion={this.initialRegion}
                />   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 6,
    },
});