import React, {Component} from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            markers: [
                {lat: 21.004490, lng: 105.841663, name: 'Nhà 1', price: '1000000$'},
                {lat: 21.003897, lng: 105.841591, name: 'Nhà 2', price: '2000000$'},
                {lat: 21.003366, lng: 105.841591, name: 'Nhà 3', price: '3000000$'},
            ],
            currentLocation: {
                lat: 21.003897,
                lng: 105.841591,
            },
        };
    }

    onMarkerClick = (props, marker) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            currentLocation: props.position
        });
        console.log(this.state.currentLocation)
    };

    onMapClicked = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    };

    displayMarkers = (location) => {
        // this.setState({
        //     currentLocation: location
        // });
        return this.state.markers.map((marker, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    name={marker.name}
                    price={marker.price}
                    position={{
                        lat: marker.lat,
                        lng: marker.lng,
                    }}
                    icon={{
                        url: 'https://maps.google.com/mapfiles/ms/icons/homegardenbusiness.png',
                    }}
                    onClick={this.onMarkerClick}
                />
            );
        });
    };

    render() {
        let location
        return (
            <>
                <Map
                    google={this.props.google}
                    zoom={18}
                    initialCenter={this.state.currentLocation}
                    onClick={(t, map, coord) => {
                        const {latLng} = coord;
                        const location = {
                            lat: latLng.lat(),
                            lng: latLng.lng(),
                        };
                    }}>
                    {this.displayMarkers(location)}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h3>{this.state.selectedPlace.name}</h3>
                            <p>Giá tiền: {this.state.selectedPlace.price}</p>
                        </div>
                    </InfoWindow>
                </Map>
            </>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBr6w8PZJ51FBjLy6LLax0y-XZMNQUpzaY',
})(MapContainer);