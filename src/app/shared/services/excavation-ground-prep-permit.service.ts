import { Injectable } from '@angular/core';
import { IExcavationGroundPrepModel } from '@shared/model/interface/iexcavation-ground-prep-permit-model';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class ExcavationGroundPrepPermitService {
  private baseUrl = '/v1/excavation-ground-preps';
  constructor(private http: HttpRequestService) {}

  private _excavationGroundPrep = new BehaviorSubject({} as IExcavationGroundPrepModel);
  private _excavationGroundPrepList = new BehaviorSubject<IExcavationGroundPrepModel[]>([]);
  excavationGroundPrep = this._excavationGroundPrep.asObservable();
  excavationGroundPrepList = this._excavationGroundPrepList.asObservable();

  setData(data: IExcavationGroundPrepModel) {
    this._excavationGroundPrep.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IExcavationGroundPrepModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IExcavationGroundPrepModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this._excavationGroundPrepList.next(res);
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
    return this.http.patch<IExcavationGroundPrepModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IExcavationGroundPrepModel>(`${this.baseUrl}/${id}`);
  }
}
