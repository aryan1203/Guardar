import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import { useEffect, useState } from "react";  

export default function MapScreen() {

  const [location, setLocation] = useState<any>(null);

  useEffect(() => {

    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );

  }, []);

  if (!location) return <View className="flex-1 bg-black" />;

  return (
    <MapView
      style={{ flex: 1 }}
      region={location}
      showsUserLocation
    >
      <Marker coordinate={location} />
    </MapView>
  );
}