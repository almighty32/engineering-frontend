import { Injectable } from '@angular/core';
import { TemporaryPowerConnectionModel } from '@shared/model/certificates/electrical/temporary-power-connection-model';
import { ITemporaryPowerConnectionModel } from '@shared/model/interface/certificates/electical/itemporary-power-connection-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemporaryPowerConnectionService {
  private baseUrl = '/v1/temporary-power-connection';
  private _tpcCertificate = new BehaviorSubject({} as ITemporaryPowerConnectionModel);
  private _tpcCertificates = new BehaviorSubject<ITemporaryPowerConnectionModel[]>([]);
  tpcCertificate = this._tpcCertificate.asObservable();
  tpcCertificates = this._tpcCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setTPCCertificate(data: ITemporaryPowerConnectionModel) {
    this._tpcCertificate.next(data);
  }
  setTPCertificates(data: ITemporaryPowerConnectionModel[]) {
    this._tpcCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<ITemporaryPowerConnectionModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<ITemporaryPowerConnectionModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setTPCertificates(res);
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
    return this.http.patch<ITemporaryPowerConnectionModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<ITemporaryPowerConnectionModel>(`${this.baseUrl}/${id}`);
  }
}
