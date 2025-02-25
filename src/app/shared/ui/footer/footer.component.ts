import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../../core/constants/routes';
import { OBScontactInformations } from '../../../core/constants/OBScontactInformations';
import { ProductService } from '../../../core/services/api/product.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

      // categories: string[] = getEnumValues(Category);
      categoriesWithCounts: { category: string, count: number }[] = [];

      // the constants
      public ROUTES = ROUTES;
      public OBS_CONTACT_INFORMATIONS = OBScontactInformations;

      constructor(private productService: ProductService) {
        this.productService.getCategoryCounts().subscribe(categories => {
          this.categoriesWithCounts = categories;
        });
      }

}
