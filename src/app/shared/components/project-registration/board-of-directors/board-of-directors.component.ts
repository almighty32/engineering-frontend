import { Component, OnInit } from '@angular/core';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { ProjectRegistrationModel } from '@shared/model/project-registration-model';

@Component({
  selector: 'app-board-of-directors',
  templateUrl: './board-of-directors.component.html',
  styleUrls: ['./board-of-directors.component.scss'],
})
export class BoardOfDirectorsComponent implements OnInit {
  projectRegistration: IProjectRegistrationlModel = new ProjectRegistrationModel();
  constructor() {}

  ngOnInit(): void {
    this.projectRegistration.boardOfDirectorName = 'Director Jordan';
    this.projectRegistration.boardOfDirectorPosition = 'BOD Head';
    this.projectRegistration.boardOfDirectorContactNo = '09394300929';
  }
}
