import { Component, OnInit } from '@angular/core';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { FencingPermitService } from '@shared/services/fencing-permit.service';

@Component({
  selector: 'app-fencing-scope-of-work',
  templateUrl: './fencing-scope-of-work.component.html',
  styleUrls: ['./fencing-scope-of-work.component.scss'],
})
export class FencingScopeOfWorkComponent implements OnInit {
  fencingScopeOfWork: IFencingPermitModel = new FencingPermitModel();

  constructor(private fencingPermitService: FencingPermitService) {}

  ngOnInit(): void {
    this.fencingPermitService.fencingPermit.subscribe(msg => {
      this.fencingScopeOfWork = msg;
    });
  }
}
