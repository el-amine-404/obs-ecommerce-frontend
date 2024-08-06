import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../core/services/api/product.service';
import { Product } from '../../../core/model/product.entity';
import { ROUTES } from '../../../core/constants/routes';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [RouterLink ,CurrencyPipe, NgxPaginationModule],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit, OnDestroy {

  public ROUTES = ROUTES;
  products: Product[] = [];
  private productService = inject(ProductService);
  private categorySubscription: Subscription = new Subscription();
  currentPage: number = 1;
  pageSize: number = 12;

  ngOnInit(): void {
    this.loadProducts();

    // Subscribe to category changes
    this.categorySubscription.add(
      this.productService.categories$.subscribe(() => {
        console.log("Categories changed. Reloading products...");
        this.currentPage = 1; // Reset to first page on category change
        this.loadProducts();
      })
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.categorySubscription.unsubscribe();
  }

  loadProducts(): void {
    console.log("Fetching products...");
    this.productService.getAll().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        console.log(this.products);
        console.log("Products fetched successfully");
      },
      error: (error) => console.log('Error fetching products:', error)
    });
  }

  get pageSizeOptions(): number[] {
    return [10, 20, 50];
  }

}
