// Set constants
var BLANK = "_";
// Define turing machine programs
var addition = '[["0", "0", "' + BLANK + '", "R", "1"],["0", "1", "' + BLANK + '", "R", "2"],["1", "0", "0", "R", "1"],["1", "1", "0", "R", "2"],["2", "0", "0", "R", "2"],["2", "1", "' + BLANK + '", "R", "END"]]';
// var multiplication = '[["0", "0", "' + BLANK + '", "R", "1"],["1", "0", "0", "R", "1"],["1", "1", "' + BLANK + '", "R", "2"],["1", "' + BLANK + '", "' + BLANK + '", "R", "2"],["2", "0", "' + BLANK + '", "R", "3"],["3", "0", "0", "R", "3"],["3", "1", "' + BLANK + '", "R", "4"],["3", "' + BLANK + '", "' + BLANK + '", "R", "4"],["4", "0", "0", "R", "4"],["4", "' + BLANK + '", "0", "L", "5"],["5", "0", "0", "L", "5"],["5", "' + BLANK + '", "' + BLANK + '", "L", "6"],["6", "0", "0", "L", "6"],["6", "' + BLANK + '", "0", "R", "2"],["2", "' + BLANK + '", "' + BLANK + '", "L", "7"],["7", "0", "0", "L", "7"],["7", "' + BLANK + '", "' + BLANK + '", "L", "8"],["8", "0", "0", "L", "8"],["8", "' + BLANK + '", "0", "R", "0"],["0", "' + BLANK + '", "' + BLANK + '", "L", "END"]]';

// modified for to use in faculty, too
var multiplication = '[["0", "1", "1", "R", "0"],["0", "0", "' + BLANK + '", "R", "1"],["1", "0", "0", "R", "1"],["1", "1", "' + BLANK + '", "R", "2"],["1", "' + BLANK + '", "' + BLANK + '", "R", "2"],["2", "0", "' + BLANK + '", "R", "3"],["3", "0", "0", "R", "3"],["3", "1", "' + BLANK + '", "R", "4"],["3", "' + BLANK + '", "' + BLANK + '", "R", "4"],["4", "0", "0", "R", "4"],["4", "' + BLANK + '", "0", "L", "5"],["5", "0", "0", "L", "5"],["5", "' + BLANK + '", "' + BLANK + '", "L", "6"],["6", "0", "0", "L", "6"],["6", "' + BLANK + '", "0", "R", "2"],["2", "' + BLANK + '", "' + BLANK + '", "L", "7"],["7", "0", "0", "L", "7"],["7", "' + BLANK + '", "' + BLANK + '", "L", "8"],["8", "0", "0", "L", "8"],["8", "' + BLANK + '", "0", "R", "0"],["0", "' + BLANK + '", "' + BLANK + '", "L", "END"]]';
var faculty = '[["0", "0", "0", "R", "2"],["2", "_", "_", "L", "12"],["2", "1", "_", "L", "END"],["2", "0", "_", "R", "3"],["3", "0", "0", "R", "3"],["3", "1", "_", "R", "4"],["3", "_", "_", "R", "4"],["4", "_", "0", "L", "5"],["5", "_", "_", "L", "6"],["5", "0", "0", "L", "5"],["6", "_", "0", "R", "7"],["6", "0", "0", "L", "6"],["7", "_", "_", "R", "0"],["7", "0", "_", "R", "8"],["8", "_", "_", "R", "9"],["8", "0", "0", "R", "8"],["9", "_", "0", "L", "5"],["9", "0", "0", "R", "9"],["12", "0", "_", "L", "13"],["13", "0", "0", "L", "13"],["13", "_", "_", "L", "14"],["14", "_", "_", "R", "15"],["14", "0", "0", "L", "13"],["15", "_", "_", "R", "31"],["15", "0", "0", "N", "31"],["31", "0", "_", "R", "16"],["16", "_", "_", "R", "17"],["16", "0", "0", "R", "16"],["17", "_", "_", "L", "98"],["17", "0", "_", "R", "18"],["18", "_", "_", "R", "19"],["18", "0", "0", "R", "18"],["19", "_", "_", "N", "20"],["19", "0", "0", "R", "18"],["20", "_", "0", "L", "21"],["21", "_", "_", "L", "44"],["21", "0", "0", "L", "21"],["44", "_", "_", "L", "22"],["44", "0", "0", "L", "21"],["22", "_", "_", "R", "23"],["22", "0", "0", "L", "21"],["23", "_", "_", "R", "45"],["45", "_", "_", "R", "24"],["24", "_", "_", "R", "25"],["24", "0", "0", "R", "24"],["25", "_", "0", "R", "40"],["25", "0", "0", "R", "25"],["40", "_", "_", "N", "50"],["40", "0", "_", "R", "41"],["41", "_", "_", "R", "42"],["41", "0", "0", "R", "41"],["42", "_", "_", "L", "43"],["42", "0", "0", "R", "41"],["43", "_", "0", "L", "21"],["50", "_", "_", "L", "52"],["51", "0", "0", "L", "51"],["51", "_", "_", "L", "52"],["52", "_", "_", "R", "53"],["52", "0", "0", "L", "51"],["53", "_", "_", "R", "62"],["62", "0", "0", "R", "63"],["63", "_", "_", "L", "64"],["63", "0", "0", "L", "54"],["64", "0", "_", "R", "65"],["65", "_", "_", "R", "66"],["66", "0", "0", "R", "90"],["90", "_", "_", "L", "91"],["90", "0", "0", "L", "67"],["67", "0", "_", "R", "68"],["68", "_", "_", "R", "69"],["68", "0", "0", "R", "68"],["69", "_", "_", "L", "70"],["69", "0", "0", "R", "68"],["70", "_", "0", "L", "71"],["71", "_", "_", "L", "72"],["71", "0", "0", "L", "71"],["72", "_", "_", "R", "73"],["72", "0", "0", "L", "71"],["73", "_", "_", "R", "66"],["91", "0", "_", "R", "92"],["92", "_", "_", "R", "93"],["92", "0", "0", "R", "92"],["93", "_", "_", "L", "94"],["93", "0", "0", "R", "92"],["94", "_", "0", "L", "95"],["95", "_", "_", "L", "96"],["95", "0", "0", "L", "95"],["96", "_", "_", "R", "97"],["96", "0", "0", "L", "95"],["97", "_", "_", "R", "15"],["98", "_", "0", "R", "END"],["54", "0", "_", "R", "55"],["55", "_", "_", "R", "56"],["55", "0", "0", "R", "55"],["56", "0", "_", "R", "57"],["57", "_", "_", "R", "58"],["57", "0", "0", "R", "57"],["58", "_", "_", "L", "59"],["58", "0", "0", "R", "57"],["59", "_", "0", "L", "21"]]';

