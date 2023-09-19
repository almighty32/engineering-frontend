import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { HvMvPrimaryDisconnectingMeansModel } from '@shared/model/certificates/electrical/hvmv-primary-disconnecting-means-model';
import { TemporaryPowerConnectionModel } from '@shared/model/certificates/electrical/temporary-power-connection-model';
import { IHvMvPrimaryDisconnectingMeansModel } from '@shared/model/interface/certificates/electical/ihvmv-primary-disconnecting-means-model';
import { ITemporaryPowerConnectionModel } from '@shared/model/interface/certificates/electical/itemporary-power-connection-model';
import { HVMVPrimaryDisconnectingMeansService } from '@shared/services/certificates-clearances/electrical/hvmv-primary-disconnecting-means.service';
import { FormService } from '@shared/services/form.service';
import { HVMVPrmariyDisconnectingMeansPrintService } from '@shared/services/print/certificates/electrical/hvmv-primary-disconnecting-means-print.service';
import { TemporaryPowerConnectionPrintService } from '@shared/services/print/certificates/electrical/temporary-power-connection-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateHvmvPrimaryDisconMeansCertDialogComponent } from '../create-hvmv-primary-discon-means-cert-dialog/create-hvmv-primary-discon-means-cert-dialog.component';

@Component({
  selector: 'app-list-hvmv-primary-discon-means-cert',
  templateUrl: './list-hvmv-primary-discon-means-cert.component.html',
  styleUrls: ['./list-hvmv-primary-discon-means-cert.component.scss'],
})
export class ListHvmvPrimaryDisconMeansCertificateComponent implements OnInit {
  displayedColumns: string[] = this.tableService.HVMVPDMCertColumns;
  ELEMENT_DATA: IHvMvPrimaryDisconnectingMeansModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private HVMVPDMService: HVMVPrimaryDisconnectingMeansService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: HVMVPrmariyDisconnectingMeansPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.HVMVPDMService.findAll();
    this.HVMVPDMService.HVMVPDMCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateHvmvPrimaryDisconMeansCertDialogComponent, {
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
  editRecord(data: IHvMvPrimaryDisconnectingMeansModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.HVMVPDMService.setCertificate(data);
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
    element: IHvMvPrimaryDisconnectingMeansModel = new HvMvPrimaryDisconnectingMeansModel()
  ) {
    this.printService.print(element);
  }
}
