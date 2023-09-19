import { Injectable } from '@angular/core';
import { LightingDistributionPanelModel } from '@shared/model/certificates/electrical/lighting-distribution-panel-model';
import { ILightingDistributionPanelModel } from '@shared/model/interface/certificates/electical/ilighting-distribution-panel-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LightningDistributionPanelService {
  private baseUrl = '/v1/lighting-distribution-panel';
  private _LDPCertificate = new BehaviorSubject({} as ILightingDistributionPanelModel);
  private _LDPCertificates = new BehaviorSubject<ILightingDistributionPanelModel[]>([]);
  LDPCertificate = this._LDPCertificate.asObservable();
  LDPCertificates = this._LDPCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: ILightingDistributionPanelModel) {
    this._LDPCertificate.next(data);
  }
  setCertificates(data: ILightingDistributionPanelModel[]) {
    this._LDPCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<ILightingDistributionPanelModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<ILightingDistributionPanelModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<ILightingDistributionPanelModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<ILightingDistributionPanelModel>(`${this.baseUrl}/${id}`);
  }
}
