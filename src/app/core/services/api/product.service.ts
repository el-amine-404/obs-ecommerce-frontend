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

  public API_CONSTANTS = APIConstant;

  private categoriesSubject: BehaviorSubject<Set<string>> = new BehaviorSubject<Set<string>>(new Set());
  public categories$: Observable<Set<string>> = this.categoriesSubject.asObservable();

  private productUrl = `${environment.apiURL}/${this.API_CONSTANTS.PRODUCT.GET_ALL}`;

  private http = inject(HttpClient);

  constructor() {}

  getAll(): Observable<Product[]> {
    const categories = Array.from(this.categoriesSubject.value);
    const url = categories.length
      ? `${this.productUrl}?category=${categories.join(',')}`
      : this.productUrl;
    return this.http.get<Product[]>(url);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${id}`);
  }

  setCategories(categories: Set<string>): void {
    this.categoriesSubject.next(categories);
  }
}
