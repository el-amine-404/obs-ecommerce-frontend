import { Component } from '@angular/core';
import { CardItemComponent } from './card-item/card-item.component';
import { CategoryListComponent } from "./category-list/category-list.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CardItemComponent, CategoryListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
