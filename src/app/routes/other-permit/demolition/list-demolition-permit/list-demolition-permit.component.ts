import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';

import { MatDialog } from '@angular/material/dialog';
import { IDemolitionPermitModel } from '@shared/model/interface/idemolition-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { DemolitionPermitService } from '@shared/services/demolition-permit.service';
import { FormService } from '@shared/services/form.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { PDFDocument } from 'pdf-lib';
import { CreateDemolitionPermitDialogComponent } from '../create-demolition-permit-dialog/create-demolition-permit-dialog.component';
import { DemolitionPermitPrintService } from '@shared/services/print/permit/demolition-permit-print.service';

@Component({
  selector: 'app-list-demolition-permit',
  templateUrl: './list-demolition-permit.component.html',
  styleUrls: ['./list-demolition-permit.component.scss'],
})
export class ListDemolitionPermitComponent implements OnInit {
  displayedColumns: string[] = this.tableService.DPColumns;
  dataSource = new MatTableDataSource<IDemolitionPermitModel>([]);
  selection = new SelectionModel<IDemolitionPermitModel>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    // private logger: NGXLogger,
    // private notificationService: NotificationService,
    private demolitionPermitService: DemolitionPermitService,
    private buildingPermitService: BuildingPermitService,
    private titleService: Title,
    private formService: FormService,
    private signatoryService: SignatoryService,
    private tableService: TableService,
    private printService: DemolitionPermitPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Demolition Permit');
    this.demolitionPermitService.findAll();
    this.demolitionPermitService.demolitionPermitList.subscribe(msg => {
      this.dataSource = new MatTableDataSource(msg);
    });

    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateDemolitionPermitDialogComponent, {
      hasBackdrop: true,

      width: '95vw',
      // minHeight: '90vh',
      maxHeight: '80vh',
      // disableClose: true,
      autoFocus: false,
      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  editRecord(data: IDemolitionPermitModel) {
    this.formService.setSaveSelector('UPDATE');
    this.demolitionPermitService.setData(data);
    const { building } = data;
    this.buildingPermitService.setData(building);
    this.signatoryService.setInspectorSupervisor(data.inspectorOrSupervisor);
    this.openCreateDialog();
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

  async printDemolitionPermit(element: IDemolitionPermitModel) {
    console.log(element);
    this.printService.print(element);
  }

  printList() {
    this.printService.printList();
  }
}
