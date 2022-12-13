import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  type: any;
  public chart: any;
  // dashboards=[{'viewValue':'listing'

  // },{'viewValue':'Real Estate'},{'viewValue':'Crypto'},{'viewValue':'CRM'}]


  constructor() { }


  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  cards = [{ 'subtitle': '25363', 'title': 'Listed Property', 'percentage': ' 03%', 'small': ' This Week', 'value': '30.45' },
  { 'subtitle': '876', 'title': 'Serving Cities', 'percentage': '', 'small': ' 7 Cities This Week', 'value': '45.45' },
  { 'subtitle': '85658', 'title': 'Online Visitors', 'percentage': ' 86%', 'small': ' avg. 300', 'value': '67.45' },
  { 'subtitle': '6557', 'title': 'Online Queries', 'percentage': ' 35%', 'small': ' past month', 'value': '90.45' },
    //{ 'subtitle': '$20','title': 'Your Current Plan','percentage': ' Expires in 80 days','small': ' past month' },

  ]

}
