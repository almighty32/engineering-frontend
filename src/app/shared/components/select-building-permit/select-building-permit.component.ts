import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { BuildingPermitService } from '@shared/services/building-permit.service';

@Component({
  selector: 'app-select-building-permit',
  templateUrl: './select-building-permit.component.html',
  styleUrls: ['./select-building-permit.component.scss'],
})
export class SelectBuildingPermitComponent implements OnInit {
  ELEMENT_DATA: IBuildingPermitModel[] = [];
  displayedColumns: string[] = ['bpNo', 'firstName', 'address'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<IBuildingPermitModel>(true, []);
  selectedData: IBuildingPermitModel = {} as IBuildingPermitModel;
  selectedRowIndex?: string;

  // @ViewChild(PropertyListComponent) property = new PropertyListComponent();

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private buildingPermitService: BuildingPermitService,
    private titleService: Title,
    public dialog: MatDialogRef<SelectBuildingPermitComponent>
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Building Permit');
    // this.logger.log('Building permits loaded');
    // this.notificationService.openSnackBar('Building permits loaded');
    this.dataSource.sort = this.sort;
    this.fetchAllBuildingPermit();

    this.buildingPermitService.buildingPermitList.subscribe(msg => {
      this.dataSource = new MatTableDataSource(msg);
    });
  }
  rowSelect(data: IBuildingPermitModel) {
    this.selectedRowIndex = data.id;
    this.selectedData = data;
  }
  fetchAllBuildingPermit() {
    this.buildingPermitService.findAll();
  }

  closeDialog() {
    this.buildingPermitService.setData(this.selectedData);
    this.dialog.close(this.selectedData);
  }

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

  edit(element: IBuildingPermitModel) {
    // this.router.navigateByUrl('/building/create');
  }
}
