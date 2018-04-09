$(document).ready(function(){
  // Declare the set of global variables for use across the js file
  var apiBase = "http://qaottcms.weathergroup.com/api/v1/appPlaylist/foo/OTT/";
  var apiAtl = "gaAtlanta?apiKey=2";
  var apiDc = "dcWashington?apiKey=2";
  var apiAtlLive = "https://qaottcms.weathergroup.com/api/v1/internalPlayback/OTT/gaAtlanta?apiKey=2"
  var apiSelection = "";
  var selectedCity = "";
  var vodURLArray = [];
  var tastyStuffURL = "";
  var sixtyNowURL = "";
  var forecastURL = "";
  var product = "";
  var finalURL = "";

  // Create a function that captures the initial city selection...
  $(document).on("click", "#submit-button", function() {
      event.preventDefault();

      // ...this code capture the product the user requests
      product = document.querySelector('input[name = "inlineRadioOptions"]:checked').value;
      console.log("this is the product: " + product);

      // ...and constructs the api call url
      selectedCity = $("#city_pick").val();
      apiSelection = apiBase + selectedCity;
      console.log(apiSelection);

       // ...and constructs ajax call to api to pull back vodURLs
      $.ajax({
        url: apiSelection,
        method: "GET"
      }).done(function(response){
        console.log(response);
        // console.log(response.response.vodURLs);
        // console.log(response.response.vodURLs[1]);
        vodURLArray = response.response.vodURLs;
        console.log(vodURLArray);

        // ...and find the index location in the results array for the current vod urls
        var index, value, result;
        for (index = 0; index < vodURLArray.length; ++index) {
          value = vodURLArray[index];
          if (value.search("TastyStuff")>0) {
            result = value;
            console.log(result);
            tastyStuffURL = result;
            break;
          }
        }

        for (index = 0; index < vodURLArray.length; ++index) {
          value = vodURLArray[index];
          if (value.search("60Now")>0) {
            result = value;
            console.log(result);
            sixtyNowURL = result;
            break;
          }
        }

        for (index = 0; index < vodURLArray.length; ++index) {
          value = vodURLArray[index];
          if (value.search("24hr")>0) {
            result = value;
            console.log(result);
            forecastURL = result;
            break;
          }
        }

        launchVideo();



      })
    })

  // Create a function to open the next page where the video player will be housed
  function launchVideo() {
    if (product == 1) {
      console.log("Actual URL: " + forecastURL);
      finalURL = forecastURL;
      window.location = finalURL;
    }

    if (product == 2) {
      console.log("Actual URL: " + sixtyNowURL);
      finalURL = sixtyNowURL;
      window.location = finalURL;
    }

    if (product == 3) {
      console.log("Actual URL: " + tastyStuffURL);
      finalURL = tastyStuffURL
      window.location = finalURL;
    }
  }



});
