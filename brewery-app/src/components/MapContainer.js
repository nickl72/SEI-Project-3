import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB4af27NRq5CVPXSz-lPlNKr4rf6DAC2xY')
})(MapContainer)
