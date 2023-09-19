import { Injectable } from '@angular/core';
import { AirconditioningRefrigerationModel } from '@shared/model/certificates/mechanical/airconditioning-refrigeration-model';
import { UnfiredPressuredVesselModel } from '@shared/model/certificates/mechanical/unfired-pressure-vessel-model';
import { IAirconditioningRefrigeration } from '@shared/model/interface/certificates/mechanical/iairconditioning-refrigeration-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirconditioningRefrigerationService {
  private baseUrl = '/v1/airconditioning-refrigator';
  private _ACRCertificate = new BehaviorSubject({} as IAirconditioningRefrigeration);
  private _ACRCertificates = new BehaviorSubject<IAirconditioningRefrigeration[]>([]);
  ACRCertificate = this._ACRCertificate.asObservable();
  ACRCertificates = this._ACRCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IAirconditioningRefrigeration) {
    this._ACRCertificate.next(data);
  }
  setCertificates(data: IAirconditioningRefrigeration[]) {
    this._ACRCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IAirconditioningRefrigeration>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IAirconditioningRefrigeration[]>(`${this.baseUrl}`);
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
    return this.http.patch<IAirconditioningRefrigeration>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IAirconditioningRefrigeration>(`${this.baseUrl}/${id}`);
  }
}
