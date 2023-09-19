import { Injectable } from '@angular/core';
import { NoticeIllegalMechanicalInstallationModel } from '@shared/model/certificates/mechanical/notice-illegal-mechanical-installation-model';
import { INoticeIllegalMechanicalInstallationModel } from '@shared/model/interface/certificates/mechanical/inotice-illegal-mechanical-installation-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IllegalMechanicalInstallationService {
  private baseUrl = '/v1/illegal-mechanical-installation';
  private _IMICertificate = new BehaviorSubject({} as INoticeIllegalMechanicalInstallationModel);
  private _IMICertificates = new BehaviorSubject<INoticeIllegalMechanicalInstallationModel[]>([]);
  IMICertificate = this._IMICertificate.asObservable();
  IMICertificates = this._IMICertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: INoticeIllegalMechanicalInstallationModel) {
    this._IMICertificate.next(data);
  }
  setCertificates(data: INoticeIllegalMechanicalInstallationModel[]) {
    this._IMICertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<INoticeIllegalMechanicalInstallationModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<INoticeIllegalMechanicalInstallationModel[]>(`${this.baseUrl}`);
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
    return this.http.patch<INoticeIllegalMechanicalInstallationModel>(
      `${this.baseUrl}/${item.id}`,
      item
    );
  }

  findOne(id: string | null) {
    return this.http.get<INoticeIllegalMechanicalInstallationModel>(`${this.baseUrl}/${id}`);
  }
}
