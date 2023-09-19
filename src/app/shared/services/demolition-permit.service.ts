import { Injectable } from '@angular/core';
import { DemolitionPermitModel } from '@shared/model/demolition-permit-model';
import { IDemolitionPermitModel } from '@shared/model/interface/idemolition-permit-model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class DemolitionPermitService {
  private baseUrl = '/v1/demolitions';
  constructor(private http: HttpRequestService) {}

  private _demolitionPermit = new BehaviorSubject({} as IDemolitionPermitModel);
  private _demolitionPermitList = new BehaviorSubject<IDemolitionPermitModel[]>([]);
  demolitionPermit = this._demolitionPermit.asObservable();
  demolitionPermitList = this._demolitionPermitList.asObservable();

  setData(data: IDemolitionPermitModel) {
    this._demolitionPermit.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IDemolitionPermitModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IDemolitionPermitModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this._demolitionPermitList.next(res);
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
    return this.http.patch<IDemolitionPermitModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IDemolitionPermitModel>(`${this.baseUrl}/${id}`);
  }
}
