// Set constants
var BLANK = "_";
// Define turing machine programs
var addition = '[["0", "0", "' + BLANK + '", "R", "1"],["0", "1", "' + BLANK + '", "R", "2"],["1", "0", "0", "R", "1"],["1", "1", "0", "R", "2"],["2", "0", "0", "R", "2"],["2", "1", "' + BLANK + '", "R", "END"]]';
// var multiplication = '[["0", "0", "' + BLANK + '", "R", "1"],["1", "0", "0", "R", "1"],["1", "1", "' + BLANK + '", "R", "2"],["1", "' + BLANK + '", "' + BLANK + '", "R", "2"],["2", "0", "' + BLANK + '", "R", "3"],["3", "0", "0", "R", "3"],["3", "1", "' + BLANK + '", "R", "4"],["3", "' + BLANK + '", "' + BLANK + '", "R", "4"],["4", "0", "0", "R", "4"],["4", "' + BLANK + '", "0", "L", "5"],["5", "0", "0", "L", "5"],["5", "' + BLANK + '", "' + BLANK + '", "L", "6"],["6", "0", "0", "L", "6"],["6", "' + BLANK + '", "0", "R", "2"],["2", "' + BLANK + '", "' + BLANK + '", "L", "7"],["7", "0", "0", "L", "7"],["7", "' + BLANK + '", "' + BLANK + '", "L", "8"],["8", "0", "0", "L", "8"],["8", "' + BLANK + '", "0", "R", "0"],["0", "' + BLANK + '", "' + BLANK + '", "L", "END"]]';
// modified for to use in faculty, too
var multiplication = '[["0", "1", "1", "R", "0"],["0", "0", "' + BLANK + '", "R", "1"],["1", "0", "0", "R", "1"],["1", "1", "' + BLANK + '", "R", "2"],["1", "' + BLANK + '", "' + BLANK + '", "R", "2"],["2", "0", "' + BLANK + '", "R", "3"],["3", "0", "0", "R", "3"],["3", "1", "' + BLANK + '", "R", "4"],["3", "' + BLANK + '", "' + BLANK + '", "R", "4"],["4", "0", "0", "R", "4"],["4", "' + BLANK + '", "0", "L", "5"],["5", "0", "0", "L", "5"],["5", "' + BLANK + '", "' + BLANK + '", "L", "6"],["6", "0", "0", "L", "6"],["6", "' + BLANK + '", "0", "R", "2"],["2", "' + BLANK + '", "' + BLANK + '", "L", "7"],["7", "0", "0", "L", "7"],["7", "' + BLANK + '", "' + BLANK + '", "L", "8"],["8", "0", "0", "L", "8"],["8", "' + BLANK + '", "0", "R", "0"],["0", "' + BLANK + '", "' + BLANK + '", "L", "END"]]';
var faculty = '[["0", "0", "0", "R", "2"],["2", "' + BLANK + '", "' + BLANK + '", "L", "12"],["2", "1", "' + BLANK + '", "L", "END"],["2", "0", "' + BLANK + '", "R", "3"],["3", "0", "0", "R", "3"],["3", "1", "' + BLANK + '", "R", "4"],["3", "' + BLANK + '", "' + BLANK + '", "R", "4"],["4", "' + BLANK + '", "0", "L", "5"],["5", "' + BLANK + '", "' + BLANK + '", "L", "6"],["5", "0", "0", "L", "5"],["6", "' + BLANK + '", "0", "R", "7"],["6", "0", "0", "L", "6"],["7", "' + BLANK + '", "' + BLANK + '", "R", "0"],["7", "0", "' + BLANK + '", "R", "8"],["8", "' + BLANK + '", "' + BLANK + '", "R", "9"],["8", "0", "0", "R", "8"],["9", "' + BLANK + '", "0", "L", "5"],["9", "0", "0", "R", "9"],["12", "0", "' + BLANK + '", "L", "13"],["13", "0", "0", "L", "13"],["13", "' + BLANK + '", "' + BLANK + '", "L", "14"],["14", "' + BLANK + '", "' + BLANK + '", "R", "15"],["14", "0", "0", "L", "13"],["15", "' + BLANK + '", "' + BLANK + '", "R", "31"],["15", "0", "0", "N", "31"],["31", "0", "' + BLANK + '", "R", "16"],["16", "' + BLANK + '", "' + BLANK + '", "R", "17"],["16", "0", "0", "R", "16"],["17", "' + BLANK + '", "' + BLANK + '", "L", "98"],["17", "0", "' + BLANK + '", "R", "18"],["18", "' + BLANK + '", "' + BLANK + '", "R", "19"],["18", "0", "0", "R", "18"],["19", "' + BLANK + '", "' + BLANK + '", "N", "20"],["19", "0", "0", "R", "18"],["20", "' + BLANK + '", "0", "L", "21"],["21", "' + BLANK + '", "' + BLANK + '", "L", "44"],["21", "0", "0", "L", "21"],["44", "' + BLANK + '", "' + BLANK + '", "L", "22"],["44", "0", "0", "L", "21"],["22", "' + BLANK + '", "' + BLANK + '", "R", "23"],["22", "0", "0", "L", "21"],["23", "' + BLANK + '", "' + BLANK + '", "R", "45"],["45", "' + BLANK + '", "' + BLANK + '", "R", "24"],["24", "' + BLANK + '", "' + BLANK + '", "R", "25"],["24", "0", "0", "R", "24"],["25", "' + BLANK + '", "0", "R", "40"],["25", "0", "0", "R", "25"],["40", "' + BLANK + '", "' + BLANK + '", "N", "50"],["40", "0", "' + BLANK + '", "R", "41"],["41", "' + BLANK + '", "' + BLANK + '", "R", "42"],["41", "0", "0", "R", "41"],["42", "' + BLANK + '", "' + BLANK + '", "L", "43"],["42", "0", "0", "R", "41"],["43", "' + BLANK + '", "0", "L", "21"],["50", "' + BLANK + '", "' + BLANK + '", "L", "52"],["51", "0", "0", "L", "51"],["51", "' + BLANK + '", "' + BLANK + '", "L", "52"],["52", "' + BLANK + '", "' + BLANK + '", "R", "53"],["52", "0", "0", "L", "51"],["53", "' + BLANK + '", "' + BLANK + '", "R", "62"],["62", "0", "0", "R", "63"],["63", "' + BLANK + '", "' + BLANK + '", "L", "64"],["63", "0", "0", "L", "54"],["64", "0", "' + BLANK + '", "R", "65"],["65", "' + BLANK + '", "' + BLANK + '", "R", "66"],["66", "0", "0", "R", "90"],["90", "' + BLANK + '", "' + BLANK + '", "L", "91"],["90", "0", "0", "L", "67"],["67", "0", "' + BLANK + '", "R", "68"],["68", "' + BLANK + '", "' + BLANK + '", "R", "69"],["68", "0", "0", "R", "68"],["69", "' + BLANK + '", "' + BLANK + '", "L", "70"],["69", "0", "0", "R", "68"],["70", "' + BLANK + '", "0", "L", "71"],["71", "' + BLANK + '", "' + BLANK + '", "L", "72"],["71", "0", "0", "L", "71"],["72", "' + BLANK + '", "' + BLANK + '", "R", "73"],["72", "0", "0", "L", "71"],["73", "' + BLANK + '", "' + BLANK + '", "R", "66"],["91", "0", "' + BLANK + '", "R", "92"],["92", "' + BLANK + '", "' + BLANK + '", "R", "93"],["92", "0", "0", "R", "92"],["93", "' + BLANK + '", "' + BLANK + '", "L", "94"],["93", "0", "0", "R", "92"],["94", "' + BLANK + '", "0", "L", "95"],["95", "' + BLANK + '", "' + BLANK + '", "L", "96"],["95", "0", "0", "L", "95"],["96", "' + BLANK + '", "' + BLANK + '", "R", "97"],["96", "0", "0", "L", "95"],["97", "' + BLANK + '", "' + BLANK + '", "R", "15"],["98", "' + BLANK + '", "0", "R", "END"],["54", "0", "' + BLANK + '", "R", "55"],["55", "' + BLANK + '", "' + BLANK + '", "R", "56"],["55", "0", "0", "R", "55"],["56", "0", "' + BLANK + '", "R", "57"],["57", "' + BLANK + '", "' + BLANK + '", "R", "58"],["57", "0", "0", "R", "57"],["58", "' + BLANK + '", "' + BLANK + '", "L", "59"],["58", "0", "0", "R", "57"],["59", "' + BLANK + '", "0", "L", "21"]]';
// /* Copy part (state 0 - 5) */
// var faculty = '[["0", "0", "0", "R", "1"],["1", "0", "_", "R", "2"],["2", "0", "0", "R", "2"],["2", "1", "_", "R", "3"],["2", "_", "_", "R", "3"],["3", "0", "0", "R", "3"],["3", "_", "0", "L", "4"],["4", "0", "0", "L", "4"],["4", "_", "_", "L", "5"],["5", "0", "0", "L", "5"],["5", "_", "0", "R", "1"],["1", "_", "_", "R", "0"]'
// /* Loop back to the beginning */
// 	+ ',["0", "_", "_", "L", "6"],["6", "_", "_", "L", "7"],["7", "0", "_", "L", "8"],["8", "_", "1", "L", "9"],["9", "0", "0", "L", "9"],["9", "_", "_", "L", "10"],["10", "0", "0", "L", "9"],["10", "_", "_", "R", "11"],["11", "_", "_", "R", "100"]'
// /* Multiplication part (state 10 - ?) */
// 	+ ',["", "", "", "", ""]]';

