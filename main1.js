/*
	WEB 303
	Starting file for Assignment 1 
	Mathy Ingulu
*/

$(document).ready(function () {
    
	var $salary = $("#salary");
	var $percent = $("#percent");
	var $spendSpan = $("span#spend");

	salaryInput.change(onInputChanged);
	percentInput.change(onInputChanged);

$("input").keyup(function ()  {
		console.log("keyup works");
	
	function onInputChanged {
	
		if(salaryInput.val() != "" && percentInput.val() != ""){
		
			var spendAmount = salaryInput.val() * percentInput.val() 
			spendAmount = spendAmount.toFixed(2);
			spendSpan.text("$" + spendAmount);
		}
	}
});