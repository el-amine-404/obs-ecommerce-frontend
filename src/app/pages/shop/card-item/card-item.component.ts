import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/api/product.service';
import { Product } from '../../../core/model/product.entity';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent implements OnInit {

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
