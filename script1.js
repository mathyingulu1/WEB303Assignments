// WEB303 Assignment 2
// Mathy Ingulu
$(function () {

    let xhr = newe XMLHttpRequest;
	xhr.onload = function () {
		$('#solution').html(xhr.responseText).slideDown(2000);
	};
	
	
    $("a#vprospect").on("click", function(){
        xhr.open("GET", "prospect.html", true);
		xhr.send();
    $('solution').hide().css("height", "400px").load("prospect.html").
	slideDown(2000);
	});
	
	$("a#vconvert").on("click", function () {
		$('solution').hide().css("height", "600px").load("convert.html").
		slideDown(2000);
	});
	
	$("a#vretain").on("click", function () {
		$('#solution').hide().css("height", "400px").load("retain.html").
		slideDown(2000);
	});
});




