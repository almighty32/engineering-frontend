import { Injectable } from '@angular/core';
import { SteamBoilerModel } from '@shared/model/certificates/mechanical/steam-boiler-model';
import { ISteamBoilerModel } from '@shared/model/interface/certificates/mechanical/isteam-boiler-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SteamBoilerService {
  private baseUrl = '/v1/steam-boiler';
  private _SBCertificate = new BehaviorSubject({} as ISteamBoilerModel);
  private _SBCertificates = new BehaviorSubject<ISteamBoilerModel[]>([]);
  SBCertificate = this._SBCertificate.asObservable();
  SBCertificates = this._SBCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: ISteamBoilerModel) {
    this._SBCertificate.next(data);
  }
  setCertificates(data: ISteamBoilerModel[]) {
    this._SBCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<ISteamBoilerModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<ISteamBoilerModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<ISteamBoilerModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<ISteamBoilerModel>(`${this.baseUrl}/${id}`);
  }
}
