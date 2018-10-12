import React, {Component} from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";


var origin1 = {lat: 55.930, lng: -3.118};
var origin2 = 'Greenwich, England';
var destinationA = 'Stockholm, Sweden';
var destinationB = {lat: 50.087, lng: 14.421};
// var image ={
//   url: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi2xPScs_zdAhUJZKwKHaUjBEIQjRx6BAgBEAU&url=https%3A%2F%2Ficons8.com%2Ficon%2F59066%2Fdrop-shipping&psig=AOvVaw2BXJ8bCWn1cYQQH_c7EwpD&ust=1539278041160186'
// }

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
                options={{streetViewControl: true, mapTypeControl: false}}
            >

                  <Marker
                title={'Aqui estás'}
                position={{ lat: 19.4222496, lng: -99.1740635 }}
                animation= {google.maps.Animation.DROP}
                icon={'/drop.png'}
                draggable={true}
                  />
            </GoogleMap>
)

export default Map;
