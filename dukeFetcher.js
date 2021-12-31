const fetchDuke = async  ( type = "duke") => {
	const response = await fetch(`./${type}.json`);
	const data = await response.json();
	console.log('loaded from the server', data);
	const customEvent = new CustomEvent(type,{
		detail:{
			payload: data
		},
		bubbles: true
	});
	window.dispatchEvent(customEvent);
}

export { fetchDuke };