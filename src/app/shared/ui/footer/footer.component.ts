import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../../core/constants/routes';
import { OBScontactInformations } from '../../../core/constants/OBScontactInformations';
import { getEnumValues } from '../../../core/utilities/enum-utils';
import { Category } from '../../../core/model/product.entity';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

      categories: string[] = getEnumValues(Category);

      // the constants
      public ROUTES = ROUTES;
      public OBS_CONTACT_INFORMATIONS = OBScontactInformations;

}
