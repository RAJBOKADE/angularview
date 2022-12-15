import { PathLocationStrategy } from '@angular/common';
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

  // items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  //  items = [{
  //       'image':PathLocationStrategy, 'name':'Noah Owens', 'ratings': '⭐ 4.5 | ', 'deals':'25 Deals' 
  //  }]


  //   cards = [{ 'subtitle': '25363', 'title': 'Listed Property', 'percentage': ' 03%', 'small': ' This Week', 'value': '30.45' },
  //   { 'subtitle': '876', 'title': 'Serving Cities', 'percentage': '', 'small': ' 7 Cities This Week', 'value': '45.45' },
  //   { 'subtitle': '85658', 'title': 'Online Visitors', 'percentage': ' 86%', 'small': ' avg. 300', 'value': '67.45' },
  //   { 'subtitle': '6557', 'title': 'Online Queries', 'percentage': ' 35%', 'small': ' past month', 'value': '90.45' },
  // ]}

  cards = [{ 'subtitle': '25363', 'title': 'Listed Property', 'percentage': ' 03%', 'small': ' This Week', 'value': '30.45', },
  { 'subtitle': '876', 'title': 'Serving Cities', 'percentage': '', 'small': ' 7 Cities This Week', 'value': '45.45', },
  { 'subtitle': '85658', 'title': 'Online Visitors', 'percentage': ' 86%', 'small': ' avg. 300', 'value': '67.45' },
  { 'subtitle': '6557', 'title': 'Online Queries', 'percentage': ' 35%', 'small': ' past month', 'value': '90.45' },
  ]


Employees =[{'img':'../assets/noah-owens.jpg', 'Name': 'Noah Owens', 'Star': '⭐ 3.5 ', 'Deals': '27 Deals' },
{ 'img':'../assets/ellen-manning.jpg', 'Name': 'Ellen Manning', 'Star': '⭐ 2.1 ', 'Deals': '21 Deals' },
{ 'img':'../assets/jones.jpg', 'Name': 'Angel Jones', 'Star': '⭐ 4.7 ', 'Deals': '13 Deals' },
{ 'img':'../assets/dollie.jpg', 'Name': 'Dollie Norton', 'Star': '⭐ 4.4 ', 'Deals': '21 Deals' },
{ 'img':'../assets/joshua.jpg', 'Name': 'Joshua Brian', 'Star': '⭐ 4.3 ', 'Deals': '07 Deals' },
{ 'img':'../assets/amay.jpg', 'Name': 'AmaayMathur', 'Star': '⭐ 4.3', 'Deals': '07 Deals' },
{ 'img':'../assets/selena.jpg', 'Name': 'Selena', 'Star': '⭐ 4.4', 'Deals': '07 Deals' },
{ 'img':'../assets/nikki.jpg', 'Name': 'Nikki Johnson', 'Star': '⭐ 5.0', 'Deals': '10 Deals' }
]
}
