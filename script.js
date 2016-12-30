var locByIp = "http://ip-api.com/json";
var cityName = "";
var weatherByCity = "http://api.apixu.com/v1/current.json?key=ee7cd1a256344c81997185800163012&q=" + cityName;

$(document).ready(function() {
  $.getJSON(locByIp, function(json) {
  	cache:false;
    weatherByCity = weatherByCity + json.city;
    $(".city").html(json.city);
    $.getJSON(weatherByCity, function(jsonWeather) {
      $(".temp").html(jsonWeather.current.temp_f + " &#8457");
      $(".forecast").html(jsonWeather.current.condition.text);
  	  $(".weatherIcon").append("<img src = " + "http:" + jsonWeather.current.condition.icon + ">");
  	    	// $(".iconUrl").html("http:" + jsonWeather.current.condition.icon);
  	  });
  });
})