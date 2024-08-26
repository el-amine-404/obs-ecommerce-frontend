import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../../core/model/product.entity';
import { ProductService } from '../../../core/services/api/product.service';
import { CurrencyPipe } from '@angular/common';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ROUTES } from '../../../core/constants/routes';

@Component({
  selector: 'app-shop-single',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent implements OnInit {

  // the constants
  public ROUTES = ROUTES;

  product: Product | null = null;
  quantity: number = 1;
  cartId: number = 1; // Assuming you have a way to get the cart ID

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.productService.getById(productId).subscribe(product => {
        this.product = product;
      });
    });
  }

  increaseQuantity(): void {
    if (this.product && this.quantity < this.product.quantityStock) {
      this.quantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.authService.isAuthenticated) {
      this.productService.addItemToCart(this.cartId, this.product?.id, this.quantity).
      subscribe({
          next: (data) => {
            console.log('Item added to cart', data);
          },error: (error) => {
            console.error('Error adding item to cart', error);
          }
        });
  } else {
    console.log('User not logged in');
  }
}



}
