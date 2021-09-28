// WEB303 Assignment 2
// Mathy Ingulu
$(function () {

var getJsonReturnValue = $.getJSON("test.json").done(function (data) {
	consoel.log("The data contained"; data);
	$.each(data.events, function (index, value) {
	$(`#events${index}`).html(`
	`).slideDown(3000);
	});
});

$(document).ready(function(){
    $("a#vprospect").click(function(){
        $("#solution").hide();
        console.log("is click working?");
        $("#solution").load("prospect.html").slideDown("slow");

    });
	console.log("getjson return value is", getJsonReturnValue);
	
$( "#clickme" ).click(function() {
  $( "#book" ).animate({
   function() {
    // Animation complete.
  });
});


