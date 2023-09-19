import { Injectable } from '@angular/core';
import { MotorControlCenterModel } from '@shared/model/certificates/electrical/imotor-control-center-model';
import { IMotorControlCenterModel } from '@shared/model/interface/certificates/electical/imotor-control-center-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MotorControlCenterService {
  private baseUrl = '/v1/motor-control-center';
  private _MCCCertificates = new BehaviorSubject({} as IMotorControlCenterModel);
  private _MCCCertificatess = new BehaviorSubject<IMotorControlCenterModel[]>([]);
  MCCCertificate = this._MCCCertificates.asObservable();
  MCCCertificates = this._MCCCertificatess.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IMotorControlCenterModel) {
    this._MCCCertificates.next(data);
  }
  setCertificates(data: IMotorControlCenterModel[]) {
    this._MCCCertificatess.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IMotorControlCenterModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IMotorControlCenterModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<IMotorControlCenterModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IMotorControlCenterModel>(`${this.baseUrl}/${id}`);
  }
}
