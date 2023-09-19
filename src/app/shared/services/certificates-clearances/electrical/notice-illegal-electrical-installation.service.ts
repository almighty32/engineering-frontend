import { Injectable } from '@angular/core';
import { IllegalElectricalInstallationModel } from '@shared/model/certificates/electrical/illegal-electrical-installation-model';
import { IIllegalElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iillegal-electrical-installation-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IllegalElectricalInstallationService {
  private baseUrl = '/v1/illegal-electrical-installation';
  private _illegalElectricalInst = new BehaviorSubject({} as IIllegalElectricalInstallationModel);
  private _illegalElectricalInstList = new BehaviorSubject<IIllegalElectricalInstallationModel[]>(
    []
  );
  illegalElectricalInst = this._illegalElectricalInst.asObservable();
  illegalElectricalInstList = this._illegalElectricalInstList.asObservable();

  constructor(private http: HttpRequestService) {}

  setData(data: IIllegalElectricalInstallationModel) {
    this._illegalElectricalInst.next(data);
  }
  setCspListData(data: IIllegalElectricalInstallationModel[]) {
    this._illegalElectricalInstList.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IIllegalElectricalInstallationModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IIllegalElectricalInstallationModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setCspListData(res);
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
    return this.http.patch<IIllegalElectricalInstallationModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IIllegalElectricalInstallationModel>(`${this.baseUrl}/${id}`);
  }
}
