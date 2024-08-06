import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { APIConstant } from '../../constants/APIconstants';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../model/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constants
  public API_CONSTANTS = APIConstant

  private categorySubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public category$: Observable<string | null> = this.categorySubject.asObservable();


  #productUrl = `${environment.apiURL}/${this.API_CONSTANTS.PRODUCT.GET_ALL}`;

  #http = inject(HttpClient);

  constructor() {}

  getAll(): Observable<Product[]> {
    const category = this.categorySubject.value;
    const url = category
      ? `${this.#productUrl}?category=${category}`
      : this.#productUrl;
    return this.#http.get<Product[]>(url);
  }

  getById(id: string): Observable<Product> {
    return this.#http.get<Product>(`${this.#productUrl}/${id}`);
  }

  setCategory(data: any) {
    this.categorySubject.next(data);
}
}
