import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { AutomaticManualTransferSwitchModel } from '@shared/model/certificates/electrical/automatic-manual-transfer-switch-model';
import { UnfiredPressuredVesselModel } from '@shared/model/certificates/mechanical/unfired-pressure-vessel-model';
import { IUnfiredPressuredVesselModel } from '@shared/model/interface/certificates/mechanical/iunfired-pressure-vessel-model';
import { UnfiredPressureVesselService } from '@shared/services/certificates-clearances/mechanical/unfired-pressure-vessel.service';
import { FormService } from '@shared/services/form.service';
import { AutomaticManualTransferSwitchPrintService } from '@shared/services/print/certificates/electrical/automatic-manual-transfer-switch-print.service';
import { UnfiredPressureVesselPrintService } from '@shared/services/print/certificates/mechanical/unfired-pressure-vessel-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateIllegalMechanicalInstallationNoticeDialogComponent } from '../../illegal-mechanical-installation/create-illegal-mech-inst-notice-dialog/create-illegal-mechanical-installation-notice-dialog.component';
import { CreateUnfiredPressureVesselCertDialogComponent } from '../create-unfired-pressure-vessel-cert-dialog/create-unfired-pressure-vessel-cert-dialog.component';

@Component({
  selector: 'app-list-unfired-pressure-vessel-cert',
  templateUrl: './list-unfired-pressure-vessel-cert.component.html',
  styleUrls: ['./list-unfired-pressure-vessel-cert.component.scss'],
})
export class ListUnfiredPressureVesselCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.UPVColumns;
  ELEMENT_DATA: IUnfiredPressuredVesselModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private upvService: UnfiredPressureVesselService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: UnfiredPressureVesselPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.upvService.findAll();
    this.upvService.UPVCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateUnfiredPressureVesselCertDialogComponent, {
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
  editRecord(data: IUnfiredPressuredVesselModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.upvService.setCertificate(data);
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
    element: IUnfiredPressuredVesselModel = new UnfiredPressuredVesselModel()
  ) {
    this.printService.print(element);
  }
}
