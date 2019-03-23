// JavaScript Fimle
/*global $*/



const Age = $("#age").val();
const Birthdate =$("#Birthdate").val();
let redirectToPage; 

$("#submit-btn").click(function(){
	/*global localStorage */
	 const Name = $("#name").val();
	 let Category = $("#category").val();
	 localStorage.setItem('name',Name);
	 
	 
		if(Category === "fireElement"){
    		redirectToPage = window.location.replace("Fire.html");
		}
		else if(Category === "airElement"){
    		redirectToPage = window.location.replace("Air.html");
		}
		else if(Category === "waterElement"){
    		redirectToPage = window.location.replace("water.html");
		}
		else if(Category === "landElement"){
    		redirectToPage = window.location.replace("land.html");
		} 
		else { 
    		alert("Please a select a value please!");
		} 
	});
 $(".proof").click(function(){
 	var User_name = localStorage.getItem('name'); 
alert("Thanks for doing that,"+ User_name+" Mother Earth thanks you <3");
});


$(document).ready(function() {
	 //  $("#srch-term").keyup(function(event) {
  //   if (event.keyCode === 13) {
  //     $("#submit").click();
		//   }
	 // });

	$("#submit").click( function() {
		var userInput = $('#srch-term').val(); // the id of the hero (grab the class of the hero button and then grab the id which should be the name of the hero)
		var path = "/access-token/"; // the path that leads you to the search parms of the hero 
		var url = "https://superheroapi.com/" + path + + userInput.toLowerCase() + "&api_key=dc6zaTOxFJmzC"; // concenatation 
		$.ajax( { // ajax request where you tell the page what you want to do with the code you took from the api 
			url: url,
			method: "GET",
			success: function(response) {
				// input the code in here for the things that you want to grab from the 
			},
		} );
	} );
	
	// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
	function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
} 
	
	$(".hero").click(function(e) {
		console.log(e);
		console.log(e.target.attributes["data-url"]);
	    let idx = e.target.dataset.url;
	    let url = e.target.attributes[1].value; 
	    redirectToPage = window.location.replace(url);
	});


		var path = "#";
		var url = "#" + path + "?q=&api_key=";
		$.ajax( {
			url: url,
			method: "GET",
			success: function( response ) {
			},
	} );
});




