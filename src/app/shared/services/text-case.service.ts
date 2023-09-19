import { Injectable } from '@angular/core';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class TextCaseService {
  constructor() {}

  toUpperCase(text: string) {
    if (text) {
      return text.toUpperCase();
    }
    return text;
  }
}
