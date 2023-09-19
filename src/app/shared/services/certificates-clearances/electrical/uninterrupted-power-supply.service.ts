import { Injectable } from '@angular/core';
import { GeneratorOrUPSModel } from '@shared/model/certificates/electrical/generator-or-ups-model';
import { IGeneratorOrUPSModelModel } from '@shared/model/interface/certificates/electical/igenerator-or-ups-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UninterruptedPowerSupplyService {
  private baseUrl = '/v1/generator-uninterrupted-power-supply';
  private _GUPSCertificate = new BehaviorSubject({} as IGeneratorOrUPSModelModel);
  private _GUPSCertificates = new BehaviorSubject<IGeneratorOrUPSModelModel[]>([]);
  GUPSCertificate = this._GUPSCertificate.asObservable();
  GUPSCertificates = this._GUPSCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setData(data: IGeneratorOrUPSModelModel) {
    this._GUPSCertificate.next(data);
  }
  setCspListData(data: IGeneratorOrUPSModelModel[]) {
    this._GUPSCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IGeneratorOrUPSModelModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IGeneratorOrUPSModelModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<IGeneratorOrUPSModelModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IGeneratorOrUPSModelModel>(`${this.baseUrl}/${id}`);
  }
}
