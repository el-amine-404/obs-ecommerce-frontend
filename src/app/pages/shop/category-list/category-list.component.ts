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
  selectedCategories: Set<string> = new Set();

  private productService = inject(ProductService);

  constructor() {
    this.productService.categories$.subscribe(categories => {
      this.selectedCategories = new Set(categories);
    });
  }

  onCategoryChange(event: Event, category: string): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedCategories.add(category);
    } else {
      this.selectedCategories.delete(category);
    }
    this.productService.setCategories(this.selectedCategories);
  }

  isSelected(category: string): boolean {
    return this.selectedCategories.has(category);
  }

}
