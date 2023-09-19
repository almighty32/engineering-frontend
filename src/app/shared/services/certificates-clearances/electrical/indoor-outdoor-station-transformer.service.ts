import { Injectable } from '@angular/core';
import { IIndoorOutdoorStationTransformerModel } from '@shared/model/interface/certificates/electical/iindoor-outdoor-station-transformer-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IndoorOutdoorStationTransformerService {
  private baseUrl = '/v1/indoor-outdoor-station-transformer';
  private _inOutStationTransformerCert = new BehaviorSubject(
    {} as IIndoorOutdoorStationTransformerModel
  );
  private _inOutStationTransformerCertList = new BehaviorSubject<
    IIndoorOutdoorStationTransformerModel[]
  >([]);
  inOutStationTransformer = this._inOutStationTransformerCert.asObservable();
  inOutStationTransformerList = this._inOutStationTransformerCertList.asObservable();

  constructor(private http: HttpRequestService) {}

  setInOutStationTransformerCert(data: IIndoorOutdoorStationTransformerModel) {
    this._inOutStationTransformerCert.next(data);
  }
  setInOutStationTransformerCerts(data: IIndoorOutdoorStationTransformerModel[]) {
    this._inOutStationTransformerCertList.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IIndoorOutdoorStationTransformerModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IIndoorOutdoorStationTransformerModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setInOutStationTransformerCerts(res);
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  update(item: any) {
    return this.http.patch<IIndoorOutdoorStationTransformerModel>(
      `${this.baseUrl}/${item.id}`,
      item
    );
  }

  findOne(id: string | null) {
    return this.http.get<IIndoorOutdoorStationTransformerModel>(`${this.baseUrl}/${id}`);
  }
}
