import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { AutomaticManualTransferSwitchModel } from '@shared/model/certificates/electrical/automatic-manual-transfer-switch-model';
import { ElevatorDumbwaiterModel } from '@shared/model/certificates/mechanical/elevator-dumbwaiter-model';
import { IElevatorDumbWaiter } from '@shared/model/interface/certificates/mechanical/ielevator-dumbwaiter-model';
import { ElevatorDumbwaiterService } from '@shared/services/certificates-clearances/mechanical/elevator-dumbwaiter.service';
import { FormService } from '@shared/services/form.service';
import { AutomaticManualTransferSwitchPrintService } from '@shared/services/print/certificates/electrical/automatic-manual-transfer-switch-print.service';
import { ElevatorDumbwaiterPrintService } from '@shared/services/print/certificates/mechanical/elevator-dumbwaiter-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateIllegalMechanicalInstallationNoticeDialogComponent } from '../../illegal-mechanical-installation/create-illegal-mech-inst-notice-dialog/create-illegal-mechanical-installation-notice-dialog.component';
import { CreateElevatorDumbwaiterCertDialogComponent } from '../create-elevator-dumbwaiter-cert-dialog/create-elevator-dumbwaiter-cert-dialog.component';

@Component({
  selector: 'app-list-elevator-dumbwaiter-cert',
  templateUrl: './list-elevator-dumbwaiter-cert.component.html',
  styleUrls: ['./list-elevator-dumbwaiter-cert.component.scss'],
})
export class ListElevatorDumbwaiterCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.EDColumns;
  ELEMENT_DATA: IElevatorDumbWaiter[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private edService: ElevatorDumbwaiterService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: ElevatorDumbwaiterPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.edService.findAll();
    this.edService.edCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateElevatorDumbwaiterCertDialogComponent, {
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
  editRecord(data: IElevatorDumbWaiter) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.edService.setCertificate(data);
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

  async printCertificate(element: IElevatorDumbWaiter = new ElevatorDumbwaiterModel()) {
    this.printService.print(element);
  }
}
