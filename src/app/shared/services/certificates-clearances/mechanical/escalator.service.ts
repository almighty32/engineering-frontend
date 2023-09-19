import { Injectable } from '@angular/core';
import { EscalatorModel } from '@shared/model/certificates/mechanical/escalator-model';
import { UnfiredPressuredVesselModel } from '@shared/model/certificates/mechanical/unfired-pressure-vessel-model';
import { IEscalator } from '@shared/model/interface/certificates/mechanical/iescalator-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EscalatorService {
  private baseUrl = '/v1/escalator';
  private _EscalatorCertificate = new BehaviorSubject({} as IEscalator);
  private _EscalatorCertificates = new BehaviorSubject<IEscalator[]>([]);
  EscalatorCertificate = this._EscalatorCertificate.asObservable();
  EscalatorCertificates = this._EscalatorCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IEscalator) {
    this._EscalatorCertificate.next(data);
  }
  setCertificates(data: IEscalator[]) {
    this._EscalatorCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IEscalator>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IEscalator[]>(`${this.baseUrl}`);
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
    return this.http.patch<IEscalator>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IEscalator>(`${this.baseUrl}/${id}`);
  }
}
