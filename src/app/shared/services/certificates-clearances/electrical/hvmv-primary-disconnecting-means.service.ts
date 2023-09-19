import { Injectable } from '@angular/core';
import { HvMvPrimaryDisconnectingMeansModel } from '@shared/model/certificates/electrical/hvmv-primary-disconnecting-means-model';
import { IHvMvPrimaryDisconnectingMeansModel } from '@shared/model/interface/certificates/electical/ihvmv-primary-disconnecting-means-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HVMVPrimaryDisconnectingMeansService {
  private baseUrl = '/v1/hvmv-primary-disconnecting-means';
  private _HVMVPDMCertificate = new BehaviorSubject({} as IHvMvPrimaryDisconnectingMeansModel);
  private _HVMVPDMCertificates = new BehaviorSubject<IHvMvPrimaryDisconnectingMeansModel[]>([]);
  HVMVPDMCertificate = this._HVMVPDMCertificate.asObservable();
  HVMVPDMCertificates = this._HVMVPDMCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IHvMvPrimaryDisconnectingMeansModel) {
    this._HVMVPDMCertificate.next(data);
  }
  setCertificates(data: IHvMvPrimaryDisconnectingMeansModel[]) {
    this._HVMVPDMCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IHvMvPrimaryDisconnectingMeansModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IHvMvPrimaryDisconnectingMeansModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<IHvMvPrimaryDisconnectingMeansModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IHvMvPrimaryDisconnectingMeansModel>(`${this.baseUrl}/${id}`);
  }
}
