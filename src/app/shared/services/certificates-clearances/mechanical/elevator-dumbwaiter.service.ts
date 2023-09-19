import { Injectable } from '@angular/core';
import { ElevatorDumbwaiterModel } from '@shared/model/certificates/mechanical/elevator-dumbwaiter-model';
import { IElevatorDumbWaiter } from '@shared/model/interface/certificates/mechanical/ielevator-dumbwaiter-model';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElevatorDumbwaiterService {
  private baseUrl = '/v1/elevator-dumbwaiter';
  private _edCertificate = new BehaviorSubject({} as IElevatorDumbWaiter);
  private _edCertificates = new BehaviorSubject<IElevatorDumbWaiter[]>([]);
  edCertificate = this._edCertificate.asObservable();
  edCertificates = this._edCertificates.asObservable();

  constructor(private http: HttpRequestService) {}

  setCertificate(data: IElevatorDumbWaiter) {
    this._edCertificate.next(data);
  }
  setCertificates(data: IElevatorDumbWaiter[]) {
    this._edCertificates.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IElevatorDumbWaiter>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IElevatorDumbWaiter[]>(`${this.baseUrl}`);
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
    return this.http.patch<IElevatorDumbWaiter>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IElevatorDumbWaiter>(`${this.baseUrl}/${id}`);
  }
}
