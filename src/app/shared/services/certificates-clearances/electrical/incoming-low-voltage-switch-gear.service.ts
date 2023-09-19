import { Injectable } from '@angular/core';
import { IncomingLowVoltageSwitchgearModel } from '@shared/model/certificates/electrical/incoming-low-voltage-switchgear-model';
import { IIncomingLowVoltageSwitchgearModel } from '@shared/model/interface/certificates/electical/iincoming-low-voltage-switchgear-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IncomingLowVoltageSwitchGearService {
  private baseUrl = '/v1/incoming-low-voltage-switch-gear';
  private _ILVSWCertificate = new BehaviorSubject({} as IIncomingLowVoltageSwitchgearModel);
  private _ILVSWCertificates = new BehaviorSubject<IIncomingLowVoltageSwitchgearModel[]>([]);
  ILVSWCertificate = this._ILVSWCertificate.asObservable();
  ILVSWCertificates = this._ILVSWCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IIncomingLowVoltageSwitchgearModel) {
    this._ILVSWCertificate.next(data);
  }
  setCertificates(data: IIncomingLowVoltageSwitchgearModel[]) {
    this._ILVSWCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IIncomingLowVoltageSwitchgearModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IIncomingLowVoltageSwitchgearModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<IIncomingLowVoltageSwitchgearModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IIncomingLowVoltageSwitchgearModel>(`${this.baseUrl}/${id}`);
  }
}
