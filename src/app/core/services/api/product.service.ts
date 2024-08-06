import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { APIConstant } from '../../constants/APIconstants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constants
  public API_CONSTANTS = APIConstant

  #productUrl = `${environment.apiURL}/${this.API_CONSTANTS.PRODUCT.GET_ALL}`;
  #productByIdUrl = `${environment.apiURL}/${this.API_CONSTANTS.PRODUCT.GET_ALL}`;

  #http = inject(HttpClient);

  constructor() {}

  getAll(): Observable<Product[]> {
    return this.#http.get<Product[]>(this.#productUrl);
  }

  getById(id: string): Observable<Product> {
    return this.#http.get<Product>(`${this.#productByIdUrl}/${id}`);
  }
}
