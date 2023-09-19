import { Component, OnInit } from '@angular/core';
import { IElectronicNatureOfWork } from '@shared/model/interface/electronic/i-electronic-nature-of-work';
import { ElectronicPermitService } from '@shared/services/electronic-permit.service';

@Component({
  selector: 'app-electronic-nature-of-installation',
  templateUrl: './electronic-nature-of-installation.component.html',
  styleUrls: ['./electronic-nature-of-installation.component.scss'],
})
export class ElectronicNatureOfInstallationComponent implements OnInit {
  electronicNatureOfInst: IElectronicNatureOfWork[] =
    this.electronicPermitService.natureOfSystemInstallation;

  constructor(private electronicPermitService: ElectronicPermitService) {}

  ngOnInit(): void {}
}
