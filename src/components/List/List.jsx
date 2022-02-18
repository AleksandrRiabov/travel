import React, { useState } from 'react';
import {
	CircularProgress,
	Grid,
	Typography,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from '@material-ui/core';

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from './styles';

const List = ({places}) => {
	const [type, setType] = useState('restoraunts');
	const [rating, setRating] = useState('');
	const classes = useStyles();

	// const places = [{ name: 'Cool place' }, { name: 'Cool Bear' }, { name: 'Cool Sleep' }, { name: 'Cool Bear' }, { name: 'Cool Sleep' }, { name: 'Cool Bear' }, { name: 'Cool Sleep' }, { name: 'Cool Bear' }, { name: 'Cool Sleep' }];
	return (
		<div className={classes.container}>
			<Typography variant={'h4'}>Restoraunts, Hotels and Atractions around you.</Typography>
			<FormControl className={classes.formControl}>
				<InputLabel>Type</InputLabel>
				<Select value={type} onChange={(e) => setType(e.target.value)}>
					<MenuItem value="restoraunts"> Restoraunts</MenuItem>
					<MenuItem value="hotels"> Hotels</MenuItem>
					<MenuItem value="atractions"> Atractions</MenuItem>
				</Select>
			</FormControl>
			<FormControl className={classes.formControl}>
				<InputLabel>Rating</InputLabel>
				<Select value={rating} onChange={(e) => setRating(e.target.value)}>
					<MenuItem value={0}> Show All</MenuItem>
					<MenuItem value={3}> Above 3.0</MenuItem>
					<MenuItem value={4}> Above 4.0</MenuItem>
					<MenuItem value={4.5}> Above 4.5</MenuItem>
				</Select>
			</FormControl>
			<Grid container spacing={3} className={classes.list}>
				{places && places.map((place, index) => (
					<Grid item xs={12} key={index}>
						<PlaceDetails place={place}/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default List;