// /* Copy part (state 0 - 5) */
// var faculty = '[["0", "0", "0", "R", "1"],["1", "0", "_", "R", "2"],["2", "0", "0", "R", "2"],["2", "1", "_", "R", "3"],["2", "_", "_", "R", "3"],["3", "0", "0", "R", "3"],["3", "_", "0", "L", "4"],["4", "0", "0", "L", "4"],["4", "_", "_", "L", "5"],["5", "0", "0", "L", "5"],["5", "_", "0", "R", "1"],["1", "_", "_", "R", "0"]'
// /* Loop back to the beginning */
// 	+ ',["0", "_", "_", "L", "6"],["6", "_", "_", "L", "7"],["7", "0", "_", "L", "8"],["8", "_", "1", "L", "9"],["9", "0", "0", "L", "9"],["9", "_", "_", "L", "10"],["10", "0", "0", "L", "9"],["10", "_", "_", "R", "11"],["11", "_", "_", "R", "100"]'
// /* Multiplication part (state 10 - ?) */
// 	+ ',["", "", "", "", ""]]';

var isStepClicked = false;

/*
 * Jann's section
 */
var UniversalTuringMachine = function () {

	var me = this;
	me.headPosition = 0;
	me.state = "0";
	me.tape = [];
	me.stepCount = 0;
	me.stepInterval = 100;

	me.successCallback = null;
	me.errorCallback = null;
	me.postStepCallback = null;
	me.startCallback = null;

	this.compare = function (a, b) {
		return a.toLowerCase() === b.toLowerCase();
	}

	this.moveLeft = function () {
		if (me.headPosition === 0) {
			me.tape.reverse().push('_');
			me.tape.reverse();
			alert('not good');
		} else {
			me.headPosition--;
		}
	}

	this.moveRight = function () {
		me.headPosition++;

		if (!me.tape[me.headPosition])
			me.tape[me.headPosition] = BLANK;
	}

	this.go = function (input, programm) {
		me.tape = input.split('');
		if (me.startCallback) me.startCallback(me);

		(function loop() {
			setTimeout(function () {

				var ruleRan = false;
				var direction = "";

				for (var i = 0; i < programm.length; i++) {
	                // Match actual me.state and actual value on me.tape
	                if (me.compare(programm[i][1], me.tape[me.headPosition])
	                && me.compare(programm[i][0], me.state)) {

	                	me.tape[me.headPosition] = programm[i][2];

		                if (me.compare(programm[i][3], "R")){
		                	me.moveRight();	
		                	direction = "R"	
		                }
		                else if (me.compare(programm[i][3], "L")){
		                	me.moveLeft();
		                	direction = "L";
		                }

		                me.state = programm[i][4];
		                $('#lblState').text(me.state);

		                ruleRan = true;
		                me.stepCount++;

		                if (me.postStepCallback) me.postStepCallback(me, direction, programm[i][2]/* value to write */);
		                break;
	            	}
	        	}

		        if (ruleRan) {
		        	loop();
		        } else {
		        	if (me.compare(me.state, "END")) {
		        		if (me.successCallback) me.successCallback();
		        	} else {
		        		if (me.errorCallback) me.errorCallback();
		        	}
		        }
		    }, 0)
		})();
	}
}

