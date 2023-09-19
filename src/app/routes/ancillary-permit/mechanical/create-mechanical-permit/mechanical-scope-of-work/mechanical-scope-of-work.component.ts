import { Component, OnInit } from '@angular/core';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { MechanicalPermitService } from '@shared/services/mechanical-permit.service';

@Component({
  selector: 'app-mechanical-scope-of-work',
  templateUrl: './mechanical-scope-of-work.component.html',
  styleUrls: ['./mechanical-scope-of-work.component.scss'],
})
export class MechanicalScopeOfWorkComponent implements OnInit {
  scopeOfWorks: IScopeOfWork[] = this.mechanicalPermitService.scopeOfWorks;

  constructor(private mechanicalPermitService: MechanicalPermitService) {}

  ngOnInit(): void {}
}
