import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from '../../../core/services/api/shopping-cart.service';
import { CommonModule } from '@angular/common';
import { ROUTES } from '../../../core/constants/routes';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent implements OnInit {

  // the constants
  public ROUTES = ROUTES;

  cartDetails: any;

  constructor(
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const cartId = this.route.snapshot.paramMap.get('id');
    this.loadCartDetails(Number(cartId));

  }

  loadCartDetails(cartId: number): void {
    this.shoppingCartService.getCartDetails(cartId).subscribe(details => {
      this.cartDetails = details;
    });
    console.log(this.cartDetails);
  }

  goBack(): void {
    this.router.navigateByUrl(this.ROUTES.CART_LIST.PATH);
  }
}
