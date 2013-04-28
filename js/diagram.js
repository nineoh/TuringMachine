var Diagram = function () {
    var me = this;
    me.program = [];
    me.stateItemSize = 30;

    this.draw = function (jqContainer) {
        // ['0', '_', '_', 'R', '1'],
        var states = [];

        // init
        jsPlumb.setRenderMode(jsPlumb.SVG);


        programLoop:
            for (var i = 0; i < me.program.length; i++) {
                var transition = me.program[i];
                var state = transition[0];

                //Check if state already exists
                for (var j = 0; j < states.length; j++) {
                    var item = states[j];
                    if (item && item.id == state) {
                        continue programLoop;
                    }
                }

                while (true) {
                    var randX = Math.abs(Math.floor(Math.random() * (jqContainer.height() + 1) - me.stateItemSize));
                    var randY = Math.abs(Math.floor(Math.random() * (jqContainer.width() + 1) - me.stateItemSize));

                    if (!me.validatePosition(randX, randY, 70, states)) {
                        continue;
                    }

                    states.push({
                        id: state,
                        x: randX,
                        y: randY
                    });

                    break;
                }
            }

        // Draw states 
        for (var i = 0; i < states.length; i++) {
            var data = states[i];
            var id = 's' + data.id;

            var state = '<div id="' + id + '" class="state" style="left: ' + data.x + 'px; top: ' + data.y + 'px;">Q' + data.id + '</div>';
            $('#container').append(state);
        }

        // Create connections
        for (var k = 0; k < me.program.length; k++) {
            var a = me.program[k];

            // Handle END state
            if (a[4] == "END") {
                $('#s' + a[0]).addClass('endState');
                continue;
            }

            jsPlumb.connect({
                source: 's' + a[0],
                target: 's' + a[4],
                anchor: "Continuous",
                connector: ["StateMachine", { curviness: 20, margin: 5, cssClass: 'rule-' + a[0] + a[1] + a[2] + a[3] + a[4] }],
                paintStyle: { strokeStyle: "black", lineWidth: 1 },
                endpoint: ["Blank"],
                overlays: [
                    ["Label", { label: a[1] + ' ' + a[2] + ' ' + a[3], location: 0.5, cssClass: "label" }],
                    ["Arrow", { location: 1, width: 10, length: 10 }]
                ]
            });
        }

        // Some tasks
        jsPlumb.draggable($(".state"), {
            containment: "container"
        });

        $('#s0').addClass('beginState');
    }

    this.validatePosition = function (x, y, minDistance, positions) {
        var isValid = true;

        for (var i = 0; i < positions.length; i++) {
            var position = positions[i];
            var distance = me.getDistance(x, y, position.x, position.y);

            if (distance < minDistance) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    this.getDistance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    this.highlight = function (t) {
        $('.highlightedState').removeClass('highlightedState');
        $('#s' + t[0]).addClass('highlightedState');

        $('.highlighted').removeClass('highlighted');
        $('.rule-' + t[0] + t[1] + t[2] + t[3] + t[4]).addClass('highlighted');
    }
}
