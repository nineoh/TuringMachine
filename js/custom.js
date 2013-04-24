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
			me.tape[me.headPosition] = "_";
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

		                ruleRan = true;
		                me.stepCount++;

		                if (me.postStepCallback) me.postStepCallback(me, direction);
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
		$('#outputField').append('<div>' + me.formatTape() + '</div>');
	}
}

Tools.init = function () {
	$('#outputField').empty();
	$('SPAN#status').text('idle');
	$('SPAN#stepCount').text('0');
	$('#tape').text('');
	$('#programm').text('');
}

var addition = '[["0", "0", "_", "R", "1"],["0", "1", "_", "R", "2"],["1", "0", "0", "R", "1"],["1", "1", "0", "R", "2"],["2", "0", "0", "R", "2"],["2", "1", "_", "R", "END"]]';


/*
 * Nino's section
 */

/*
 * Initialize tape with the two digits which were entered.
 */
 var initializeUi = function (e) {
 	e.preventDefault();

 	if (!isValid())
 		return;

 	var firstVal = parseInt($('#txtFirstVal').val());
 	var secondVal = parseInt($('#txtSecondVal').val());
 	var tapeLength = firstVal + 1 + secondVal;
 	var offset = 15 - tapeLength;
 	var fieldCounter = 0;

 	$('ul#fancyTape li.active ~ li').remove();
 	$('#tape').val('');

	// Create tape cells for the input values
	var liTag = '';
	for (var i = 0; i < tapeLength; i++) {
		liTag = i < 15 ? '<li>' : '<li class="hidden">';

		if (i == (firstVal)) {
			$('ul#fancyTape').append(liTag + '&nbsp;</li>');
			$('#tape').val($('#tape').val() + 1);
		}
		else {
			$('ul#fancyTape').append(liTag + '&bull;</li>');
			$('#tape').val($('#tape').val() + 0);
		}
	}
	// fill up the rest of the tape with empty cells
	for (var i = 0; i < offset; i++) {
		$('ul#fancyTape').append('<li>&nbsp;</li>');
	}

	$('#tape').val($('#tape').val() + 1);

	// Load addition program
	$('#programm').text(addition);
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
 * Animate fancyTape
 */
 var animateStep = function (direction) {
 	if (direction.toLowerCase() == 'r') {
 		var readWriteHead = $('#fancyTape li.active');
 		$('#fancyTape li').first().remove();
 		$('#fancyTape').append('<li style="color:#f0f;">&nbsp</li>');

 		readWriteHead.removeClass('active');
 		readWriteHead.next().addClass('active');
 	}
 	else {
 		var readWriteHead = $('#fancyTape li.active');
 		$('#fancyTape li').last().remove();
 		$('#fancyTape').prepend('<li style="color:#f0f;">&nbsp</li>');

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

/*
 * Starts the simulator
 */
 var runMachine = function (e) {
 	e.preventDefault();
 	alert('run clicked!');
 };

/*
 * Performs one step on the tape
 */
 var doStep = function (e) {
 	e.preventDefault();
 	alert('step clicked');
 }


$(function () {
	/*
	 * Nino's section
	 */

	 // Initialize event handlers
	$('#txtFirstVal').change(resetErrorState);
	$('#txtSecondVal').change(resetErrorState);
	$('#btnInitialize').click(initializeUi);
	$('#btnRun').click(runMachine);
	$('#btnStep').click(doStep);


	/*
	 * Jann's section
	 */
	$('#reset').click(function () {
		Tools.init();
	}).click();

	$('#stepInterval').change(function (e) {
		$(document).trigger('speedchange', parseInt($(this).val()));
	}).change();

	$('#start').click(function () {
		var turing = new UniversalTuringMachine();
		var tools = new Tools(turing);

		var tape = $('#tape').val();
		var simulator = eval($('#programm').val());

		$(document).off('speedchange');
		$(document).on('speedchange', function (e, speed) {
			turing.stepInterval = speed;
			alert(speed);
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

		turing.postStepCallback = function (me, direction) {
			tools.logTape();
			$('SPAN#stepCount').text(me.stepCount);
			$('#tape').text(me.tape.join(''));
			animateStep(direction);
			// alert(direction);
		};

        // Run
        turing.go(tape, simulator);
    });
});