import { Injectable } from '@angular/core';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectRegistrationService {
  // private _projectRegistration = new BehaviorSubject(new ProjectRegistrationModel());
  // private _projectRegistrationList = new BehaviorSubject<IProjectRegistrationlModel[]>([]);
  // projectRegistration = this._projectRegistration.asObservable();
  // projectRegistrationList: Observable<IProjectRegistrationlModel[]> = this._projectRegistrationList;

  private baseUrl = '/v1/project-registration';
  constructor(private http: HttpRequestService) {}

  // setData(data: IProjectRegistrationlModel) {
  //   console.log({ data });
  //   this._projectRegistration.next(data);
  // }

  create(item: any) {
    delete item.id;
    return this.http.post<IProjectRegistrationlModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    return this.http.get<IProjectRegistrationlModel[]>(`${this.baseUrl}`);
  }

  update(item: any) {
    return this.http.patch<IProjectRegistrationlModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IProjectRegistrationlModel>(`${this.baseUrl}/${id}`);
  }
}
