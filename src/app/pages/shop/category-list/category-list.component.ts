import { Component, inject } from '@angular/core';
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

  categoriesWithCounts: { category: string, count: number }[] = [];
  selectedCategories: Set<string> = new Set();

  private productService = inject(ProductService);

  constructor() {
    this.productService.getCategoryCounts().subscribe(categories => {
      this.categoriesWithCounts = categories;
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
