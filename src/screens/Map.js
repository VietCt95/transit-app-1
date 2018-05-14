import React, { Component } from 'react';
import { MapView, Location, Permissions } from 'expo';
import { View, StyleSheet, Dimensions } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import MapViewDirections from 'react-native-maps-directions';

//import MapSearchBar from '../components/MapSearchBar';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const ASPECT_RATIO = SCREEN_WIDTH/SCREEN_HEIGHT;

const GOOGLE_MAPS_API_KEY = 'AIzaSyAeVyVyabkE6daB_V1knSmkAxKvHRHc2U0';

const initialRegion = {
    latitude: 37.3382,
    longitude: 121.8863,
    latitudeDelta: 0.0922,
    longitudeDelta: 37.3352*ASPECT_RATIO,
}

const origin = {latitude: 37.3180420, longitude: -121.8190950};
const destination = {latitude: 37.3357807, longitude: -121.8821639};

export default class Map extends Component{

    constructor(props) {
        super(props);
        this.state = {
            mapRegion: {
                latitude: 0,
                longitude: 0, 
                latitudeDelta: 0.0922,
                longitudeDelta: 0
            },
            isPermited: false,
            renderDirection: false,
        };
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
                longitude: location.coords.longitude,
                longitudeDelta: location.coords.latitude*ASPECT_RATIO 
            }
        });
        
    };

    render(){
        const {
            mapRegion,
            isPermited,
            renderDirection
        } = this.state;

        const searchBarProps = {
            showLoading: false,
            lightThme: true,
            onFocus: () => console.log("focus"),
            onBlur: () =>this.setState(previousState => ({
                renderDirection: !previousState.renderDirection
            })),
            onCancel: () => console.log("cancel"),
            onClearText: () => console.log("cleared"),
            onChangeText: text => console.log(text),
          }

        return(
            <View style={{flex:1}}>
                <View style={styles.searchArea}>
                    <View style={styles.iconBox}>
                    <Icon
                        name='location-pin'
                        type='entypo'
                        size={25}
                    />
                    </View>
                    <SearchBar
                        containerStyle={styles.searchBar}
                        placeholder="Destination" 
                        platform="ios" 
                        {...searchBarProps} 
                    />
                </View>
                <MapView style={styles.map}
                        initialRegion={{
                            latitude: 37.33939,
                            longitude: -121.89496,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 37.33939*ASPECT_RATIO/900
                        }}>
                    <MapView.Marker coordinate={origin}/>
                    <MapView.Marker coordinate={destination}/>
                    {renderDirection ?
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={GOOGLE_MAPS_API_KEY}
                            strokeWidth={3}
                            strokeColor="hotpink"
                        />:null
                    }

                </MapView>   
            </View>
        )
    }
}


const styles = StyleSheet.create({
    map: {
        flex: 6,
    },    
    searchArea: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'forestgreen',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    iconBox: {
        flex: 1,
        left: 10,
        bottom: 15
    },
    searchBar: {
        width: 10,
        flex: 19,
        right: -10,
        backgroundColor: 'transparent' 
    },
});