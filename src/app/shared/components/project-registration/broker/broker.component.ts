import { Component, OnInit } from '@angular/core';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { ProjectRegistrationModel } from '@shared/model/project-registration-model';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss'],
})
export class BrokerComponent implements OnInit {
  projectRegistration: IProjectRegistrationlModel = new ProjectRegistrationModel();

  constructor() {}

  ngOnInit(): void {
    this.projectRegistration.brokerName = 'Jordan Broker';
    this.projectRegistration.brokerAddress = 'Cebu City';
    this.projectRegistration.brokerContactNo = '09394300929';
  }
}
