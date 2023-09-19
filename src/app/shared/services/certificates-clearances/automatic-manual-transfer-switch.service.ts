import { Injectable } from '@angular/core';
import { AutomaticManualTransferSwitchModel } from '@shared/model/certificates/electrical/automatic-manual-transfer-switch-model';
import { IAutomaticManualTransferSwitchModel } from '@shared/model/interface/certificates/electical/iautomatic-manual-transfer-switch-model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpRequestService } from '../http-request.service';

@Injectable({
  providedIn: 'root',
})
export class AutomaticManualTransferSwitchService {
  private baseUrl = '/v1/automatic-manual-transfer-switch';
  private _AMTSCertificate = new BehaviorSubject({} as IAutomaticManualTransferSwitchModel);
  private _AMTSCertificates = new BehaviorSubject<IAutomaticManualTransferSwitchModel[]>([]);
  AMTSCertificate = this._AMTSCertificate.asObservable();
  AMTSCertificates = this._AMTSCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IAutomaticManualTransferSwitchModel) {
    this._AMTSCertificate.next(data);
  }
  setCertificates(data: IAutomaticManualTransferSwitchModel[]) {
    this._AMTSCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IAutomaticManualTransferSwitchModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IAutomaticManualTransferSwitchModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<IAutomaticManualTransferSwitchModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IAutomaticManualTransferSwitchModel>(`${this.baseUrl}/${id}`);
  }
}
