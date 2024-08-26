import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../core/services/api/shopping-cart.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent implements OnInit {
  shoppingCarts: any[] = [];
  agentId!: number;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.agentId = this.authService.getLoggedInAgentId(); // Get the logged-in agent's ID
    this.loadShoppingCarts();
  }

  loadShoppingCarts(): void {
    this.shoppingCartService.getCartsByAgentId(this.agentId).subscribe(carts => {
      this.shoppingCarts = carts;
    });
  }

  viewCartDetails(cartId: number): void {
    this.router.navigate([`/shopping-carts/${cartId}`]);
  }

  confirmCart(cartId: number): void {
    this.shoppingCartService.updateCartStatus(cartId, 'CONFIRMED').subscribe(() => {
      this.loadShoppingCarts(); // Reload the list after confirmation
    });
  }

  suspendCart(cartId: number): void {
    this.shoppingCartService.updateCartStatus(cartId, 'SUSPENDED').subscribe(() => {
      this.loadShoppingCarts(); // Reload the list after suspension
    });
  }
}
