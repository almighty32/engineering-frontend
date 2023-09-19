import { Component, OnInit } from '@angular/core';
import { ExcavationGroundPrepModel } from '@shared/model/excavation-ground-prep-permit-model';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { IExcavationGroundPrepModel } from '@shared/model/interface/iexcavation-ground-prep-permit-model';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { ExcavationGroundPrepPermitService } from '@shared/services/excavation-ground-prep-permit.service';
import { FencingPermitService } from '@shared/services/fencing-permit.service';

@Component({
  selector: 'app-egp-char-of-occupancy',
  templateUrl: './egp-char-of-occupancy.component.html',
  styleUrls: ['./egp-char-of-occupancy.component.scss'],
})
export class EgpCharOfOccupancyComponent implements OnInit {
  egpCharOfOccupancy: IExcavationGroundPrepModel = new ExcavationGroundPrepModel();

  constructor(private excavationGroundPrepPermitService: ExcavationGroundPrepPermitService) {}

  ngOnInit(): void {
    this.excavationGroundPrepPermitService.excavationGroundPrep.subscribe(msg => {
      this.egpCharOfOccupancy = msg;
    });
  }
}
