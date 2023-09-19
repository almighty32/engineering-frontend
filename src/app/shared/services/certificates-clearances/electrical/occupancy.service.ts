import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { IOccupancyCertificate } from '@shared/model/interface/I-occupancy-certificate';
import { IOccupancyCertificateFormGroup } from '@shared/model/interface/I-occupancy-certificate-form-group';
import { HttpRequestService } from '@shared/services/http-request.service';
import { BehaviorSubject } from 'rxjs';

export interface IOccupancyBpModel {
  buildingPermitNo: string;
  applicant: string;
}

@Injectable({
  providedIn: 'root',
})
export class OccupancyService {
  private baseUrl = '/v1/occupancy-certificates';

  occupancyBuildingPermit: IOccupancyBpModel = {} as IOccupancyBpModel;
  form = this.fb.group({
    id: [''],
    type: [''],
    nameOfProject: [''],
    occupancyPermitNo: [''],
    buildingPermit: [{} as IBuildingPermitModel],
    fsicNo: [''],
    fsicDateIssued: [''],
    feesPaid: [''],
    orNo: [''],
    datePaid: [''],
  }) as IOccupancyCertificateFormGroup;

  private _occupancyCertificate = new BehaviorSubject({} as IOccupancyCertificate);
  private _occupancyCertificateList = new BehaviorSubject<IOccupancyCertificate[]>([]);
  occupancy = this._occupancyCertificate.asObservable();
  occupancyList = this._occupancyCertificateList.asObservable();

  constructor(private http: HttpRequestService, private fb: FormBuilder) {}

  setData(data: IOccupancyCertificate) {
    console.log({ data });
    this._occupancyCertificate.next(data);
  }

  setOccupancyCertificates(data: IOccupancyCertificate[]) {
    this._occupancyCertificateList.next(data);
  }

  create() {
    const payload = this.form.value;
    console.log('payload', payload);
    return this.http.post<IOccupancyCertificate>(`${this.baseUrl}`, payload);
  }

  findAll() {
    const data = this.http.get<IOccupancyCertificate[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setOccupancyCertificates(res);
      },
      error: err => {
        console.log({
          error: err,
        });
        // notify({ message: err.error.message, shading: false }, 'error', 1000);
      },
      complete: () => {
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }

  update() {
    const item = this.form.value;
    return this.http.patch<IOccupancyCertificate>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IOccupancyCertificate>(`${this.baseUrl}/${id}`);
  }
}
