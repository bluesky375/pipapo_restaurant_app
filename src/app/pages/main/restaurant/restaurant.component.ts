import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  m_gallery = [
    { id: 1, img: 'assets/images/products/product_01.png' },
    { id: 2, img: 'assets/images/products/product_02.png' },
    { id: 3, img: 'assets/images/products/product_03.png' },
    { id: 4, img: 'assets/images/products/product_04.png' },
    { id: 5, img: 'assets/images/products/product_05.png' },
    { id: 6, img: 'assets/images/products/product_06.png' },
    { id: 7, img: 'assets/images/products/product_01.png' },
    { id: 8, img: 'assets/images/products/product_02.png' },
    { id: 9, img: 'assets/images/products/product_03.png' },
    { id: 10, img: 'assets/images/products/product_04.png' },
    { id: 11, img: 'assets/images/products/product_05.png' },
    { id: 12, img: 'assets/images/products/product_06.png' }
  ];
  
  constructor() { }

  ngOnInit() {}

  ratingChange(e) {
    
  }

}
