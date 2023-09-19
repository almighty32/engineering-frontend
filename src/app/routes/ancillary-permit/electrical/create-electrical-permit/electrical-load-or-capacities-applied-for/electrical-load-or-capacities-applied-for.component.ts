import { Component, OnInit } from '@angular/core';
import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';

@Component({
  selector: 'app-electrical-load-or-capacities-applied-for',
  templateUrl: './electrical-load-or-capacities-applied-for.component.html',
  styleUrls: ['./electrical-load-or-capacities-applied-for.component.scss'],
})
export class ElectricalLoadOrCapacitiesAppliedForComponent implements OnInit {
  form = this.electricalPermitService.form;

  constructor(private electricalPermitService: ElectricalPermitService) {}

  ngOnInit(): void {}
}
