import { Injectable } from '@angular/core';
import { ISidewalkConstructionPermitModel } from '@shared/model/interface/isidewalk-construction-permit-model';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class SidewalkPermitService {
  private baseUrl = '/v1/sidewalks';
  constructor(private http: HttpRequestService) {}

  private _sidewalkPermit = new BehaviorSubject({} as ISidewalkConstructionPermitModel);
  private _sidewalkPermitList = new BehaviorSubject<ISidewalkConstructionPermitModel[]>([]);
  sidewalkPermit = this._sidewalkPermit.asObservable();
  sidewalkPermitList = this._sidewalkPermitList.asObservable();

  setData(data: ISidewalkConstructionPermitModel) {
    this._sidewalkPermit.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<ISidewalkConstructionPermitModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<ISidewalkConstructionPermitModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this._sidewalkPermitList.next(res);
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
    return this.http.patch<ISidewalkConstructionPermitModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<ISidewalkConstructionPermitModel>(`${this.baseUrl}/${id}`);
  }
}
