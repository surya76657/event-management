

function Event({ event}){
	return(
		<div style={{border: '1px solid', margin: "8px"}}>
			<header className="">{event.name}</header>	
			<p>	{event.description}</p>
			<p>{event.location}</p>
			<p>{event.timestamp.toString()}</p>
		</div>
	)
}
export default Event;
