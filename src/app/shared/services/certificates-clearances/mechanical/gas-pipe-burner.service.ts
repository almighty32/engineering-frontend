import { Injectable } from '@angular/core';
import { GasPipeBurnerModel } from '@shared/model/certificates/mechanical/gas-pipe-burner-model';
import { IGasPipeBurnerModel } from '@shared/model/interface/certificates/mechanical/igas-pipe-burner-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GaspipeAndBurnerService {
  private baseUrl = '/v1/lighting-distribution-panel';
  private _GPBCertificate = new BehaviorSubject({} as IGasPipeBurnerModel);
  private _GPBCertificates = new BehaviorSubject<IGasPipeBurnerModel[]>([]);
  GPBCertificate = this._GPBCertificate.asObservable();
  GPBCertificates = this._GPBCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IGasPipeBurnerModel) {
    this._GPBCertificate.next(data);
  }
  setCertificates(data: IGasPipeBurnerModel[]) {
    this._GPBCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IGasPipeBurnerModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IGasPipeBurnerModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<IGasPipeBurnerModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IGasPipeBurnerModel>(`${this.baseUrl}/${id}`);
  }
}
