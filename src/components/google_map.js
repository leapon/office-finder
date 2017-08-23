import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }
  displayMap() {
    new google.maps.Map(this.refs.map, {
      zoom: 18,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }
  componentDidMount() {
    this.displayMap();
  }
  componentDidUpdate() {
    this.displayMap();
  }
  render() {
    return (
      <div>
        <div>
          lat: { this.props.lat }, lng: { this.props.lng }
        </div>
        <div ref="map" className="office-google-map">
        </div>
      </div>
    )
  };
}

export default GoogleMap;
