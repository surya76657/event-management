import { useEffect, useState } from "react";

const eventInfo = {
		name: "Movie1",
		description: " this is the  movie 1",
		timestamp: new Date('2012-01-01'),
		location: "Bangalore, india"
	}

function EventDetails(){
	const eventID = 1;
	
	const [event, setEvents] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	
	useEffect(()=>{
		const getEvent= ()=> new Promise((resolve, reject)=>{
			setTimeout(()=>{
				resolve(eventInfo)
			},[2000])
		})
		setIsLoading(true)
		setIsError(false);
		getEvent().then((events)=>{
			setEvents(events)
		}).catch((err)=>{
			setIsError(true);
		}).finally(()=>{
			setIsLoading(false)
		})
	},[])
	
	if(!event){
		return " No Event Found"
	}
	
	if(isLoading){
		return "Loading..."
	}
	if(isError) {
		return "Error"
	}
	

	return(
		<div>
			<header className="">{event.name}</header>	
			<p>	{event.description}</p>
			<p>{event.location}</p>
			<p>{event.timestamp.toString()}</p>
		</div>
	)
}
export default EventDetails;
