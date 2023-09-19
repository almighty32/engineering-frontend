import { Injectable } from '@angular/core';
import { UnfiredPressuredVesselModel } from '@shared/model/certificates/mechanical/unfired-pressure-vessel-model';
import { IUnfiredPressuredVesselModel } from '@shared/model/interface/certificates/mechanical/iunfired-pressure-vessel-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnfiredPressureVesselService {
  private baseUrl = '/v1/unfired-pressure-vessels';
  private _UPVCertificate = new BehaviorSubject({} as IUnfiredPressuredVesselModel);
  private _UPVCertificates = new BehaviorSubject<IUnfiredPressuredVesselModel[]>([]);
  UPVCertificate = this._UPVCertificate.asObservable();
  UPVCertificates = this._UPVCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IUnfiredPressuredVesselModel) {
    this._UPVCertificate.next(data);
  }
  setCertificates(data: IUnfiredPressuredVesselModel[]) {
    this._UPVCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IUnfiredPressuredVesselModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IUnfiredPressuredVesselModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<IUnfiredPressuredVesselModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IUnfiredPressuredVesselModel>(`${this.baseUrl}/${id}`);
  }
}
