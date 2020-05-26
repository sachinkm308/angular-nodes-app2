import { Component } from '@angular/core';

import { Chart } from 'node_modules/chart.js';

import { ABC } from 'node_modules/chartjs-plugin-dragdata';

declare const myTest: any;

declare const addData: any;
declare const displayData: any;
declare const addNew: any;

declare const onSubmit: any;

declare const onClick: any;

declare const onToggle: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-nodes-app2';

  ngOnInit() {
    /* var mixedChart = new Chart('myChart', {
      type: 'bubble',
      data: {
        datasets: [
          {
            label: 'John',
            data: [
              {
                x: 2.4,
                y: 7,
                r: 10,
              },
            ],
            backgroundColor: '#ff6384',
            hoverBackgroundColor: '#ff6384',
          },
        ],
        labels: ['January', 'February', 'March', 'April'],
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
        onDragStart: function (e, element) {
          // where e = event
        },
        onDrag: function (e, datasetIndex, index, value) {
          // change cursor style to grabbing during drag action
          e.target.style.cursor = 'grabbing';
          // where e = event
        },
        onDragEnd: function (e, datasetIndex, index, value) {
          // restore default cursor style upon drag release
          e.target.style.cursor = 'default';
          // where e = event
        },
      },
    }); */

    var chart = new Chart('myChart', {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Scatter Dataset',
            data: [
              {
                x: 1,
                y: 1,
              },
            ],
            pointBackgroundColor: 'red',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
            showLine: true,
            fill: false,
          },
          {
            label: 'Green Dataset',
            data: [
              {
                x: 3,
                y: 3,
              },
            ],
            pointBackgroundColor: 'green',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
          },
          {
            label: 'Yellow Dataset',
            data: [
              {
                x: 0,
                y: 4,
              },
            ],
            pointBackgroundColor: 'yellow',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
        legend: false,
        dragData: true,
        tooltips: false,
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 8,
                padding: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
    });
  }

  onClickYellowRed() {
    console.log('Inside Yellow Black');
    var chart = new Chart('myChart', {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Scatter Dataset',
            data: [
              {
                x: 1,
                y: 1,
              },
              {
                x: 0,
                y: 4,
              },
            ],
            pointBackgroundColor: 'white',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
            showLine: true,
            fill: false,
            borderColor: 'blue',
          },
          {
            label: 'Scatter Dataset',
            data: [
              {
                x: 3,
                y: 3,
              },
            ],
            pointBackgroundColor: 'green',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
        legend: false,
        dragData: true,
        tooltips: false,
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 8,
                padding: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
    });
  }

  onClickRedGreen() {
    console.log('Inside Yellow Black');
    var chart = new Chart('myChart', {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Scatter Dataset',
            data: [
              {
                x: 1,
                y: 1,
              },
              {
                x: 3,
                y: 3,
              },
            ],
            pointBackgroundColor: 'white',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
            showLine: true,
            fill: false,
            borderColor: 'blue',
          },
          {
            label: 'Scatter Dataset',
            data: [
              {
                x: 0,
                y: 4,
              },
            ],
            pointBackgroundColor: 'yellow',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
        legend: false,
        dragData: true,
        tooltips: false,
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 8,
                padding: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
    });
  }

  onClickYellowGreen() {
    console.log('Inside Yellow Green');
    var chart = new Chart('myChart', {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Scatter Dataset',
            data: [
              {
                x: 0,
                y: 4,
              },
              {
                x: 3,
                y: 3,
              },
            ],
            pointBackgroundColor: 'white',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
            showLine: true,
            fill: false,
            borderColor: 'blue',
          },
          {
            label: 'Scatter Dataset',
            data: [
              {
                x: 1,
                y: 1,
              },
            ],
            pointBackgroundColor: 'red',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
        legend: false,
        dragData: true,
        tooltips: false,
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 8,
                padding: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
    });
  }

  onSubmit() {
    var val1 = (<HTMLFormElement>document.getElementById('color1')).value;
    var val2 = (<HTMLFormElement>document.getElementById('color2')).value;
    console.log('Submit Clicked');
    console.log(val1);

    if (
      (val1 === 'yellow' && val2 === 'red') ||
      (val1 === 'red' && val2 === 'yellow')
    ) {
      console.log('Inside green function');
      this.onClickYellowRed();
    } else if (
      (val1 === 'green' && val2 === 'red') ||
      (val1 === 'red' && val2 === 'green')
    ) {
      console.log('Inside red green function');
      this.onClickRedGreen();
    } else if (
      (val1 === 'yellow' && val2 === 'green') ||
      (val1 === 'green' && val2 === 'yellow')
    ) {
      console.log('Inside yellow green function');
      this.onClickYellowGreen();
    }
  }

  /* onToggle() {
    console.log('Inside Toggle');
    var chart = new Chart('myChart', {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Red Dataset',
            data: [
              {
                x: Math.random() * 10,
                y: Math.random() * 8,
              },
            ],
            pointBackgroundColor: 'red',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
            showLine: true,
            fill: false,
          },
          {
            label: 'Green Dataset',
            data: [
              {
                x: Math.random() * 10,
                y: Math.random() * 8,
              },
            ],
            pointBackgroundColor: 'green',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
          },
          {
            label: 'Yellow Dataset',
            data: [
              {
                x: Math.random() * 10,
                y: Math.random() * 8,
              },
            ],
            pointBackgroundColor: 'yellow',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
        legend: false,
        dragData: true,
        tooltips: false,
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 8,
                padding: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
    });
  } */

  onAdd() {
    (<HTMLFormElement>document.getElementById('myForm')).reset;
    var chart = new Chart('myChart', {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Scatter Dataset',
            data: [
              {
                x: 1,
                y: 1,
              },
            ],
            pointBackgroundColor: 'red',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
            showLine: true,
            fill: false,
          },
          {
            label: 'Black Dataset',
            data: [
              {
                x: 3,
                y: 3,
              },
            ],
            pointBackgroundColor: 'green',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
          },
          {
            label: 'Black Dataset',
            data: [
              {
                x: 0,
                y: 4,
              },
            ],
            pointBackgroundColor: 'yellow',
            pointBorderColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 10,
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
        legend: false,
        dragData: true,
        tooltips: false,
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 8,
                padding: 10,
              },
              gridLines: {
                color: '#888',
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
    });
  }
}
