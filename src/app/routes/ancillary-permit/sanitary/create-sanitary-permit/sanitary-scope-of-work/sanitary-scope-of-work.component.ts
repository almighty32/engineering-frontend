import { Component, OnInit } from '@angular/core';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { SanitaryPermitService } from '@shared/services/sanitary-permit.service';

@Component({
  selector: 'app-sanitary-scope-of-work',
  templateUrl: './sanitary-scope-of-work.component.html',
  styleUrls: ['./sanitary-scope-of-work.component.scss'],
})
export class SanitaryScopeOfWorkComponent implements OnInit {
  scopeOfWorks: IScopeOfWork[] = this.sanitaryPermitService.scopeOfWorks;

  constructor(private sanitaryPermitService: SanitaryPermitService) {}

  ngOnInit(): void {}
}
