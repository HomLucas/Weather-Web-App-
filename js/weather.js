var callbackFunction = function(data) {
    var cond = data.query.results.channel.item.condition;
    var temp = cond.temp;
	var condition = cond.text;
    var weathercode = parseInt(cond.code);

    var place = data.query.results.channel.location.city;
    document.getElementById("city").innerHTML = ("<b>City: </b>" + place);
    
	document.getElementById("temp").innerHTML = ("<b>Temperature: </b>"+temp);
	document.getElementById("weather").innerHTML = ("<b>Weather Condition: </b>"+ condition);

	var pic=document.getElementById("weather_img");

    
    var sunArr = [0 , 31 , 32 , 33 , 34 , 36];
    var cloudyArr = [20 , 21 , 22 , 26 , 27 , 28];
    var partlyCloudyArr = [23 , 24 , 25 , 29 , 30 , 44];
    var showersArr = [5 , 6 , 8 , 9 , 10 , 11 , 12 , 17 , 35 , 40];
    var snowArr = [7 , 13 , 14 , 15 , 16 , 18 , 41 , 42 , 43 , 46];
    var thunderStormsArr = [1 , 2 , 3 , 4 , 19 , 37 , 38 , 39 , 45 , 47];

	if(sunArr.indexOf(weathercode) != -1)
    {
		pic.src="./Weather_App_files/sun.png";
	}
    else if(cloudyArr.indexOf(weathercode) > -1)
    {
        pic.src="./Weather_App_files/cloudy.png";
    }
    else if(partlyCloudyArr.indexOf(weathercode) > -1)
    {
        pic.src="./Weather_App_files/partlyCloudy.png";
    }
    else if(showersArr.indexOf(weathercode) > -1)
    {
        pic.src="./Weather_App_files/showers.png";
    }
    else if(snowArr.indexOf(weathercode) > -1)
    {
        pic.src="./Weather_App_files/snow-1.png";
    }
    else if(thunderStormsArr.indexOf(weathercode) > -1)
    {
        pic.src="./Weather_App_files/thunderStorms.png";
    }
    else //if(weathercode == 3200)
    {
        pic.src="./Weather_App_files/no_weather.jpg";
    }

    
}

function process() {
    var inputElmt = document.getElementById("codeInput");
    var zipcode = inputElmt.value;
    document.getElementById("zip").innerHTML = ("<b>Zip Code: </b>"+ zipcode);
    var script = document.createElement('script');
    
    script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+zipcode+", United States') &format=json &callback=callbackFunction";
    document.getElementsByTagName('head')[0].appendChild(script);

}

function processForecast(){

 var inputElmt = document.getElementById("codeInput");
    var zipcode = inputElmt.value;
    document.getElementById("zip").innerHTML = ("<b>Zip Code: </b>"+ zipcode);
    var script = document.createElement('script');
    
    script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+zipcode+", United States') &format=json &callback=callbackFunctionForecast";
    document.getElementsByTagName('head')[0].appendChild(script);
}

var callbackFunctionForecast = function(data) {

var cond = data.query.results.channel.item.condition;
    var temp = cond.temp;
    var condition = cond.text;
    var future = data.query.results.channel.item;
    var onedaycondition = future.forecast[0].text;
    var onedayhigh = future.forecast[0].high;
    var onedaylow = future.forecast[0].low;
    var twodaycondition = future.forecast[1].text;
    var twodayhigh = future.forecast[1].high;
    var twodaylow = future.forecast[1].low;
    var weathercode = parseInt(cond.code);
    
    var place = data.query.results.channel.location.city;
    document.getElementById("city").innerHTML = ("<b>City: </b>" + place);

    document.getElementById("temp").innerHTML = ("<b>Temperature: </b>"+temp);
    document.getElementById("weather").innerHTML = ("<b>Weather Condition: </b>"+ condition);
    document.getElementById("onedaycondition").innerHTML = ("<b>Tomrrow Condition: </b>" + onedaycondition);
    document.getElementById("onedayhigh").innerHTML = ("<b>High: </b>" + onedayhigh);
    document.getElementById("onedaylow").innerHTML = ("<b>Low: </b>" + onedaylow);
    document.getElementById("twodaycondition").innerHTML = ("<b>Two Day Condition: </b>" + twodaycondition);
    document.getElementById("twodayhigh").innerHTML = ("<b>High: </b>" + twodayhigh);
    document.getElementById("twodaylow").innerHTML = ("<b>Low: </b>" + twodaylow);

    var pic=document.getElementById("weather_img");

    
    var sunArr = [0 , 31 , 32 , 33 , 34 , 36];
    var cloudyArr = [20 , 21 , 22 , 26 , 27 , 28];
    var partlyCloudyArr = [23 , 24 , 25 , 29 , 30 , 44];
    var showersArr = [5 , 6 , 8 , 9 , 10 , 11 , 12 , 17 , 35 , 40];
    var snowArr = [7 , 13 , 14 , 15 , 16 , 18 , 41 , 42 , 43 , 46];
    var thunderStormsArr = [1 , 2 , 3 , 4 , 19 , 37 , 38 , 39 , 45 , 47];

    if(sunArr.indexOf(weathercode) != -1)
    {
        pic.src="./Weather_App_files/sun.png";
    }
    else if(cloudyArr.indexOf(weathercode) > -1)
    {
        pic.src="./Weather_App_files/cloudy.png";
    }
    else if(partlyCloudyArr.indexOf(weathercode) > -1)
    {
        pic.src="./Weather_App_files/partlyCloudy.png";
    }
    else if(showersArr.indexOf(weathercode) > -1)
    {
        pic.src="./Weather_App_files/showers.png";
    }
    else if(snowArr.indexOf(weathercode) > -1)
    {
        pic.src="./Weather_App_files/snow-1.png";
    }
    else if(thunderStormsArr.indexOf(weathercode) > -1)
    {
        pic.src="./Weather_App_files/thunderStorms.png";
    }
    else //if(weathercode == 3200)
    {
        pic.src="./Weather_App_files/no_weather.jpg";
    }

}





