import React, {Component} from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";


const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBA6SFieS8_-c2YvJc-OZmqk0Tw4DfzF6E&libraries=geometry",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap )((props) =>

            <GoogleMap
                defaultZoom={12}
                defaultCenter={{ lat:19.4222496, lng:-99.1740582}}
                options={{streetViewControl: false, mapTypeControl: false}}
            >

                  <Marker
                title={'Aqui estás'}
                position={{ lat: 19.4222496, lng: -99.1740635 }}
                  />
            </GoogleMap>
)

export default Map;
