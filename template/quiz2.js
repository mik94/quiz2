(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$submit    = $('.submit');
	$timeout   = $('.timeout');

	$mouseover.on('mouseover', function() {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click(function() {
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').forEach(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).on('ready', function() {
		setTimeout(function(){
			$timeout.fadeIn('slow');
		}, 1000);
	});

})(jQuery);

function part2() {
	$.getJSON("http://www.mattbowytz.com/simple_api.json", {data: "quizData"}, function(data){
		$("#results").empty();
		var x = document.cookie.split(';');
		$("#results").append(x[0] + "<br>");
		allData = data.data;
		$("#btn1").html('Change It');
		var k = Math.floor((Math.random() * allData.length) + 1);
		var title = allData[k-1];
		var r = $("<button id='btn2' onclick='set_cookie(title)'>Keep It</button><br>");
		$("#results").append(r);
		$("#results").append(allData[k-1] + "<br>");
	});
}

function set_cookie(title){
	$("#results").append(title);
	document.cookie = "Last Value=" + title + ";";
}