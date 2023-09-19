import { Injectable } from '@angular/core';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class FencingPermitService {
  private baseUrl = '/v1/fencings';
  constructor(private http: HttpRequestService) {}

  // SAVE | UPDATE
  private _fencingPermit = new BehaviorSubject(new FencingPermitModel());
  private _fencingPermitList = new BehaviorSubject<IFencingPermitModel[]>([]);
  fencingPermit = this._fencingPermit.asObservable();
  fencingPermitList = this._fencingPermitList.asObservable();

  setData(data: IFencingPermitModel) {
    // this._fencingPermit.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IFencingPermitModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IFencingPermitModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this._fencingPermitList.next(res);
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
    return this.http.patch<IFencingPermitModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IFencingPermitModel>(`${this.baseUrl}/${id}`);
  }
}
