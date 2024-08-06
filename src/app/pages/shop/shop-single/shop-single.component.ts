import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../core/model/product.entity';
import { ProductService } from '../../../core/services/api/product.service';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.productService.getById(productId).subscribe(product => {
        this.product = product;
      });
    });
  }
}
