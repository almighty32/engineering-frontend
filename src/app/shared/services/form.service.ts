import { Injectable } from '@angular/core';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {

  constructor() {}
  // SAVE | UPDATE
  private _saveSelector = new BehaviorSubject('SAVE');
  saveSelector = this._saveSelector.asObservable();
  setSaveSelector(value: string) {
    this._saveSelector.next(value);
  }
}
