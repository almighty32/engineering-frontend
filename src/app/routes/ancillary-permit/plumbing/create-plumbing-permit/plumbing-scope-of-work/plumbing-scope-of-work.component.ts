import { Component, OnInit } from '@angular/core';
import { IPlumbingPermit } from '@shared/model/interface/plumbing-permit/i-plumbing-permit-model';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { PlumbingPermitService } from '@shared/services/plumbing-permit.service';

@Component({
  selector: 'app-plumbing-scope-of-work',
  templateUrl: './plumbing-scope-of-work.component.html',
  styleUrls: ['./plumbing-scope-of-work.component.scss'],
})
export class PlumbingScopeOfWorkComponent implements OnInit {
  scopeOfWorks: IScopeOfWork[] = this.plumbingPermitService.scopeOfWorks;

  constructor(private plumbingPermitService: PlumbingPermitService) {}

  ngOnInit(): void {}
}
