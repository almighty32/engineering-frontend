import { Component, OnInit } from '@angular/core';
import { IElectronicPermit } from '@shared/model/interface/electronic/i-electronic-permit-model';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { ElectronicPermitService } from '@shared/services/electronic-permit.service';

@Component({
  selector: 'app-electronic-scope-of-work',
  templateUrl: './electronic-scope-of-work.component.html',
  styleUrls: ['./electronic-scope-of-work.component.scss'],
})
export class ElectronicScopeOfWorkComponent implements OnInit {
  scopeOfWorks: IScopeOfWork[] = this.electronicPermitService.scopeOfWorks;

  constructor(private electronicPermitService: ElectronicPermitService) {}

  ngOnInit(): void {}
}
