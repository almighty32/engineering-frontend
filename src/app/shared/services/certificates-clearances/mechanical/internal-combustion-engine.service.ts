import { Injectable } from '@angular/core';
import { InternalCombustionEngineModel } from '@shared/model/certificates/mechanical/internal-combustion-engine-model';
import { IInternalCombustionEngineModel } from '@shared/model/interface/certificates/mechanical/iinternal-combustion-engine-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InternalCombustionEngineService {
  private baseUrl = '/v1/internal-combustion-engine';
  private _ICECertificate = new BehaviorSubject({} as IInternalCombustionEngineModel);
  private _ICECertificates = new BehaviorSubject<IInternalCombustionEngineModel[]>([]);
  ICECertificate = this._ICECertificate.asObservable();
  ICECertificates = this._ICECertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IInternalCombustionEngineModel) {
    this._ICECertificate.next(data);
  }
  setCertificates(data: IInternalCombustionEngineModel[]) {
    this._ICECertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IInternalCombustionEngineModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IInternalCombustionEngineModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<IInternalCombustionEngineModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IInternalCombustionEngineModel>(`${this.baseUrl}/${id}`);
  }
}
