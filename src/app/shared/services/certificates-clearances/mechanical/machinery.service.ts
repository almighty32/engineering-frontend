import { Injectable } from '@angular/core';
import { UnfiredPressuredVesselModel } from '@shared/model/certificates/mechanical/unfired-pressure-vessel-model';
import { MachineryModel } from '@shared/model/certificates/mechanical/machinery-model';
import { IMachinery } from '@shared/model/interface/certificates/mechanical/machinery-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MachineryService {
  private baseUrl = '/v1/machinery';
  private _MCertificate = new BehaviorSubject({} as IMachinery);
  private _MCertificates = new BehaviorSubject<IMachinery[]>([]);
  MCertificate = this._MCertificate.asObservable();
  MCertificates = this._MCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IMachinery) {
    this._MCertificate.next(data);
  }
  setCertificates(data: IMachinery[]) {
    this._MCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IMachinery>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IMachinery[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setCertificates(res);
      },
      error: err => {
        console.log({
          error: err,
        });

        // notify({ message: err.error.message, shading: false }, 'error', 1000);
      },
      complete: () => {
        console.log('completed');
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }

  update(item: any) {
    return this.http.patch<IMachinery>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IMachinery>(`${this.baseUrl}/${id}`);
  }
}
