import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }
  render() {
    return (
      <div ref="map" className="office-google-map">
      map
      </div>
    )
  };
}

export default GoogleMap;
