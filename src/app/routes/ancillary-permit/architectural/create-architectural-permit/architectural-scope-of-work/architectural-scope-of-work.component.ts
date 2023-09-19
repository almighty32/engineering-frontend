import { Component, OnInit } from '@angular/core';
import { IArchitectural } from '@shared/model/interface/architectural-permit/i-architectural-permit';
import { ArchitecturalPermitService } from '@shared/services/architectural-permit.service';

@Component({
  selector: 'app-architectural-scope-of-work',
  templateUrl: './architectural-scope-of-work.component.html',
  styleUrls: ['./architectural-scope-of-work.component.scss'],
})
export class ArchitecturalScopeOfWorkComponent implements OnInit {
  scopeOfWorks = this.architecturalPermitService.scopeOfWorks;

  constructor(private architecturalPermitService: ArchitecturalPermitService) {}

  ngOnInit(): void {}
}
