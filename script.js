$(document).ready(function() {
    // App ID
        var appID = "287096fa33e316cb532fd655415c2d59";
        function weather_data(){
            
            cityName = $(this).attr("data-name")
            console.log(cityName)

            if (cityName == undefined) {
                var cityName = $(this).prev().val();
            } 

            console.log(cityName)

            var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + appID 
                +"&units=imperial";
            
            var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=" + appID 
                +"&units=imperial";
  
            
            
            $.getJSON(weather,function(json){
                $("#city").html(json.name);
                // $("#date").html(json.timezone);
                $("#description-weather").html(json.weather[0].description);
                $("#weather-image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
                $("#temperature").html(json.main.temp);
                $("#wind-speed").html(json.wind.speed);
                $("#humidity").html(json.main.humidity);

                var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?appid=" + appID + "&lat=" + json.coord.lat + "&lon=" + json.coord.lon;

                $.getJSON(uvIndex,function(uv_json){
                    $("#uv-index").html(uv_json.value);
                    if (uv_json.value < 3.00) {
                        document.getElementById("uv-index").setAttribute("style","background-color:lightgreen");
                    } else if (uv_json.value > 3.00 & uv_json.value < 7.00) {
                        document.getElementById("uv-index").setAttribute("style","background-color:yellow");
                    } else {
                        document.getElementById("uv-index").setAttribute("style","background-color:red");
                    }
                });
            });

            $.getJSON(forecast,function(json){
                // Day 1 
                $("#weather-image1").attr("src", "http://openweathermap.org/img/w/" + json.list[0].weather[0].icon + ".png");
                $("#date1").html(json.list[0].dt_txt);
                $("#temperature1").html(json.list[0].main.temp);
                $("#humidity1").html(json.list[0].main.humidity);

                // Day 2 
                $("#weather-image2").attr("src", "http://openweathermap.org/img/w/" + json.list[8].weather[0].icon + ".png");
                $("#date2").html(json.list[8].dt_txt);
                $("#temperature2").html(json.list[8].main.temp);
                $("#humidity2").html(json.list[8].main.humidity);

                // Day 3 
                $("#weather-image3").attr("src", "http://openweathermap.org/img/w/" + json.list[16].weather[0].icon + ".png");
                $("#date3").html(json.list[16].dt_txt);
                $("#temperature3").html(json.list[16].main.temp);
                $("#humidity3").html(json.list[16].main.humidity);

                // Day 4
                $("#weather-image4").attr("src", "http://openweathermap.org/img/w/" + json.list[24].weather[0].icon + ".png");
                $("#date4").html(json.list[24].dt_txt);
                $("#temperature4").html(json.list[24].main.temp);
                $("#humidity4").html(json.list[24].main.humidity);

                // Day 5
                $("#weather-image5").attr("src", "http://openweathermap.org/img/w/" + json.list[32].weather[0].icon + ".png");
                $("#date5").html(json.list[32].dt_txt);
                $("#temperature5").html(json.list[32].main.temp);
                $("#humidity5").html(json.list[32].main.humidity);
            });
        }
        
        $(".submit-btn").click(weather_data);


        // Adding previous searches to div
        var citySearches = [];

        function renderButtons() {

            // Delete buttons before adding new ones
            $("#past-searches").empty();

            // Loop through array of cities
            for (var i = 0; i < citySearches.length; i++) {

                // Dynamically generate buttons for each city in array
                var a = $("<button>");
                // Add class "cities" to button
                a.addClass("cities");
                // Adding data attribute
                a.attr("data-name", citySearches[i]);
                // Provide initial button text
                a.text(citySearches[i]);
                // Add buttons to past searches div
                $("#past-searches").append(a);
            }
        }

        // This function handles events where one button is clicked
        $("#search-btn").on("click", function(event) {
            event.preventDefault();

            // Grabs input from text box
            var cityInput = $("#search-city").val().trim();

            // Adding city from input into array
            citySearches.push(cityInput);
            console.log(citySearches);

            // Call renderButtons function
            renderButtons();
        });

        // Function for displaying weather info...Can't figure out how to get it to work
        $(document).on("click", ".cities", weather_data);
        renderButtons();
 

}); 
