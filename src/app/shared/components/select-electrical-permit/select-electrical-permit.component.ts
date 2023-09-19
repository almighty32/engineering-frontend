import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';

@Component({
  selector: 'app-select-electrical-permit',
  templateUrl: './select-electrical-permit.component.html',
  styleUrls: ['./select-electrical-permit.component.scss'],
})
export class SelectElectricalPermitComponent implements OnInit {
  ELEMENT_DATA: IElectricalPermit[] = [];
  displayedColumns: string[] = ['epNo', 'firstName', 'address'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<IElectricalPermit>(true, []);
  selectedData: IElectricalPermit = {} as IElectricalPermit;
  selectedRowIndex = '';

  // @ViewChild(PropertyListComponent) property = new PropertyListComponent();

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private electricalPermitService: ElectricalPermitService,
    private titleService: Title,
    public dialog: MatDialogRef<SelectElectricalPermitComponent>
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Building Permit');
    // this.logger.log('Building permits loaded');
    // this.notificationService.openSnackBar('Building permits loaded');
    this.dataSource.sort = this.sort;
    this.fetchAllBuildingPermit();

    this.electricalPermitService.electricalPermitList.subscribe(msg => {
      this.dataSource = new MatTableDataSource(msg);
    });
  }
  rowSelect(data: IElectricalPermit) {
    this.selectedRowIndex = data.id ?? '';
    this.selectedData = data;
  }
  fetchAllBuildingPermit() {
    this.electricalPermitService.findAll();
  }

  closeDialog() {
    this.electricalPermitService.setData(this.selectedData);
    this.dialog.close();
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

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IElectricalPermit): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id ?? 0 + 1}`;
  }

  edit(element: IElectricalPermit) {
    // this.router.navigateByUrl('/building/create');
  }
}
