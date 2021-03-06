import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async (ne, sw) => {
	const options = {
  params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'f6e85a3537msh16a1b454499b4afp16528ejsn68b2051e2547'
  }
};
	
	
	try {
		const {data : {data}} = await axios.get(URL, options);
		return data;
		
	} catch(err){
		console.log(err);
	}
}