import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../../core/model/product.entity';
import { ProductService } from '../../../core/services/api/product.service';
import { CurrencyPipe } from '@angular/common';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ROUTES } from '../../../core/constants/routes';
import { ToastrService } from 'ngx-toastr';
import { ErrorHandlerService } from '../../../core/services/error/error-handler.service';

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
    private router: Router,
    private productService: ProductService,
    private authService: AuthService,
    private toastr: ToastrService,
    private errorHandler: ErrorHandlerService
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
            // reload the page
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
              this.router.navigate([this.route.snapshot.url.join('/')]));
            // send notification
            this.toastr.success('Item added to cart!');
          },error: (error) => {
            this.errorHandler.handleError(error);
          }
        });
  } else {
    console.log('User not logged in');
  }
}



}
