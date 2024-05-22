import React, {useEffect, useState} from "react";
import Event from "../components/Event";

const eventsList = [
	{
		name: "Movie1",
		description: " this is the  movie 1",
		timestamp: new Date('2012-01-01'),
		location: "Bangalore, india"
	},
	{
		name: "Movie2",
		description: " this is the  movie 2",
		timestamp: new Date('2012-01-01'),
		location: "Bangalore, india"
	},
	{
		name: "Movie3",
		description: " this is the  movie 3",
		timestamp: new Date('2012-01-01'),
		location: "Bangalore, india"
	},
	{
		name: "Movie4",
		description: " this is the  movie 4",
		timestamp: new Date('2012-01-01'),
		location: "Bangalore, india"
	},
]


export default function Home(){
	const [events, setEvents] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [query, setQuery] = useState("")

	useEffect(() =>{
		const getEvents= ()=> new Promise((resolve, reject)=>{
			setTimeout(()=>{
				resolve(eventsList)
			},[200])
		})
		setIsLoading(true)
		setIsError(false);
		getEvents().then((events)=>{
			setEvents(events)
		}).catch((err)=>{
			setIsError(true);
		}).finally(()=>{
			setIsLoading(false)
		})
	},[]);
	if(isLoading){
		return "Loading..."
	}
	if(isError) {
		return "Error"
	}
	
	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase() || "";
		console.log(query)
		setEvents(events =>{
			return events.filter(ev=>{
				return ev.name.toLowerCase().includes(query)
			})
		})
	}
	
	return (
		<div className="">
			<input type="search" placeholder="Search..." onChange={handleSearch}>
				
			</input>
			{
				events.map(event=>(
					<Event event={event}></Event>
				))
			}
		</div>
	)
}


