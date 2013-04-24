$(function() {
/*
 * Initialize tape with the two digits which were entered.
 */
 var initialize = function (e) {
 	e.preventDefault();

 	if (!isValid())
 		return;

 	var firstVal = parseInt($('#txtFirstVal').val());
 	var secondVal = parseInt($('#txtSecondVal').val());
 	var tapeLength = firstVal + 1 + secondVal;
 	var offset = 15 - tapeLength;
 	var fieldCounter = 0;

 	$('ul#tape li.active ~ li').remove();

	// Create tape cells for the input values
	var liTag = '';
	for (var i = 0; i < tapeLength; i++) {
		liTag = i < 15 ? '<li>' : '<li class="hidden">';

		if (i == (firstVal))
			$('ul#tape').append(liTag + '&nbsp;</li>');
		else
			$('ul#tape').append(liTag + '&bull;</li>');
	}
	// fill up the rest of the tape with empty cells
	for (var i = 0; i < offset; i++) {
		$('ul#tape').append('<li>&nbsp;</li>');
	}

};

/*
 * Checks if the input fields aren't empty.
 */
 var isValid = function () {
 	var isAllValid = true;

 	if ($('#txtFirstVal').val() == '') {
 		isAllValid = false;
 		$('#txtFirstVal').addClass('errorFocus');
 	}
 	if ($('#txtSecondVal').val() == '') {
 		isAllValid = false;
 		$('#txtSecondVal').addClass('errorFocus');
 	}

 	return isAllValid;
 };

/*
 * Reset the error state of the given input field.
 */
 var resetErrorState = function () {
 	$(this).removeClass('errorFocus');
 };


// Initialzie event handlers
 $('#txtFirstVal').change(resetErrorState);
 $('#txtSecondVal').change(resetErrorState);
 $('#btnInitialize').click(initialize);

});