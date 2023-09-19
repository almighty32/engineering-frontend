import { Component, OnInit } from '@angular/core';
import { CivilStructuralPermitService } from '@shared/services/civil-structural-permit.service';

@Component({
  selector: 'app-structural-scope-of-work',
  templateUrl: './structural-scope-of-work.component.html',
  styleUrls: ['./structural-scope-of-work.component.scss'],
})
export class StructuralScopeOfWorkComponent implements OnInit {
  scopeOfWorks = this.civilStructuralPermitService.scopeOfWorks;
  constructor(private civilStructuralPermitService: CivilStructuralPermitService) {}
  ngOnInit(): void {}
}
