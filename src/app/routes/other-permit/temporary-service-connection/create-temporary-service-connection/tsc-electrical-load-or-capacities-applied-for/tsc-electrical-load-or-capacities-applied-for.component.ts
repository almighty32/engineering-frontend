import { Component, OnInit } from '@angular/core';
import { ITemporaryServiceConnectionModel } from '@shared/model/interface/itemporary-service-connection-model';
import { TemporaryServiceConnectionModel } from '@shared/model/temporary-service-connection-model';
import { TemporaryServiceConnectionPermitService } from '@shared/services/temporary-service-permit.service';

@Component({
  selector: 'app-tsc-electrical-load-or-capacities-applied-for',
  templateUrl: './tsc-electrical-load-or-capacities-applied-for.component.html',
  styleUrls: ['./tsc-electrical-load-or-capacities-applied-for.component.scss'],
})
export class TscElectricalLoadOrCapacitiesAppliedForComponent implements OnInit {
  electricalLoad: ITemporaryServiceConnectionModel = new TemporaryServiceConnectionModel();

  constructor(
    private temporaryServiceConnectionPermitService: TemporaryServiceConnectionPermitService
  ) {}

  ngOnInit(): void {
    this.temporaryServiceConnectionPermitService.tscPermit.subscribe(msg => {
      this.electricalLoad = msg;
    });
  }
}
