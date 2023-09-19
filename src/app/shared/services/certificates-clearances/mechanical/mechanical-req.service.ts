import { Injectable } from '@angular/core';
import { NoticeMechanicalRequirementsModel } from '@shared/model/certificates/mechanical/notice-mechanical-requirements-model';
import { INoticeMechanicalRequirementsModel } from '@shared/model/interface/certificates/mechanical/inotice-mechanical-requirements-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticeOfMechanicalReqService {
  private baseUrl = '/v1/notice-mechanical-requirements';
  private _MRCertificate = new BehaviorSubject({} as INoticeMechanicalRequirementsModel);
  private _MRCertificates = new BehaviorSubject<INoticeMechanicalRequirementsModel[]>([]);
  MRCertificate = this._MRCertificate.asObservable();
  MRCertificates = this._MRCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: INoticeMechanicalRequirementsModel) {
    this._MRCertificate.next(data);
  }
  setCertificates(data: INoticeMechanicalRequirementsModel[]) {
    this._MRCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<INoticeMechanicalRequirementsModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<INoticeMechanicalRequirementsModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<INoticeMechanicalRequirementsModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<INoticeMechanicalRequirementsModel>(`${this.baseUrl}/${id}`);
  }
}
