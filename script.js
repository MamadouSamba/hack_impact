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

$(document).ready(function() {
		let heroName = getParameterByName("hero");
		let path = "/api.php/"
		let url = "https://superheroapi.com" + path + "2139715469450866/search/" + heroName.toLowerCase(); 
		$.ajax( { 
			url: url,
			method: "GET",
			success: function(response) {
				console.log(response);
				let name = response.results[0].name;
				let image = response.results[0].image.url;
				$("#superHeroImg").attr("src", image);
				$("#superHeroName").html(name);
				
				// input the code in here for the things that you want to grab from the 
			},
		} );
	});
	
	$(".hero").click(function(e) {
		console.log(e);
		console.log(e.target.attributes["data-url"]);
	    let idx = e.target.dataset.url;
	    let url = e.target.attributes[1].value; 
	    redirectToPage = window.location.replace(url);
	});




