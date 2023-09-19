import { Component, OnInit } from '@angular/core';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { BuildingPermitService } from '@shared/services/building-permit.service';

@Component({
  selector: 'app-scope-of-work',
  templateUrl: './scope-of-work.component.html',
  styleUrls: ['./scope-of-work.component.scss'],
})
export class ScopeOfWorkComponent implements OnInit {
  // scopeOfWorkInfo: IBuildingPermitModel = new BuildingPermitModel();

  scopeOfWorks: IScopeOfWork[] = this.buildingPermitService.scopeOfWorks;

  constructor(private buildingPermitService: BuildingPermitService) {}

  ngOnInit(): void {
    // this.buildingPermitService.buildingPermit.subscribe(msg => {
    //   if (!msg.scopeOfWork[0]) {
    //     return;
    //   }
    //   const { scopeOfWork } = msg;
    //   console.log('scope of work', scopeOfWork);
    //   this.scopeOfWorks = scopeOfWork;
    // });
  }
}
