import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { TemporaryPowerConnectionModel } from '@shared/model/certificates/electrical/temporary-power-connection-model';
import { ITemporaryPowerConnectionModel } from '@shared/model/interface/certificates/electical/itemporary-power-connection-model';
import { IUnsafeElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iunsafe-electrical-installation-model';
import { UnsafeElectricalInstallationService } from '@shared/services/certificates-clearances/electrical/notice-unsafe-electrical-installation.service';
import { FormService } from '@shared/services/form.service';
import { TemporaryPowerConnectionPrintService } from '@shared/services/print/certificates/electrical/temporary-power-connection-print.service';
import { CreateFinalElectInspCertDialogComponent } from '../create-final-electrical-inspection-cert-dialog/create-final-electrical-inspection-cert-dialog.component';

@Component({
  selector: 'app-list-final-electrical-inspection-cert',
  templateUrl: './list-final-electrical-inspection-cert.component.html',
  styleUrls: ['./list-final-electrical-inspection-cert.component.scss'],
})
export class ListFinalElectInspCertificateComponent implements OnInit {
  displayedColumns: string[] = [
    'applicationNo',
    'firstName',
    'lotNo',
    'blockNo',
    'tctNo',
    'taxDecNo',
    'street',
    'baranggay',
    'cityMun',
    'action',
  ];
  ELEMENT_DATA: IUnsafeElectricalInstallationModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private unsafeElectricalInstallationService: UnsafeElectricalInstallationService,
    private formService: FormService,
    private titleService: Title,
    private printService: TemporaryPowerConnectionPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.unsafeElectricalInstallationService.findAll();
    this.unsafeElectricalInstallationService.unsafeElectricalInstallationCertList.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateFinalElectInspCertDialogComponent, {
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
  editRecord(data: IUnsafeElectricalInstallationModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.unsafeElectricalInstallationService.setData(data);
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
