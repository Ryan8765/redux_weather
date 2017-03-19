import React, {Component} from 'react';


class GoogleMap extends Component {
	//this is a lifecycle method that gets called when a component has been rendered to the screen.
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12, 
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {

		return <div ref="map" />;
	}
}


export default GoogleMap;