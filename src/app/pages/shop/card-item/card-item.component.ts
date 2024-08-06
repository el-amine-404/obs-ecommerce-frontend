import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../core/services/api/product.service';
import { Product } from '../../../core/model/product.entity';
import { ROUTES } from '../../../core/constants/routes';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [RouterLink ,CurrencyPipe],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit, OnDestroy {

  public ROUTES = ROUTES;
  products: Product[] = [];
  private productService = inject(ProductService);
  private categorySubscription!: Subscription;
  private currentCategory: string | null = null;

  ngOnInit(): void {
    this.loadProducts();
    this.categorySubscription = this.productService.category$.subscribe(category => {
      if (category !== this.currentCategory) {
        console.log("Category changed. Reloading products...");
        this.currentCategory = category;
        this.loadProducts();
      }});
  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe();
  }

  loadProducts(): void {
    this.productService.getAll().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        console.log(this.products);
        console.log("Products fetched successfully");
      },
      error: (error) => console.log('Error fetching products:', error)
    });
  }
}