var isStepClicked = false;

var UniversalTuringMachine = function () {

	var me = this;
	me.headPosition = 0;
	me.state = "0";
	me.tape = [];
	me.stepCount = 0;
	me.stepInterval = 1000;

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
			// alert('not good');
		} else {
			me.headPosition--;
		}
	}

	this.moveRight = function () {
		me.headPosition++;

		if (!me.tape[me.headPosition])
			me.tape[me.headPosition] = BLANK;
	}

	this.preGo = function(input){
	    me.tape = input.split('');
	    if (me.startCallback) me.startCallback(me);

	}

	this.go = function (programm, cont) {
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

		                if (me.postStepCallback) me.postStepCallback(me, direction, programm[i][2]/* value to write */, programm[i]);
		                break;
	            	}
	        	}

				if (ruleRan) {
				    if (cont === true) {
				        loop();
				    }
				} else {
		        	if (me.compare(me.state, "END")) {
		        		if (me.successCallback) me.successCallback();
		        	} else {
		        		if (me.errorCallback) me.errorCallback();
		        	}
		        }
			}, me.stepInterval)
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

var _diagram = null;
var _sl = false;

var _t = null;
var _tm = null;

/*
 * Initialize the fancy tape with the digits which were entered.
 */
 var initializeUi = function () {
	var operation = $('input[name="programRadio"]:checked').val();
	var tapeString = $('#tape').val();
	var tapeStringLength = tapeString.length;
	var offset = 16 - tapeStringLength;

 	$('ul#fancyTape li.active ~ li, ul#fancyTape li.active').remove();

 	for (var i = 0; i < tapeStringLength; i++) {
 		if (i == 0)
 			$('ul#fancyTape').append('<li class="active">' + tapeString.charAt(i) + '</li>');
 		else if (i > 15)
 			$('ul#fancyTape').append('<li class="hidden">' + tapeString.charAt(i) + '</li>');
 		else
	 		$('ul#fancyTape').append('<li>' + tapeString.charAt(i) + '</li>');
 	}

 	for (var i = 0; i < offset; i++) {
 		$('ul#fancyTape').append('<li>' + BLANK + '</li>');
 	}


     // Load program
 	var itemToLoad = null;

	if (operation == 'addition')
	    itemToLoad = addition;
	else if (operation == 'multiplication')
	    itemToLoad = multiplication;
	else if (operation == 'faculty') 
	    itemToLoad = faculty;
	else
	    alert(operation + ' is not implemented yet!');

	$('#programm').text(itemToLoad);

     // Load diagram globally
	_diagram = new Diagram();
	_diagram.program = eval(itemToLoad);
	_diagram.draw($('#diagram'));
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
		
		var operation = $('input[name="programRadio"]:checked').val();
	 	var firstVal = parseInt($('#txtFirstVal').val());
		var secondVal = operation == 'faculty' ? 0 : parseInt($('#txtSecondVal').val());
		var tapeString = '';
		for (var i = 0; i < firstVal; i++) {
			tapeString += '0';
		}
		tapeString += '1';
		for (var i = 0; i < secondVal; i++) {
			tapeString += '0';
		}
		
		if (operation != 'faculty')
			tapeString += '1';

		$('#tape').val(tapeString);

		initializeUi();
	});

	$('#btnStep').click(function (e) {
	    if (_sl == false) {
	        if (!isValid())
	            return;

	        _tm = new UniversalTuringMachine();
	        _t = new Tools(_tm);

	        var tape = $('#tape').val();
	        var simulator = eval($('#programm').val());

	        $(document).off('speedchange');
	        $(document).on('speedchange', function (e, speed) {
	            _tm.stepInterval = speed;
	            $('#lblSpeed').text(speed);
	        });

	        _tm.startCallback = function () {
	            _t.logTape();
	            $('SPAN#status').text('running');
	        }

	        _tm.successCallback = function () {
	            $('SPAN#status').text('success');
	        };

	        _tm.errorCallback = function () {
	            $('SPAN#status').text('error!');
	        };

	        _tm.postStepCallback = function (me, direction, toWrite, rule) {
	            _t.logTape();
	            $('SPAN#stepCount').text(me.stepCount);
	            $('#tape').val(me.tape.join(''));
	            animateStep(direction, toWrite);
	            _diagram.highlight(rule);
	        };

	        // Run
	        _tm.preGo(tape);
	        _tm.go(simulator, false);
	        _sl = true;
	    } else {
	        var simulator = eval($('#programm').val());
	        _tm.go(simulator, false);
	    }

	});

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

		turing.postStepCallback = function (me, direction, toWrite, rule) {
			tools.logTape();
			$('SPAN#stepCount').text(me.stepCount);
			$('#tape').val(me.tape.join(''));
			animateStep(direction, toWrite);
			_diagram.highlight(rule);
		};

	    // Run
		turing.preGo(tape);
        turing.go(simulator, true);
    });

    $('#lblOperator').text(getOperator($('input[name="programRadio"]:checked').val()));
	$('#lblSpeed').text($('#stepInterval').val());
});