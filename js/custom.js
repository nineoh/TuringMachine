var showInput = function (e) {
	e.preventDefault();

	var firstVal = parseInt($('#txtFirstVal').val());
	var secondVal = parseInt($('#txtSecondVal').val());
	var tapeLength = firstVal + 1 + secondVal;
	var offset = 15 - tapeLength;
	var fieldCounter = 0;

	// $('ul#tape li.active ~ li').html('&bull;');
	$('ul#tape li.active ~ li').remove();

	var liTag = '';
	for (var i = 0; i < tapeLength; i++) {
		liTag = i < 15 ? '<li>' : '<li class="hidden">';

		if (i == (firstVal))
			$('ul#tape').append(liTag + '&nbsp;</li>');
		else
			$('ul#tape').append(liTag + '&bull;</li>');
	}

	for (var i = 0; i < offset; i++) {
		$('ul#tape').append('<li>&nbsp;</li>');
	}

	// for (var i = 0; i < firstVal; i++) {
	// 	$('ul#tape').append('<li>&bull;</li>');
	// 	fieldCounter++;
	// }

	// $('ul#tape').append('<li>&nbsp;</li>');
	// fieldCounter++;
		
	// for (var i = 0; i < secondVal; i++) {
	// 	$('ul#tape').append('<li>&bull;</li>');
	// 	fieldCounter++;
	// }

	// for (var i = 0; i < offset; i++) {
	// 	$('ul#tape').append('<li>&nbsp;</li>');
	// 	fieldCounter++;
	// }
};

$(function() {
	$('#btnCalculate').click(showInput);
});
