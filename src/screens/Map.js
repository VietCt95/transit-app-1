import React, { Component } from 'react';
import { MapView, Location, Permissions } from 'expo';
import { View, StyleSheet, Dimensions, Sear } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

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
        if (status !== 'granted') {
          this.setState({
            isPermited: false
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
                <View style={styles.searchArea}>
                    <EvilIcons
                        style={styles.icon} 
                        name='location'
                        size={25}
                    />
                    <SearchBar
                        containerStyle={styles.searchBar}
                        placeholder="Destination" 
                        platform="ios" 
                        {...searchBarProps} 
                    />
                </View>
                <MapView style={styles.map}
                    initialRegion={this.initialRegion}
                />   
            </View>
        )
    }
}

const searchBarProps = {
    showLoading: false,
    lightThme: true,
    onFocus: () => console.log("focus"),
    onBlur: () => console.log("blur"),
    onCancel: () => console.log("cancel"),
    onClearText: () => console.log("cleared"),
    onChangeText: text => console.log("text:", text),
  }
  

const styles = StyleSheet.create({
    searchArea: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'forestgreen',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    icon: {
        top: -20,
        color: 'white',
        flex: 1,
        left: 10,
    },
    searchBar: {
        width: 10,
        flex: 19,
        right: -10,
        backgroundColor: 'transparent' 
    },
    map: {
        flex: 6,
    },
});