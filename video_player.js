$(document).ready(function(){
  // Declare the set of global variables for use across the js file


  //Code below grabs the URL and extracts the search value
  //In this instance the search value is the video URL
  var parser = document.createElement('a');
  parser.href = window.location.href;
  console.log(parser.href);

  $('#video').attr("src",parser.href);




});
