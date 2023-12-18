import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockListService {

  constructor(private http: HttpClient) {}

  getStockLlist(): Observable<any> {
    return this.http.get<any>('/api/getData');
  }
}
