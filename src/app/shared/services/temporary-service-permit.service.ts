import { Injectable } from '@angular/core';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { ITemporaryServiceConnectionModel } from '@shared/model/interface/itemporary-service-connection-model';
import { TemporaryServiceConnectionModel } from '@shared/model/temporary-service-connection-model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class TemporaryServiceConnectionPermitService {
  private baseUrl = '/v1/temporary-service-connections';
  constructor(private http: HttpRequestService) {}

  private _tscPermit = new BehaviorSubject({} as ITemporaryServiceConnectionModel);
  private _tscPermitList = new BehaviorSubject<ITemporaryServiceConnectionModel[]>([]);
  tscPermit = this._tscPermit.asObservable();
  tscPermitList = this._tscPermitList.asObservable();

  setData(data: ITemporaryServiceConnectionModel) {
    this._tscPermit.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<ITemporaryServiceConnectionModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<ITemporaryServiceConnectionModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this._tscPermitList.next(res);
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
    return this.http.patch<ITemporaryServiceConnectionModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<ITemporaryServiceConnectionModel>(`${this.baseUrl}/${id}`);
  }
}
