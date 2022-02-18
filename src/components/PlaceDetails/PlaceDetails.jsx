import React from 'react';
import useStyles from "./styles";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating"

const PlaceDetails = ({place}) => {
	const classes = useStyles();
	
	
	return (
		<Card elevation={6}>
		<CardMedia 
			style={{height: 350}} 
			image={place.photo ? place.photo.images.large.url : "https://www.menslife.com/upload/iblock/95b/pochemu_v_restoranakh_i_kafe_est_opasno.jpg" }
			title={place.name}
			/>
			<CardContent >
			<Typography gutterBottom variant="h5">{place.name}</Typography>
				<Box diplay="flex" justifyContent="space-between">
				<Typography variant="subtitle1">Price</Typography>
				<Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
				</Box>
				<Box diplay="flex" justifyContent="space-between">
				<Typography variant="subtitle1">Ranking</Typography>
				<Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
				</Box>
				{place && place.awards && place.awards.map((award) => (
				   <Box my={1} display="flex" justifyContent="space-between">
						<img src={award.images.small} alt={award.display_name} />
						<Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
					</Box>
				))}
				{
					place && place.cuisine && place.cuisine.map(({name}) => (
					<Chip
						key={name}
						size="small" 
						label={name} 
						className={classes.chip}/>
					))
				}
				{
					place.address && (
					<Typography 
						variant="subtitle2"
						color="textSecondary"
						gutterBottom
						className={classes.subtitle}>
						<LocationOnIcon /> {place.address}
						</Typography>
					)
				}
				{
					place.phone && (
					<Typography 
						variant="subtitle2"
						color="textSecondary"
						gutterBottom
						className={classes.spacing}>
						<PhoneIcon /> {place.phone}
						</Typography>
					)
				}
			</CardContent>
		</Card>
	);
};

export default PlaceDetails;