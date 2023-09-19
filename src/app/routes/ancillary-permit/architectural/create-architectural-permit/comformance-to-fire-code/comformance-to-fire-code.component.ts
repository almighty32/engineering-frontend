import { Component, OnInit } from '@angular/core';
import { IArchitectural } from '@shared/model/interface/architectural-permit/i-architectural-permit';
import { ArchitecturalPermitService } from '@shared/services/architectural-permit.service';

@Component({
  selector: 'app-comformance-to-fire-code',
  templateUrl: './comformance-to-fire-code.component.html',
  styleUrls: ['./comformance-to-fire-code.component.scss'],
})
export class ComformanceToFireCodeComponent implements OnInit {
  architecturalPermit: IArchitectural = {} as IArchitectural;
  fireCodes = this.architecturalPermitService.conformanceToFireCodes;

  constructor(private architecturalPermitService: ArchitecturalPermitService) {}

  ngOnInit(): void {
    this.architecturalPermitService.architecturalPermit.subscribe(msg => {
      this.architecturalPermit = msg;
    });
  }
}
