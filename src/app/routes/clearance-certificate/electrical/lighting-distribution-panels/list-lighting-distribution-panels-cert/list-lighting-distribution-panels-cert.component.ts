import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { LightingDistributionPanelModel } from '@shared/model/certificates/electrical/lighting-distribution-panel-model';
import { TemporaryPowerConnectionModel } from '@shared/model/certificates/electrical/temporary-power-connection-model';
import { ILightingDistributionPanelModel } from '@shared/model/interface/certificates/electical/ilighting-distribution-panel-model';
import { LightningDistributionPanelService } from '@shared/services/certificates-clearances/electrical/lighting-distribution-panel.service';
import { FormService } from '@shared/services/form.service';
import { LightingDistributionPanelPrintService } from '@shared/services/print/certificates/electrical/lighting-distribution-panel-print.service';
import { TemporaryPowerConnectionPrintService } from '@shared/services/print/certificates/electrical/temporary-power-connection-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateLightingDistributionPanelCertDialogComponent } from '../create-lighting-distribution-panels-cert-dialog/create-lighting-distribution-panels-cert-dialog.component';

@Component({
  selector: 'app-list-lighting-distribution-panels-cert',
  templateUrl: './list-lighting-distribution-panels-cert.component.html',
  styleUrls: ['./list-lighting-distribution-panels-cert.component.scss'],
})
export class ListLightingDistributionPanelCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.LDPCertColumns;
  ELEMENT_DATA: ILightingDistributionPanelModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private LDPService: LightningDistributionPanelService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: LightingDistributionPanelPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.LDPService.findAll();
    this.LDPService.LDPCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateLightingDistributionPanelCertDialogComponent, {
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
  editRecord(data: ILightingDistributionPanelModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.LDPService.setCertificate(data);
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
    element: ILightingDistributionPanelModel = new LightingDistributionPanelModel()
  ) {
    this.printService.print(element);
  }
}
