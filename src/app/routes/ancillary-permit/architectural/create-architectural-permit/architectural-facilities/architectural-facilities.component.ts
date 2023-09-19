import { Component, OnInit } from '@angular/core';
import { IArchitectural } from '@shared/model/interface/architectural-permit/i-architectural-permit';
import { ArchitecturalPermitService } from '@shared/services/architectural-permit.service';

@Component({
  selector: 'app-architectural-facilities',
  templateUrl: './architectural-facilities.component.html',
  styleUrls: ['./architectural-facilities.component.scss'],
})
export class ArchitecturalFacilitiesComponent implements OnInit {
  architecturalPermit: IArchitectural = {} as IArchitectural;
  facilities = this.architecturalPermitService.facilities;

  constructor(private architecturalPermitService: ArchitecturalPermitService) {}

  ngOnInit(): void {
    this.architecturalPermitService.architecturalPermit.subscribe(msg => {
      this.architecturalPermit = msg;
    });
  }
}
