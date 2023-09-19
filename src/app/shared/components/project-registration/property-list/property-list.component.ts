import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { ProjectRegistrationModel } from '@shared/model/project-registration-model';
import { IProjectPropertyModel } from '@shared/model/shared/iproject-property-model';
import { PropertyFormDialogComponent } from '../property-form-dialog/property-form-dialog.component';

export interface PeriodicElement {
  id: number;
  date: string;
  applicationCode: string;
  areaCode: number;
  fullname: string;
  lotNo: string;
  blockNo: string;
  tctNo: string;
  idNo: string;
  propStreet: string;
  propBrg: string;
  propCityMun: string;
  status: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  projectRegistration: IProjectRegistrationlModel = new ProjectRegistrationModel();

  animal?: string;
  name?: string;

  printTitle = 'BUILDING';

  displayedColumns: string[] = [
    'tctNo',
    'owner',
    'address',
    'lotNo',
    'block',
    'surveyNo',
    'area',
    'areaSaleable',
    'areaNonSaleable',
    'areaRoadlot',
    'areaOthers',
    'subLot',
  ];

  dataSource = new MatTableDataSource(this.projectRegistration.property);
  selection = new SelectionModel<IProjectPropertyModel>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(private matDialog?: MatDialog) {}

  ngOnInit() {
    // this.titleService.setTitle('Engineering - Building Permit');
    this.dataSource.sort = this.sort;
  }

  addProjectProperty() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  openModal() {
    const dialogRef = this.matDialog!.open(PropertyFormDialogComponent, {
      width: '6000px',
      maxHeight: '90vh',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projectRegistration.property = [...this.projectRegistration.property, result];
        this.dataSource = new MatTableDataSource(this.projectRegistration.property);
      }
    });
  }
}
