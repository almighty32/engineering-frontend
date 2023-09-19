import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { AutomaticManualTransferSwitchModel } from '@shared/model/certificates/electrical/automatic-manual-transfer-switch-model';
import { AirconditioningRefrigerationModel } from '@shared/model/certificates/mechanical/airconditioning-refrigeration-model';
import { IAirconditioningRefrigeration } from '@shared/model/interface/certificates/mechanical/iairconditioning-refrigeration-model';
import { AirconditioningRefrigerationService } from '@shared/services/certificates-clearances/mechanical/airconditioning-refrigeration.service';
import { FormService } from '@shared/services/form.service';
import { AutomaticManualTransferSwitchPrintService } from '@shared/services/print/certificates/electrical/automatic-manual-transfer-switch-print.service';
import { AirconAndRefrigerationPrintService } from '@shared/services/print/certificates/mechanical/aircon-refrigeration-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateAutomaticManualTransferSwitchCertDialogComponent } from 'app/routes/clearance-certificate/electrical/automatic-manual-transfer-switch/create-automatic-manual-transfer-switch-cert-dialog/create-automatic-manual-transfer-switch-cert-dialog.component';
import { CreateAirconRefCertDialogComponent } from '../create-aircon-ref-cert-dialog/create-aircon-ref-cert-dialog.component';

@Component({
  selector: 'app-list-aircon-ref-cert',
  templateUrl: './list-aircon-ref-cert.component.html',
  styleUrls: ['./list-aircon-ref-cert.component.scss'],
})
export class ListAirconRefCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.ACRColumns;
  ELEMENT_DATA: IAirconditioningRefrigeration[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private ACRService: AirconditioningRefrigerationService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: AirconAndRefrigerationPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.ACRService.findAll();
    this.ACRService.ACRCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateAirconRefCertDialogComponent, {
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
  editRecord(data: IAirconditioningRefrigeration) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.ACRService.setCertificate(data);
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

  async printCertificate(
    element: IAirconditioningRefrigeration = new AirconditioningRefrigerationModel()
  ) {
    this.printService.print(element);
  }
}
