import { Component, inject } from '@angular/core';
import { getEnumValues } from '../../../core/utilities/enum-utils';
import { Category } from '../../../core/model/product.entity';
import { ProductService } from '../../../core/services/api/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  categories: string[] = getEnumValues(Category);

  private productService = inject(ProductService);

  constructor(){}


  onCategoryClick(category: string): void {
    this.productService.setCategory(category);
  }
}
