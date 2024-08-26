import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConstant } from '../../constants/APIconstants';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public API_CONSTANTS = APIConstant;

  private apiUrl = `${environment.apiURL}/${this.API_CONSTANTS.SHOPPING_CART.GET_ALL_OF_AGENT}`;
  private apiUrlDetails = `${environment.apiURL}/${this.API_CONSTANTS.SHOPPING_CART.GET_DETAILS}`;

  constructor(private http: HttpClient) { }

  getCartsByAgentId(agentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${agentId}`);
  }

  getCartDetails(cartId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlDetails}/${cartId}`);
  }

  // Confirm or suspend a shopping cart
  updateCartStatus(cartId: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${cartId}/status`, { status });
  }

}
