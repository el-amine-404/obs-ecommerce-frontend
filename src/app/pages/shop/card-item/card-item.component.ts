import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/api/product.service';
import { Product } from '../../../core/model/product.entity';
import { ROUTES } from '../../../core/constants/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent implements OnInit {

      // the constants
      public ROUTES = ROUTES;

  private productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(): void {
    this.productService.getAll().subscribe({
      next: (products: Product[]) =>{
        this.products = products;
        console.log(this.products);
        console.log("Products fetched successfully");
      },
      error: (error) => console.log('Error fetching users:', error)
    });
  }

}
