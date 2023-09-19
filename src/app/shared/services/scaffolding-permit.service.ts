import { Injectable } from '@angular/core';
import { IScaffoldingPermitModel } from '@shared/model/interface/iscaffolding-permit-model';
import { ScaffoldingPermitModel } from '@shared/model/scaffolding-permit-model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class ScaffoldingPermitService {
  private baseUrl = '/v1/scaffoldings';
  constructor(private http: HttpRequestService) {}

  private _scaffoldingPermit = new BehaviorSubject({} as IScaffoldingPermitModel);
  private _scaffoldingPermitList = new BehaviorSubject<IScaffoldingPermitModel[]>([]);
  scaffoldingPermit = this._scaffoldingPermit.asObservable();
  scaffoldingPermitList = this._scaffoldingPermitList.asObservable();

  setData(data: IScaffoldingPermitModel) {
    this._scaffoldingPermit.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IScaffoldingPermitModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IScaffoldingPermitModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this._scaffoldingPermitList.next(res);
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
    return this.http.patch<IScaffoldingPermitModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IScaffoldingPermitModel>(`${this.baseUrl}/${id}`);
  }
}
