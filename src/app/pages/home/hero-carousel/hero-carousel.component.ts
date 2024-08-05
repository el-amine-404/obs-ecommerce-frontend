import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.css'
})
export class HeroCarouselComponent {

  slides = [
    {
      image: './assets/img/banner_img_01.jpg',
      title: 'OBS Shop',
      heading: 'Welcome to OBS Shop',
      text: 'OBS Shop is a premier ecommerce platform where businesses can find and purchase the perfect pack of products to meet their needs.'
    },
    {
      image: './assets/img/banner_img_02.jpg',
      title: 'Wide Range of Products',
      heading: 'Diverse Product Selection',
      text: 'Our website offers a wide range of products for various packs, ensuring you find exactly what you need for your business.'
    },
    {
      image: './assets/img/banner_img_03.jpg',
      title: 'Trusted by Businesses Worldwide',
      heading: 'What Our Customers Say',
      text: 'Hear from businesses that have found success with OBS Shop. Join our growing community of satisfied customers.'
    }
  ];

}
