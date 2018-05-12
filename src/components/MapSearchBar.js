import React, {Component} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

export default class MapSearchBar extends Component {
    render(){
        return(
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

  

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      
      getDefaultValue={() => ''}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyAeVyVyabkE6daB_V1knSmkAxKvHRHc2U0',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}
      
      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[homePlace, workPlace]}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      renderLeftButton={()  => <Image source={require('../../assets/icons/icon.png')} />}
      renderRightButton={() => <Text>Custom text after the input</Text>}
    />
  );
}

const styles = StyleSheet.create({
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
})