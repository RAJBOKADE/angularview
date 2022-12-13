import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  type: any;
  // dashboards=[{'viewValue':'listing'

  // },{'viewValue':'Real Estate'},{'viewValue':'Crypto'},{'viewValue':'CRM'}]


  constructor() { }

  ngOnInit(): void {
  }

  cards = [{ 'subtitle': '25363', 'title': 'Listed Property', 'percentage': ' 03%', 'small': ' This Week', 'value': '30.45' },
  { 'subtitle': '876', 'title': 'Serving Cities', 'percentage': '', 'small': ' 7 Cities This Week', 'value': '45.45' },
  { 'subtitle': '85658', 'title': 'Online Visitors', 'percentage': ' 86%', 'small': ' avg. 300', 'value': '67.45' },
  { 'subtitle': '6557', 'title': 'Online Queries', 'percentage': ' 35%', 'small': ' past month', 'value': '90.45' },
    //{ 'subtitle': '$20','title': 'Your Current Plan','percentage': ' Expires in 80 days','small': ' past month' },

  ]

}
