/*
    Assignment 4
    Mathy Ingulu
*/

$(document).ready(function(){
    navigator.geolocation.getCurrentPosition((position) => {
		
	if (typeof(storage) !== "undefined") {
		
		localStorage.setItem();
	document.getElementById("result").innerHTML =
		
		console.log(localStorage.getItem());
	else {
		document.getElementById("result").innerHTML =
		"sorry, your browser does not support Web storage...";
	}
		
    if (empty($_COOKIE['first_time'])) {
    show_welcome_message();
    setcookie("first_time", 1, time()+157680000);  
}
    $('.field').each(function() {
        $(this).data("oldValue", getOldValue($(this).attr("id")));
    })
    .change(function(){
        if($(this).data("oldValue") != $(this).val()) {
           curCounter++;
           setField("Counter", curCounter);
        }

    }, function () { 
        console.log("Cannot use the geolocation, permission denied");
    }, {
	
	});

});
		




    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});


