import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor(@Inject(LOCALE_ID) private locale: string) {}
  formatDate = (date: any) => formatDate(date, 'yyyy-MM-dd', this.locale);
}
