
// "https://api.openweathermap.org/data/2.5/weather?q=" +{city name}+ "&appid=" + apiKey + "&units=imperial"

// "https://api.openweathermap.org/data/2.5/forecast?q=" + city+ "&appid=" + apiKey + "&units=imperial"

// "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat="+ lat+ "&lon="+ lon

window.onload = function(){
    var day = document.querySelector(".date");
    day.textContent = moment().format("MMMM Do YYYY");
}

var citySearch
var weatherAPI
var uvIndexAPI
var forecastAPI
var apiKey = "74f672f42ab34a1e7f84a37c909f65ce";

function weatherSearch (city){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
    // var queryURLFiveDay = "https://openweathermap.org/data/2.5/forecase?q=" + city + "&apiid=" +apiKey + "&units=imperial";

    $.ajax({
        url: queryURL,
        method: "GET"
        
    }).then (function (result){
        console.log(queryURL);
        uvIndex (result.coord.lat,result.coord.lon);
        forecast (city);

        $(".city").html("<h1>" + result.name + "<h1>");
        // create elements on the front end to populate data from my results; result.main.temp will give today's temp
    });
}

function forecast (city){
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city+ "&appid=" + apiKey + "&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then (function(result){
        console.log(result); 
        // create element to populate the 5 day forecast 
    });
}

function uvIndex (lat, lon){
    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat="+ lat+ "&lon="+ lon;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then (function (result){
        console.log(result);
        console.log(result.value);
        // create element to populate the uv index 

    });

}

$("#search-btn").on("click", function() {
    var citySearch = $("#city-search").val();
    weatherSearch(citySearch);


});
