import React, {Fragment, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const App = () => {
  const [location, setLocation] = useState({});
  useEffect(() => {

  }, []);
  return (
    <View style={styles.contain}>

      <View>

<Button title='set location' style={{position:'absolute', top:'50%'}}onPress={()=>{
  Geolocation.getCurrentPosition(info=>{
    setLocation(info.coords)
  })
}} />
</View>
        <MapView
        style={{flex:1}}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={false}
          showsCompass={true}
          zoomControlEnabled={true}
          showsTraffic={true}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
