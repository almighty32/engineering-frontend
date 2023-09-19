import { Component, OnInit } from '@angular/core';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { ISidewalkConstructionPermitModel } from '@shared/model/interface/isidewalk-construction-permit-model';
import { SidewalkConsturctionPermitModel } from '@shared/model/sidewalk-construction-permit-model';
import { FencingPermitService } from '@shared/services/fencing-permit.service';
import { SidewalkPermitService } from '@shared/services/sidewalk-permit.service';

@Component({
  selector: 'app-sidewalk-scope-of-work',
  templateUrl: './sidewalk-scope-of-work.component.html',
  styleUrls: ['./sidewalk-scope-of-work.component.scss'],
})
export class SidewalkScopeOfWorkComponent implements OnInit {
  sidewalkScopeOfWork: ISidewalkConstructionPermitModel = new SidewalkConsturctionPermitModel();

  constructor(private sidewalkPermitService: SidewalkPermitService) {}

  ngOnInit(): void {
    this.sidewalkPermitService.sidewalkPermit.subscribe(msg => {
      this.sidewalkScopeOfWork = msg;
    });
  }
}