var Tools = function (turing) {
	var me = this;
	me.tm = turing;

	this.formatTape = function () {
		var result = "";

		for (var i = 0; i < me.tm.tape.length; i++) {
			var item = me.tm.tape[i];
			var lspacer = "";
			var rspacer = "";
			var itemSpacer = "&nbsp;";

			if (i === me.tm.headPosition) {
				lspacer = "[";
				rspacer = "]";
			} else {
				lspacer = "&nbsp;";
				rspacer = "&nbsp;";
			}

			result = (result + lspacer + item + rspacer + itemSpacer);
		}
		return result;
	}

	this.logTape = function (text) {
		$('#outputField').prepend('<div>' + me.formatTape() + '</div>');
	}
}

Tools.init = function () {
	$('#outputField').empty();
	$('SPAN#status').text('idle');
	$('SPAN#stepCount').text('0');
	$('#tape').val('');
	$('#programm').text('');
	resetFancyTape();
}


/*
 * Nino's section
 */

/*
 * Initialize tape with the two digits which were entered.
 */
 var initializeUi = function () {
	var operation = $('input[name="programRadio"]:checked').val();
 	var inputValues = $('#tape').val().split(1);
 	var firstVal = inputValues[0].length;
 	var secondVal = inputValues[1].length;
 	var tapeLength = firstVal + 1 + secondVal;
 	var offset = 15 - tapeLength;
 	var fieldCounter = 0;

 	$('ul#fancyTape li.active ~ li, ul#fancyTape li.active').remove();

	// Create tape cells for the input values
	var liTag = '';
	for (var i = 0; i < tapeLength; i++) {
		liTag = i < 16 ? '<li>' : '<li class="hidden">';

		if (i == 0) {
			$('ul#fancyTape').append('<li class="active">0</li>');
		}

		else if (i == firstVal) {
			$('ul#fancyTape').append(liTag + '1</li>');
		}
		else {
			$('ul#fancyTape').append(liTag + '0</li>');
		}
	}

	if (offset > 0) {
		if (operation == 'faculty')
			$('ul#fancyTape').append('<li>' + BLANK + '</li>');
		else
			$('ul#fancyTape').append('<li>1</li>');
		
		// fill up the rest of the tape with empty cells
		for (var i = 0; i < offset; i++) {
			$('ul#fancyTape').append('<li>' + BLANK + '</li>');
		}
	}
	else {
		if (operation == 'faculty')
			$('ul#fancyTape').append('<li class="hidden">' + BLANK + '</li>');
		else
			$('ul#fancyTape').append('<li class="hidden">1</li>');
	}


	// Load program
	if (operation == 'addition')
		$('#programm').text(addition);
	else if (operation == 'multiplication')
		$('#programm').text(multiplication);
	else if (operation == 'faculty') 
		$('#programm').text(faculty);
	else
		alert(operation + ' is not implemented yet!');
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
 	if (($('input[name="programRadio"]:checked').val() != 'faculty') && $('#txtSecondVal').val() == '') {
 		isAllValid = false;
 		$('#txtSecondVal').addClass('errorFocus');
 	}

 	return isAllValid;
 };

