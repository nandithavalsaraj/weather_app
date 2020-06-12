function getWeather( cityID ) {
  var key = config.MY_KEY || 0;
  if(key!=0){
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
		getBackground(data.weather[0].description);
		//getBackground('heavy snow');
	
  		})
  	.catch((err) => {
			console.log('SOMETHING WENT WRONG WITH FETCH!');
			console.log(err);
		});
	}
	else{
		document.getElementById('description').innerHTML = "COULD NOT ACCESS API!!";
		getBackground('cloud');
	}
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
	if(description.includes('drizzle')){
		document.getElementById("rainday").style.visibility = "visible";
		createRain(100);
	}
	else{
		document.getElementById("rainday").style.visibility = "hidden";
		$('.drop').remove();
	}

	if(description.includes('rain')){
		document.getElementById("rainday").style.visibility = "visible";
		if(description.includes('heavy') || description.includes('Heavy'))
			{createRain(850);}
		else{
			createRain(500);
		}
	}
	else{
		document.getElementById("rainday").style.visibility = "hidden";
		$('.drop').remove();
	}
	
	if(description.includes('snow')){
		document.getElementById("snowday").style.visibility = "visible";
		if(description.includes('heavy') || description.includes('Heavy'))
			{createSnow(850);;}
		else{
			createSnow(500);;
		}
	}
	else{
		document.getElementById("snowday").style.visibility = "hidden";
		$('.snowdrop').remove();
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
	var cityID = config.MY_CITY || 4350049;
	getWeather(cityID);
}