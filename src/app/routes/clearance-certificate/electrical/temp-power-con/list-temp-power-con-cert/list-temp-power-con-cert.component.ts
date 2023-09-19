import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { TemporaryPowerConnectionModel } from '@shared/model/certificates/electrical/temporary-power-connection-model';
import { ITemporaryPowerConnectionModel } from '@shared/model/interface/certificates/electical/itemporary-power-connection-model';
import { UnsafeElectricalInstallationService } from '@shared/services/certificates-clearances/electrical/notice-unsafe-electrical-installation.service';
import { TemporaryPowerConnectionService } from '@shared/services/certificates-clearances/electrical/temporary-power-connection.service';
import { FormService } from '@shared/services/form.service';
import { TemporaryPowerConnectionPrintService } from '@shared/services/print/certificates/electrical/temporary-power-connection-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateTemporaryPowerConDialogComponent } from '../create-temp-power-con-cert-dialog/create-temp-power-con-cert-dialog.component';

@Component({
  selector: 'app-list-temp-power-con-cert',
  templateUrl: './list-temp-power-con-cert.component.html',
  styleUrls: ['./list-temp-power-con-cert.component.scss'],
})
export class ListTemporaryPowerConCertificateComponent implements OnInit {
  displayedColumns: string[] = this.tableService.TPCCertColumns;
  ELEMENT_DATA: ITemporaryPowerConnectionModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private unsafeElectricalInstallationService: TemporaryPowerConnectionService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: TemporaryPowerConnectionPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.unsafeElectricalInstallationService.findAll();
    this.unsafeElectricalInstallationService.tpcCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateTemporaryPowerConDialogComponent, {
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
  editRecord(data: ITemporaryPowerConnectionModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.unsafeElectricalInstallationService.setTPCCertificate(data);
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

  async printCertificate(
    element: ITemporaryPowerConnectionModel = new TemporaryPowerConnectionModel()
  ) {
    this.printService.print(element);
  }
}
