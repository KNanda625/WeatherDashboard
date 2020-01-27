$(document).ready(function() {
    // Need to get App ID from the app site - specific to the API
        var appID = "287096fa33e316cb532fd655415c2d59";
        
        // $("#convertToCelsius").hide();
        // $("#convertToFahrenheit").hide();

        $(".query_btn").click(function(){
            
            var query_param = $(this).prev().val();

            if ($(this).prev().attr("placeholder") == "City") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID 
                                +"&units=imperial";
            } else if ($(this).prev().attr("placeholder") == "Zip Code") {
                var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&APPID=" + appID
                + "&units=imperial";
            }
            
            $.getJSON(weather,function(json){
                $("#city").html(json.name);
                $("#main_weather").html(json.weather[0].main);
                $("#description_weather").html(json.weather[0].description);
                $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
                $("#temperature").html(json.main.temp);
                $("#pressure").html(json.main.pressure);
                $("#humidity").html(json.main.humidity);
                $("#convertToCelsius").show();
            });
        });
    
        // Optional Code for temperature conversion
        var fahrenheit = true;

        $("#convertToCelsius").click(function() {
            
            if (fahrenheit) {
                $("#temperature").text( ((($("#temperature").text() - 32) * 5) / 9).toFixed(2) );
            }
            fahrenheit = false;
            $("#convertToCelsius").hide(); 
            $("#convertToFahrenheit").show();
        });

        $("#convertToFahrenheit").click(function() {
    
            if (fahrenheit == false) {
                $("#temperature").text( (($("#temperature").text() * (9/5)) + 32).toFixed(2) );
            }
            fahrenheit = true;
            $("#convertToFahrenheit").hide();
            $("#convertToCelsius").show(); 
        });            
    }); //ready
