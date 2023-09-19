import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectPropertyModel } from '@shared/model/project-property-model';
import { IProjectPropertyModel } from '@shared/model/shared/iproject-property-model';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss'],
})
export class PropertyFormComponent implements OnInit {
  // @Output() propertyEmitter = new EventEmitter<IProjectPropertyModel>();
  projectProperty: IProjectPropertyModel = new ProjectPropertyModel();

  constructor() {}

  ngOnInit(): void {
    this.projectProperty.tctNo = 10;
    this.projectProperty.address = '7eleven';
    this.projectProperty.owner = 'Jordan Torreon';
    this.projectProperty.lotNo = 20;
    this.projectProperty.block = 30;
    this.projectProperty.surveyNo = 40;
    this.projectProperty.baranggay = 'TPadilla';

    this.projectProperty.area = 50;
    this.projectProperty.areaSaleable = 60;
    this.projectProperty.areaNonSaleable = 70;
    this.projectProperty.areaRoadlot = 80;
    this.projectProperty.areaOthers = 90;

    this.projectProperty.subLot = 100;
    this.projectProperty.subLotSaleable = 110;
    this.projectProperty.subLotNonSaleable = 120;
    this.projectProperty.subLotRoadlot = 130;
    this.projectProperty.subLotOthers = 140;
  }
}
