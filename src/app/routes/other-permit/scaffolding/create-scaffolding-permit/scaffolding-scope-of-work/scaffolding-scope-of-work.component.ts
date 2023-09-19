import { Component, OnInit } from '@angular/core';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { IScaffoldingPermitModel } from '@shared/model/interface/iscaffolding-permit-model';
import { ScaffoldingPermitModel } from '@shared/model/scaffolding-permit-model';
import { FencingPermitService } from '@shared/services/fencing-permit.service';
import { ScaffoldingPermitService } from '@shared/services/scaffolding-permit.service';

@Component({
  selector: 'app-scaffolding-scope-of-work',
  templateUrl: './scaffolding-scope-of-work.component.html',
  styleUrls: ['./scaffolding-scope-of-work.component.scss'],
})
export class ScaffoldingScopeOfWorkComponent implements OnInit {
  scaffoldingScopeOfWork: IScaffoldingPermitModel = new ScaffoldingPermitModel();

  constructor(private scaffoldingPermitService: ScaffoldingPermitService) {}

  ngOnInit(): void {
    this.scaffoldingPermitService.scaffoldingPermit.subscribe(msg => {
      this.scaffoldingScopeOfWork = msg;
    });
  }
}
