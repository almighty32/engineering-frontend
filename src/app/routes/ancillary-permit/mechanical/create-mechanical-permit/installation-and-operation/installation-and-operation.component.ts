import { Component, OnInit } from '@angular/core';
import { IMechanicalEquipmentsInstalled } from '@shared/model/interface/mechanical-permit/I-mechanical-equipments-installed';
import { MechanicalPermitService } from '@shared/services/mechanical-permit.service';

@Component({
  selector: 'app-installation-and-operation',
  templateUrl: './installation-and-operation.component.html',
  styleUrls: ['./installation-and-operation.component.scss'],
})
export class InstallationAndOperationComponent implements OnInit {
  mechanicalEquipmentsInstalled: IMechanicalEquipmentsInstalled[] =
    this.mechanicalPermitService.mechanicalEquipmentsInstalled;

  constructor(private mechanicalPermitService: MechanicalPermitService) {}

  ngOnInit(): void {}
}
