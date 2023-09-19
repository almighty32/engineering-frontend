import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { MachineryModel } from '@shared/model/certificates/mechanical/machinery-model';
import { IMachinery } from '@shared/model/interface/certificates/mechanical/machinery-model';
import { MachineryService } from '@shared/services/certificates-clearances/mechanical/machinery.service';
import { FormService } from '@shared/services/form.service';
import { MachineryPrintService } from '@shared/services/print/certificates/mechanical/machinery-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateMachineryCertDialogComponent } from '../create-machinery-cert-dialog/create-machinery-cert-dialog.component';

@Component({
  selector: 'app-list-machinery-cert',
  templateUrl: './list-machinery-cert.component.html',
  styleUrls: ['./list-machinery-cert.component.scss'],
})
export class ListMachineryCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.MColumns;
  ELEMENT_DATA: IMachinery[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private mService: MachineryService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: MachineryPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.mService.findAll();
    this.mService.MCertificates.subscribe(msg => {
      this.ELEMENT_DATA = msg;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateMachineryCertDialogComponent, {
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
  editRecord(data: IMachinery) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.mService.setCertificate(data);
    const { mechanicalPermit } = data;
    // this.buildingPermitService.setData(building);
    // this.signatoryService.setDesignProfessional(data.designProfessional);
    // this.signatoryService.setInspectorSupervisor(data.inspectorOrSupervisor);
    this.openCreateDialog();
  }
  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }

  async printCertificate(element: IMachinery = new MachineryModel()) {
    this.printService.print(element);
  }
}
