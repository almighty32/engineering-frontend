import { Injectable } from '@angular/core';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { timeStamp } from 'console';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class SignatoryService {
  private baseUrl = '/v1/signaturies';

  constructor(private http: HttpRequestService) {}

  private _designProfessional = new BehaviorSubject({} as ISignatory);
  private _inspectorSupervisor = new BehaviorSubject({} as ISignatory);
  private _selectedSignatory = new BehaviorSubject({} as ISignatory);

  private _signatory = new BehaviorSubject({} as ISignatory);
  private _signatoryList = new BehaviorSubject<ISignatory[]>([]);
  signatory = this._signatory.asObservable();
  selectedSignatory = this._selectedSignatory.asObservable();
  designProfessional = this._designProfessional.asObservable();
  inspectorSupervisor = this._inspectorSupervisor.asObservable();
  signatoryList = this._signatoryList.asObservable();
  // signatoryList: Observable<ISignatoryModel[]> = this._signatoryList.asObservable();

  public scoreSubject = new Subject<ISignatory[]>();

  setData(data: ISignatory) {
    console.log({ data });
    this._signatory.next(data);
  }
  setSignatureListData(data: ISignatory[]) {
    this._signatoryList.next(data);
  }

  setDesignProfessional(data: ISignatory) {
    this._designProfessional.next(data);
  }
  setInspectorSupervisor(data: ISignatory) {
    this._inspectorSupervisor.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<ISignatory>(`${this.baseUrl}`, item);
  }

  findAll() {
    return this.http.get<ISignatory[]>(`${this.baseUrl}`);
  }

  update(item: any) {
    return this.http.patch<ISignatory>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<ISignatory>(`${this.baseUrl}/${id}`);
  }
}
