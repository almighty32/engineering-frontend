import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { MotorControlCenterModel } from '@shared/model/certificates/electrical/imotor-control-center-model';
import { IMotorControlCenterModel } from '@shared/model/interface/certificates/electical/imotor-control-center-model';
import { MotorControlCenterService } from '@shared/services/certificates-clearances/electrical/motor-control-center.service';
import { FormService } from '@shared/services/form.service';
import { MotorControlCenterPrintService } from '@shared/services/print/certificates/electrical/motor-control-center-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateMotorControlCenterCertDialogComponent } from '../create-motor-control-center-cert-dialog/create-motor-control-center-cert-dialog.component';

@Component({
  selector: 'app-list-motor-control-center-cert',
  templateUrl: './list-motor-control-center-cert.component.html',
  styleUrls: ['./list-motor-control-center-cert.component.scss'],
})
export class ListMotorControlCenterCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.MCCCertColumns;
  ELEMENT_DATA: IMotorControlCenterModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private mccService: MotorControlCenterService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: MotorControlCenterPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.mccService.findAll();
    this.mccService.MCCCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateMotorControlCenterCertDialogComponent, {
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
  editRecord(data: IMotorControlCenterModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.mccService.setCertificate(data);
    const { electricalPermit } = data;
    // this.buildingPermitService.setData(building);
    // this.signatoryService.setDesignProfessional(data.designProfessional);
    // this.signatoryService.setInspectorSupervisor(data.inspectorOrSupervisor);
    this.openCreateDialog();
  }
  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }

  async printCertificate(element: IMotorControlCenterModel = new MotorControlCenterModel()) {
    this.printService.print(element);
  }
}
