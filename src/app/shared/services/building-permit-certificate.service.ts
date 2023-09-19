import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { IBuildingPermitCertificateModel } from '@shared/model/interface/building-permit/I-building-permit-certificate';
import { IBuildingPermitCertificateFormGroup } from '@shared/model/interface/building-permit/I-building-permit-certificate-form-group';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class BuildingPermitCertificateService {
  private baseUrl = '/v1/building-permit-certificate';

  form = this.fb.group({
    id: [''],
    buildingPermit: [{} as IBuildingPermitModel],
    projectTitle: [''],
    fsecNo: [''],
    fsecDateIssued: [''],
    orNo: [''],
    datePaid: [''],
  }) as IBuildingPermitCertificateFormGroup;

  private _buildingPermitCertificate = new BehaviorSubject({} as IBuildingPermitCertificateModel);
  private _buildingPermitCertificateList = new BehaviorSubject<IBuildingPermitCertificateModel[]>(
    []
  );
  buildingPermit = this._buildingPermitCertificate.asObservable();
  buildingPermitList = this._buildingPermitCertificateList.asObservable();

  constructor(private http: HttpRequestService, private fb: FormBuilder) {}

  setData(data: IBuildingPermitCertificateModel) {
    console.log({ data });
    this._buildingPermitCertificate.next(data);
  }

  setBuildingPermitListData(data: IBuildingPermitCertificateModel[]) {
    this._buildingPermitCertificateList.next(data);
  }

  create() {
    const payload = this.form.value;
    return this.http.post<IBuildingPermitCertificateModel>(`${this.baseUrl}`, payload);
  }

  findAll() {
    const data = this.http.get<IBuildingPermitCertificateModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setBuildingPermitListData(res);
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

  update(item: any) {

      return this.http.patch<IBuildingPermitCertificateModel>(`${this.baseUrl}/${item.id}`, item);
    }


  findOne(id: string | null) {
    return this.http.get<IBuildingPermitCertificateModel>(`${this.baseUrl}/${id}`);
  }
}
