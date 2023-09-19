import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { SelectionModel } from '@angular/cdk/collections';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { ITemporaryServiceConnectionModel } from '@shared/model/interface/itemporary-service-connection-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { FormService } from '@shared/services/form.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { TemporaryServiceConnectionPermitService } from '@shared/services/temporary-service-permit.service';
import { PDFDocument } from 'pdf-lib';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { CreateTscPermitDialogComponent } from '../create-tsc-permit-dialog/create-tsc-permit-dialog.component';
import { TSCPermitPrintService } from '@shared/services/print/permit/tsc-permit-print.service';

@Component({
  selector: 'app-list-temporary-service-connection',
  templateUrl: './list-temporary-service-connection.component.html',
  styleUrls: ['./list-temporary-service-connection.component.scss'],
})
export class ListTemporaryServiceConnectionComponent implements OnInit {
  ELEMENT_DATA: [] = [];

  displayedColumns: string[] = this.tableService.TSCPColumns;
  dataSource = new MatTableDataSource<ITemporaryServiceConnectionModel>([]);
  selection = new SelectionModel<ITemporaryServiceConnectionModel>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private tscPermitService: TemporaryServiceConnectionPermitService,
    private formService: FormService,
    private buildingPermitService: BuildingPermitService,
    private signatoryService: SignatoryService,
    private tableService: TableService,
    private printService: TSCPermitPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Mechanical Permit');

    this.tscPermitService.findAll();
    this.tscPermitService.tscPermitList.subscribe(msg => {
      this.dataSource = new MatTableDataSource(msg);
    });

    this.dataSource.sort = this.sort;
  }
  editPermit(data: ITemporaryServiceConnectionModel) {
    this.formService.setSaveSelector('UPDATE');
    this.tscPermitService.setData(data);
    const { building } = data;
    this.buildingPermitService.setData(building);
    this.signatoryService.setDesignProfessional(data.designProfessional);
    this.signatoryService.setInspectorSupervisor(data.inspectorOrSupervisor);
    this.openCreateDialog();
  }
  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateTscPermitDialogComponent, {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async printPermitApplication(element: ITemporaryServiceConnectionModel) {
    console.log(element);
    this.printService.print(element);
  }

  printList() {
    this.printService.printList();
  }
}
