import React, {Component} from 'react';
import {connect} from 'react-redux';
import{bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';



//bdb6a0604b3762ea3d08c8360fb249bc

export class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {term: ''};

		//this is used for the method below.  It binds the 'this' keyword to allow us to use "onInputChange" in the <input> element that is getting rendered below.  If you don't do this, "this.setState" in "onInputChange" is undefined.
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();

		//now we need to go and fetch weather data.  Call the action "fetchWeather"
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

//only reason to pass null because we don't have any state in this particular container, just props
export default connect(null, mapDispatchToProps)(SearchBar);