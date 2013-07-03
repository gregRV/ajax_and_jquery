$(document).ready(function(){
	$('#get_color').on('click', function(e){
		e.preventDefault();

		$.ajax({
			url: '/color',
			method: 'post',
			dataType: 'json'
		}).done(function (response) {
			$('li').eq(response.cell).css('background-color',response.color);
		});
	});
});