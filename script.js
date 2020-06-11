function getWeather( cityID ) {
  var key = '63e69be104ab0b3b5bf9cd859b515e70';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(response) { 
  		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);
		return response.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
	document.getElementById('description').innerHTML = data.weather[0].description;
	document.getElementById('temperature').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = data.name;
	//getBackground(data.weather[0].description);
	getBackground('cloud');
	
  })
  .catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});
}

function getBackground(description){
	if(description.includes('sunny')){
		document.getElementById("sun").style.visibility = "visible";
	}
	else{
		document.getElementById("sun").style.visibility = "hidden";
	}
	
	if(description.includes('cloud')){
		document.getElementById("whitecloud").style.visibility = "visible";
	}
	else{
		document.getElementById("whitecloud").style.visibility = "hidden";
	}
	
	if(description.includes('clear')){
		document.getElementById('weather').className = 'clear';
	}
	else if(description.includes('sunny')){
		document.getElementById('weather').className = 'sunny';
	}
	else if(description.includes('rain')){
		document.getElementById('weather').className = 'rain';
	}
	else if(description.includes('rainy')){
		document.getElementById('weather').className = 'rainy';
	}
	else if(description.includes('snow')){
		document.getElementById('weather').className = 'snow';
	}
	else if(description.includes('drizzle')){
		document.getElementById('weather').className = 'drizzle';
	}
	else if(description.includes('cloudy')){
		document.getElementById('weather').className = 'cloudy';
	}
	else if(description.includes('clouds')){
		document.getElementById('weather').className = 'clouds';
	}
	else if(description.includes('cloud')){
		document.getElementById('weather').className = 'clouds';
	}
	else if(description.includes('mist')){
		document.getElementById('weather').className = 'mist';
	}
	else if(description.includes('misty')){
		document.getElementById('weather').className = 'mist';
	}
	else if(description.includes('thunderstorm')){
		document.getElementById('weather').className = 'thunderstorm';
	}
	else if(description.includes('dust')){
		document.getElementById('weather').className = 'dust';
	}
	else if(description.includes('smoke')){
		document.getElementById('weather').className = 'smoke';
	}
	else if(description.includes('fog')){
		document.getElementById('weather').className = 'fog';
	}
	else if(description.includes('sand')){
		document.getElementById('weather').className = 'sand';
	}
	else if(description.includes('squall')){
		document.getElementById('weather').className = 'squall';
	}
	else{
		document.getElementById('weather').className = 'clear';
	}
}

window.onload = function(){
	getWeather(4350049);
}