/*
 * Animate fancyTape
 */
 var animateStep = function (direction, toWrite) {

 	$('ul#fancyTape li.active').text(toWrite);

 	if (direction.toLowerCase() == 'r') {
 		var readWriteHead = $('#fancyTape li.active');
 		$('#fancyTape li').not(':hidden').first().addClass('hidden');
 		if ($('#fancyTape li').not(':hidden').last().next().is('li'))
 			$('#fancyTape li').not(':hidden').last().next().removeClass('hidden');
 		else
 			$('#fancyTape').append('<li>' + BLANK + '</li>');

 		readWriteHead.removeClass('active');
 		readWriteHead.next().addClass('active');
 	}
 	else {
 		var readWriteHead = $('#fancyTape li.active');
 		$('#fancyTape li').not(':hidden').last().addClass('hidden');
 		if ($('#fancyTape li').not(':hidden').first().prev().is('li'))
 			$('#fancyTape li').not(':hidden').first().prev().removeClass('hidden');
 		else
 			$('#fancyTape').prepend('<li>' + BLANK + '</li>');

 		readWriteHead.removeClass('active');
 		readWriteHead.prev().addClass('active');
 	}
 };

/*
 * Reset the error state of the given input field.
 */
 var resetErrorState = function () {
 	$(this).removeClass('errorFocus');
 };

 var resetFancyTape = function () {
 	$('ul#fancyTape li').remove();
	for (var i = 0; i < 31; i++) {
		if (i == 15)
			$('ul#fancyTape').append('<li class="active">' + BLANK + '</li>');
		else
			$('ul#fancyTape').append('<li>' + BLANK + '</li>');
	}

 };

 var getOperator = function (operation) {
 	if (operation == 'addition')
 		return '+';
 	else if (operation == 'multiplication')
 		return '*';
 	else if (operation == 'faculty')
 		return '!';
 	else
 		return '';
 };

 var setInputFields = function () {
 	var operation = $(this).val();
 	$('#lblOperator').text(getOperator(operation));

 	if (operation == 'faculty')
 		$('#txtSecondVal').addClass('hidden');
 	else
 		$('#txtSecondVal').removeClass('hidden');
 };


$(function () {
	/*
	 * Nino's section
	 */

	// Initialize event handlers
	$('input[name="programRadio"]').change(setInputFields);

	$('#txtFirstVal').change(resetErrorState);
	$('#txtSecondVal').change(resetErrorState);
	$('#btnInitialize').click(function (e) {
	 	e.preventDefault();

	 	if (!isValid())
	 		return;

	 	// Reset all inputs
	 	$('#outputField').empty();
		$('SPAN#status').text('idle');
		$('SPAN#stepCount').text('0');
		$('#tape').val('');
		$('#programm').text('');
		resetFancyTape();
		
	 	var firstVal = parseInt($('#txtFirstVal').val());
		var secondVal = parseInt($('#txtSecondVal').val());
		var tapeString = '';
		for (var i = 0; i < firstVal; i++) {
			tapeString += '0';
		}
		tapeString += '1';
		for (var i = 0; i < secondVal; i++) {
			tapeString += '0';
		}
		
		if ($('input[name="programRadio"]:checked').val() != 'faculty')
			tapeString += '1';

		$('#tape').val(tapeString);

		initializeUi();
	});

	$('#btnStep').click(function (e) {
		isStepClicked = true;
		$('#start').click();
	});


	/*
	 * Jann's section
	 */
	$('#reset').click(function () {
		Tools.init();
		$('#txtFirstVal').val('');
		$('#txtSecondVal').val('');
	}).click();

	$('#stepInterval').change(function (e) {
		$(document).trigger('speedchange', parseInt($(this).val()));
	}).change();

	$('#start').click(function () {
		if (!isValid())
			return;

		isFirstRun = false;

		var turing = new UniversalTuringMachine();
		var tools = new Tools(turing);

		var tape = $('#tape').val();
		var simulator = eval($('#programm').val());

		$(document).off('speedchange');
		$(document).on('speedchange', function (e, speed) {
			turing.stepInterval = speed;
			$('#lblSpeed').text(speed);
		});

		turing.startCallback = function () {
			tools.logTape();
			$('SPAN#status').text('running');
		}

		turing.successCallback = function () {
			$('SPAN#status').text('success');
		};

		turing.errorCallback = function () {
			$('SPAN#status').text('error!');
		};

		turing.postStepCallback = function (me, direction, toWrite) {
			tools.logTape();
			$('SPAN#stepCount').text(me.stepCount);
			$('#tape').val(me.tape.join(''));
			animateStep(direction, toWrite);

			if (isStepClicked) {
				alert('next');
			}
		};

        // Run
        turing.go(tape, simulator);
    });

    // programToLoad = $('input[@name="programRadio"]:checked').val();
    $('#lblOperator').text(getOperator($('input[name="programRadio"]:checked').val()));
	$('#lblSpeed').text($('#stepInterval').val());
});