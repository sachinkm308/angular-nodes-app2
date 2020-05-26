/* function myTest() {
    alert("Welcome to custom JS");
    console.log('abc');
}

/* $(function() {
    alert("Hello");
}) */
/* var ctx = document.getElementById("myChart");
var mixedChart = new Chart(ctx, {
    type: "bubble",
    data: {
        datasets: [{
            label: "John",
            data: [{
                x: 2.4,
                y: 7,
                r: 10,
            }, ],
            backgroundColor: "#ff6384",
            hoverBackgroundColor: "#ff6384",
        }, ],
        labels: ["January", "February", "March", "April"],
        order: 0,
    },
    options: {
        dragData: true,
        dragX: false,
        dragDataRound: 0, // round to full integers (0 decimals)
        dragOptions: {
            // magnet: { // enable to stop dragging after a certain value
            //   to: Math.round
            // },
            showTooltip: true, // Recommended. This will show the tooltip while the user
            // drags the datapoint
        },
        onDragStart: function(e, element) {
            // where e = event
        },
        onDrag: function(e, datasetIndex, index, value) {
            // change cursor style to grabbing during drag action
            e.target.style.cursor = "grabbing";
            // where e = event
        },
        onDragEnd: function(e, datasetIndex, index, value) {
            // restore default cursor style upon drag release
            e.target.style.cursor = "default";
            // where e = event
        },
    },
});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function addNew() {
    console.log("addNew Clicked");
    addData(mixedChart, "Pau", [3, 4, 7, 10]);
} */

/* var mixedChart = new Chart("myChart", {
    type: "bubble",
    data: {
        datasets: [{
            label: "John",
            data: [{
                x: 2.4,
                y: 7,
                r: 10,
            }, ],
            backgroundColor: "#ff6384",
            hoverBackgroundColor: "#ff6384",
        }, ],
        labels: ["January", "February", "March", "April"],
        order: 0,
    },
    options: {
        dragData: true,
        dragX: false,
        dragDataRound: 0, // round to full integers (0 decimals)
        dragOptions: {
            // magnet: { // enable to stop dragging after a certain value
            //   to: Math.round
            // },
            showTooltip: true, // Recommended. This will show the tooltip while the user
            // drags the datapoint
        },
        onDragStart: function(e, element) {
            // where e = event
        },
        onDrag: function(e, datasetIndex, index, value) {
            // change cursor style to grabbing during drag action
            e.target.style.cursor = "grabbing";
            // where e = event
        },
        onDragEnd: function(e, datasetIndex, index, value) {
            // restore default cursor style upon drag release
            e.target.style.cursor = "default";
            // where e = event
        },
    },
}); */

/* var options = {
    type: "bubble",
    data: {
        datasets: [{
                label: "John",
                data: [{
                    x: 3,
                    y: 7,
                    r: 10,
                }, ],
                backgroundColor: "#ff6384",
                hoverBackgroundColor: "#ff6384",
            },
            {
                label: "Paul",
                data: [{
                    x: 6,
                    y: 2,
                    r: 10,
                }, ],
                backgroundColor: "#ff6384",
                hoverBackgroundColor: "#ff6384",
            },
            {
                label: "George",
                data: [{
                    x: 2,
                    y: 6,
                    r: 10,
                }, ],
                backgroundColor: "#ff6384",
                hoverBackgroundColor: "#ff6384",
            },
            {
                label: "Ringo",
                data: [{
                    x: 5,
                    y: 3,
                    r: 10,
                }, ],
                backgroundColor: "#ff6384",
                hoverBackgroundColor: "#ff6384",
            },
            {
                label: "John",
                data: [{
                    x: 2,
                    y: 1,
                    r: 10,
                }, ],
                backgroundColor: "#ff6384",
                hoverBackgroundColor: "#ff6384",
            },
            {
                label: "George",
                data: [{
                    x: 1,
                    y: 3,
                    r: 10,
                }, ],
                backgroundColor: "#ff6384",
                hoverBackgroundColor: "#ff6384",
            },
            {
                label: "Ringo",
                data: [{
                    x: 1,
                    y: 1,
                    r: 10,
                }, ],
                backgroundColor: "#ff6384",
                hoverBackgroundColor: "#ff6384",
            },
            {
                label: "George",
                data: [{
                    x: 1,
                    y: 2,
                    r: 10,
                }, ],
                backgroundColor: "#ff6384",
                hoverBackgroundColor: "#ff6384",
            },
        ],
    },
};

var ctx = document.getElementById("chartJSContainer");
new Chart(ctx, options); */