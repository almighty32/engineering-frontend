import { Injectable } from '@angular/core';
import { UnsafeElectricalInstallationModel } from '@shared/model/certificates/electrical/unsafe-electrical-installation-model';
import { IUnsafeElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iunsafe-electrical-installation-model';
import { ICivilOrStructuralPermit } from '@shared/model/interface/civil-structural/i-civil-structural-permit-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsafeElectricalInstallationService {
  private baseUrl = '/v1/unsafe-electrical-installation';
  private _unsafeElectricalInstallationCert = new BehaviorSubject(
    {} as IUnsafeElectricalInstallationModel
  );
  private _unsafeElectricalInstallationCertList = new BehaviorSubject<
    IUnsafeElectricalInstallationModel[]
  >([]);
  unsafeElectricalInstallationCert = this._unsafeElectricalInstallationCert.asObservable();
  unsafeElectricalInstallationCertList = this._unsafeElectricalInstallationCertList.asObservable();

  constructor(private http: HttpRequestService) {}

  setData(data: IUnsafeElectricalInstallationModel) {
    this._unsafeElectricalInstallationCert.next(data);
  }
  setUEICListData(data: IUnsafeElectricalInstallationModel[]) {
    this._unsafeElectricalInstallationCertList.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IUnsafeElectricalInstallationModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IUnsafeElectricalInstallationModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setUEICListData(res);
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
    return this.http.patch<IUnsafeElectricalInstallationModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IUnsafeElectricalInstallationModel>(`${this.baseUrl}/${id}`);
  }
}
