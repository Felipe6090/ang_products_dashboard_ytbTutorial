import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>(`${API}/productsList/`, data);
  }

  getProduct() {
    return this.http.get<any>(`${API}/productsList/`);
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>(`${API}/productsList/` + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${API}/productsList/` + id);
  }
}
