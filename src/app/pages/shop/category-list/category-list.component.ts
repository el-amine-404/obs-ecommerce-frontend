import { Component } from '@angular/core';
import { getEnumValues } from '../../../core/utilities/enum-utils';
import { Category } from '../../../core/model/product.entity';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  categories: string[] = getEnumValues(Category);

  constructor(){}

}
