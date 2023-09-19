import { Injectable } from '@angular/core';
import { IArchitecturalModel } from '@shared/model/interface/architectural-permit/i-architectural-permit';
import { map, Observable } from 'rxjs';
import { HttpRequestService } from '../http-request.service';

@Injectable({
  providedIn: 'root',
})
export class AnnualInspectionPermitService {
  private baseUrl = '/v1/annual-inspections';
  constructor(private http: HttpRequestService) {}

  create(item: any) {
    delete item.id;
    return this.http.post<IArchitecturalModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    return this.http.get<IArchitecturalModel[]>(`${this.baseUrl}`);
  }

  update(item: any) {
    return this.http.patch<IArchitecturalModel>(`${this.baseUrl}/${item.id}`, item);
  }

  findOne(id: string | null) {
    return this.http.get<IArchitecturalModel>(`${this.baseUrl}/${id}`);
  }
}
