// WEB303 Assignment 3
// Mathy Ingulu
$(function () {

	
	$.getJSON("team.json").done(function (data) {
		console.log("The data contained", data);
		$.each(data.teammembers, function (index, value) {
			console.log("Value at index " + index + " is " + value.name);
			$(`div#team`).html(`<h3>${value.name}</h3>`, `<h4>${value.title)</h4>`, `<p>${value.bio}</p>`);
			
			$(`div#team`)append(newData); newData = '';
			
			});
		});
	}
	
	function calling_ajax() {
		
		$.ajax({
			url: 'team.json', type: 'GET',
			
			beforeSend: function() {
				$(`div#team`).html("<h5>Displaying ..</h5>");
			},
			
			error: function() { alert("Error...!"); },
			
			timeout: 5000,
			
			success: function(data){
				var newData = '';
				$.each(data.teammembers, function (index, value) {
					console.log('is it working?');
				    newData+=`<h3>${value.name}</h3>`;
				    newData+=`<h4>'+value.title+'</h4>`;
				    newData+='<p>'+value.bio+'</p>';
				    $('div#team').append(newData);
					newData = '';
				});
			},
			
			complete: function() {
				$('h5').css('display','none');
			}
		});
	};
	
	$function() {
		calling_ajax();
		
	});