$(document).ready(function() {
    // App ID
        var appID = "287096fa33e316cb532fd655415c2d59";
        
        $(".submit-btn").click(function(){
            
            var cityName = $(this).prev().val();

            if ($(this).prev().attr("placeholder") == "City") {
                
                var weather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=" + appID 
                    +"&units=imperial";
            }     
            
            $.getJSON(weather,function(json){
                $("#city").html(json.city.name);
                $("#description-weather").html(json.list[0].weather[0].description);
                $("#weather-image").attr("src", "http://openweathermap.org/img/w/" + json.list[0].weather[0].icon + ".png");
                $("#temperature").html(json.list[0].main.temp);
                $("#wind-speed").html(json.list[0].wind.speed);
                $("#humidity").html(json.list[0].main.humidity);
                // $("#uv-index").html(json.)
                
                // Day 1 
                $("#weather-image1").attr("src", "http://openweathermap.org/img/w/" + json.list[8].weather[0].icon + ".png");
                $("#temperature1").html(json.list[8].main.temp);
                $("#humidity1").html(json.list[8].main.humidity);

                // Day 2 
                $("#weather-image2").attr("src", "http://openweathermap.org/img/w/" + json.list[16].weather[0].icon + ".png");
                $("#temperature2").html(json.list[16].main.temp);
                $("#humidity2").html(json.list[16].main.humidity);

                // Day 3 
                $("#weather-image3").attr("src", "http://openweathermap.org/img/w/" + json.list[24].weather[0].icon + ".png");
                $("#temperature3").html(json.list[24].main.temp);
                $("#humidity3").html(json.list[24].main.humidity);

                // Day 4
                $("#weather-image4").attr("src", "http://openweathermap.org/img/w/" + json.list[32].weather[0].icon + ".png");
                $("#temperature4").html(json.list[32].main.temp);
                $("#humidity4").html(json.list[32].main.humidity);

                // Day 5
                $("#weather-image5").attr("src", "http://openweathermap.org/img/w/" + json.list[39].weather[0].icon + ".png");
                $("#temperature5").html(json.list[39].main.temp);
                $("#humidity5").html(json.list[39].main.humidity);
            });
        });


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
        // $(document).on("click", ".cities",  ;

        // renderButtons();
    



}); 
