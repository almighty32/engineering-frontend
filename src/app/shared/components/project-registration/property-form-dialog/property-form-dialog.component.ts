import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectPropertyModel } from '@shared/model/project-property-model';
import { IProjectPropertyModel } from '@shared/model/shared/iproject-property-model';
import { PropertyFormComponent } from '../property-form/property-form.component';

@Component({
  selector: 'app-property-form-dialog',
  templateUrl: './property-form-dialog.component.html',
  styleUrls: ['./property-form-dialog.component.scss'],
})
export class PropertyFormDialogComponent implements OnInit {
  @ViewChild(PropertyFormComponent) property = new PropertyFormComponent();

  // @Output() propertyEmitter = new EventEmitter<IProjectPropertyModel>();
  constructor(public dialogRef: MatDialogRef<PropertyFormDialogComponent>) {}

  ngOnInit(): void {}

  // addProjectProperty() {
  //   this.propertyEmitter.emit(new ProjectPropertyModel());
  // }
}
