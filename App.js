import React, {Fragment, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  Button,
  StatusBar,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const FadeIn = props => {
  const [location, setLocation] = useState({});
  const [fadeAnim] = useState(new Animated.Value(0));
  const [position] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();

    Animated.timing(position, {
      toValue:500, 
      duration:5000
    }).start()
  }, []);
  return <Animated.View style={{
    ...props.style, 
    opacity:fadeAnim,
    position:'relative', 
    left:position
  }}>{props.children}</Animated.View>;
};

const App = () => {
  return (
    <View style={styles.contain}>
      <View>
        <Button
          title="set location"
          style={{position: 'absolute', top: '50%'}}
          onPress={() => {
            Geolocation.getCurrentPosition(info => {
              setLocation(info.coords);
            });
          }}
        />
<FadeIn>

        <Text>aoweifjwaoiefjwo</Text>
</FadeIn>
      </View>
      {/* <MapView
    style={{flex:1}}
      initialRegion={{
        latitude: 40.2222,
        longitude: -111.1,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={false}
      showsCompass={true}
      zoomControlEnabled={true}
      showsTraffic={true}
    /> */}
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
