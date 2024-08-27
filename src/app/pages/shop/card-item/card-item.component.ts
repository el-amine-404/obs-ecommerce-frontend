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
  pageSizeOptions: number[] = [10, 20, 30, 50];
  isLoading!: boolean;

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
    this.isLoading = true;
    this.productService.getAll().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        this.isLoading = false;
        console.log(this.products);
        console.log("Products fetched successfully");
      },
      error: (error) => {
        this.isLoading = false;
        console.log('Error fetching products:', error)
      }

      });
  }

  onPageSizeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.pageSize = +target.value; // Convert the value to a number
    this.currentPage = 1; // Reset to first page on page size change
  }

}
