import { Component, OnInit } from '@angular/core';
import { IArchitectural } from '@shared/model/interface/architectural-permit/i-architectural-permit';
import { ArchitecturalPermitService } from '@shared/services/architectural-permit.service';

@Component({
  selector: 'app-percentage-of-occupancy',
  templateUrl: './percentage-of-occupancy.component.html',
  styleUrls: ['./percentage-of-occupancy.component.scss'],
})
export class PercentageOfOccupancyComponent implements OnInit {
  percentageOfOccupancyForm = this.architecturalPermitService.percentageOfOccupancyForm;

  constructor(private architecturalPermitService: ArchitecturalPermitService) {}

  ngOnInit(): void {}
}
