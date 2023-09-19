import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  put<T>(url: string, item: any): import('rxjs').Observable<any> {
    return this.http.put<T>(this.baseUrl + url, item);
  }
  // private baseUrl = 'http://backend:3000/api';
  private baseUrl = environment.backendUrl;
  constructor(private http: HttpClient) {}
  post<T>(url: string, body: any) {
    delete body.id;
    return this.http.post<T>(this.baseUrl + url, body);
  }
  patch<T>(url: string, item: any): import('rxjs').Observable<any> {
    return this.http.patch<T>(this.baseUrl + url, item);
  }
  get<T>(url: string) {
    return this.http.get<T>(this.baseUrl + url);
  }
  delete<T>(url: string) {
    return this.http.delete<T>(this.baseUrl + url);
  }
}
