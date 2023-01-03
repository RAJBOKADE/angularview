import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  values = [
    {
      'image': '../../../../assets/dollie.jpg',
      'name': 'Domnic Harris',
      'discription': 'Fusce a libero pellentesque',
      'details': 'Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus. Sed vehicula commodo porta.'
    },
    {
      'image': '../../../../assets/ellen-manning.jpg',
      'name': 'Garry Sobars',
      'discription': 'Nullam id ex at augue pharetra vestibulum eget id mauris.',
      'details': 'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor'
    },
    {
      'image': '../../../../assets/dollie.jpg',
      'name': 'Stella Brown',
      'discription': 'Vivamus venenatis tempus ipsum, id finibus libero aliquet convallis.',
      'details': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non'
    },
    {
      'image': '../../../../assets/joshua.jpg',
      'name': 'Steve Jonson',
      'discription': 'Donec ut ante tristique, gravida justo vitae',
      'details': 'dictum at ligula vitae, posuere sagittis augue. Nam vitae eros quis felis consectetur egestas vitae vitae massa.'
    },
    {
      'image': '../../../../assets/jones.jpg',
      'name': 'Alex Dolgove',
      'discription': 'Ut tincidunt massa non elementum fermentum..',
      'details': 'Nullam vel ipsum eget odio viverra pellentesque. Nulla auctor eu felis eget vulputate.'
    },
    {
      'image': '../../../../assets/ellen-manning.jpg',
      'name': 'Domnic Brown',
      'discription': 'Fusce eu rutrum orci. Aliquam hendrerit metus sit amet interdum',
      'details': 'Phasellus ligula purus, eleifend vel massa ut, interdum pulvinar sapien. Nullam a ex nec elit condimentum mattis.'
    },
    {
      'image': '../../../../assets/ellen-manning.jpg',
      'name': 'Brian Lara',
      'discription': 'Brian Lara',
      'details': 'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. '
    }
  ]
  image = "../../../../assets/dollie.jpg";
  image1 = "../../../../assets/ellen-manning.jpg";
  image2 = "../../../../assets/dollie.jpg";
  image3 = "../../../../assets/joshua.jpg";

}
