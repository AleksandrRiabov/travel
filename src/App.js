import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

import { CssBaseline, Grid } from '@material-ui/core';

import {getPlacesData} from "./api/index";

const App = () => {
	const [places, setPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState({ne: 0, sw: 0});
	
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
			setCoordinates({lat: latitude, lng: longitude});
		})
	}, []);
	
	useEffect(() => {
		getPlacesData(bounds.ne, bounds.sw)
		.then(data => setPlaces(data)); 
	}, [bounds, coordinates])
	
	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<List places={ places }/>
				</Grid>
				<Grid item xs={12} md={8}>
					<Map 
						setBounds={setBounds} 
						setCoordinates={setCoordinates}
						coordinates={coordinates}
						/>
				</Grid>
			</Grid>
		</>
	);
};

export default App;