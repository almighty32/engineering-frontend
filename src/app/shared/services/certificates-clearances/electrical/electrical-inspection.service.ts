import { Injectable } from '@angular/core';
import { CivilOrStructuralModel } from '@shared/model/civil-structural-permit-model';
import { ICivilOrStructuralPermit } from '@shared/model/interface/civil-structural/i-civil-structural-permit-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElectricalInspectionService {
  private baseUrl = '/v1/civil-structural';
  private _civilStructuralPermit = new BehaviorSubject(new CivilOrStructuralModel());
  private _civilStructuralPermitList = new BehaviorSubject<ICivilOrStructuralPermit[]>([]);
  civilStructuralPermit = this._civilStructuralPermit.asObservable();
  civilStructuralPermitList = this._civilStructuralPermitList.asObservable();

  constructor(private http: HttpRequestService) {}

  setData(data: ICivilOrStructuralPermit) {
    this._civilStructuralPermit.next(data);
  }
  setCspListData(data: ICivilOrStructuralPermit[]) {
    this._civilStructuralPermitList.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<ICivilOrStructuralPermit>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<ICivilOrStructuralPermit[]>(`${this.baseUrl}`);
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
    return this.http.patch<ICivilOrStructuralPermit>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<ICivilOrStructuralPermit>(`${this.baseUrl}/${id}`);
  }
}
