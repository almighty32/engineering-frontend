import { Component, OnInit } from '@angular/core';
import { DemolitionPermitModel } from '@shared/model/demolition-permit-model';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IDemolitionPermitModel } from '@shared/model/interface/idemolition-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { DemolitionPermitService } from '@shared/services/demolition-permit.service';
import { FencingPermitService } from '@shared/services/fencing-permit.service';

@Component({
  selector: 'app-demolition-scope-of-work',
  templateUrl: './demolition-scope-of-work.component.html',
  styleUrls: ['./demolition-scope-of-work.component.scss'],
})
export class DemolitionScopeOfWorkComponent implements OnInit {
  demolitionPermitScopeOfWork: IDemolitionPermitModel = new DemolitionPermitModel();

  constructor(private demolitionPermitService: DemolitionPermitService) {}

  ngOnInit(): void {
    this.demolitionPermitService.demolitionPermit.subscribe(msg => {
      this.demolitionPermitScopeOfWork = msg;
    });
  }
}
