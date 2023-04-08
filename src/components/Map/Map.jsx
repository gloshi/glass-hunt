
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './Map.css'
import { API } from "../../utils/api";

export default function RenderMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
    const center = {
      lat: 56.772,
      lng: 12.214
      }
      
      const position = {
        lat: 56.772,
        lng: 12.214
      }
      

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF  position={position} />
    </GoogleMap>
  );
}