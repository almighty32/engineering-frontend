import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { IMechanicalPermit } from '@shared/model/interface/mechanical-permit/i-mechanical-permit-model';
import { MechanicalPermitService } from '@shared/services/mechanical-permit.service';

@Component({
  selector: 'app-select-mechanical-permit',
  templateUrl: './select-mechanical-permit.component.html',
  styleUrls: ['./select-mechanical-permit.component.scss'],
})
export class SelectMechanicalPermitComponent implements OnInit {
  ELEMENT_DATA: IMechanicalPermit[] = [];
  displayedColumns: string[] = ['mpNo', 'firstName', 'address'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<IMechanicalPermit>(true, []);
  selectedData: IMechanicalPermit = {} as IMechanicalPermit;
  selectedRowIndex = '';

  // @ViewChild(PropertyListComponent) property = new PropertyListComponent();

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private mpService: MechanicalPermitService,
    private titleService: Title,
    public dialog: MatDialogRef<SelectMechanicalPermitComponent>
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Building Permit');
    // this.logger.log('Building permits loaded');
    // this.notificationService.openSnackBar('Building permits loaded');
    this.dataSource.sort = this.sort;
    this.fetchAllBuildingPermit();

    this.mpService.mechanicalPermitList.subscribe(msg => {
      this.dataSource = new MatTableDataSource(msg);
    });
  }
  rowSelect(data: IMechanicalPermit) {
    this.selectedRowIndex = data.id ?? '';
    this.selectedData = data;
  }
  fetchAllBuildingPermit() {
    this.mpService.findAll();
  }

  closeDialog() {
    this.mpService.setData(this.selectedData);
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
  checkboxLabel(row?: IMechanicalPermit): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id ?? 0 + 1}`;
  }

  edit(element: IMechanicalPermit) {
    // this.router.navigateByUrl('/building/create');
  }
}
