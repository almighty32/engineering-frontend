import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { AutomaticManualTransferSwitchModel } from '@shared/model/certificates/electrical/automatic-manual-transfer-switch-model';
import { TemporaryPowerConnectionModel } from '@shared/model/certificates/electrical/temporary-power-connection-model';
import { IAutomaticManualTransferSwitchModel } from '@shared/model/interface/certificates/electical/iautomatic-manual-transfer-switch-model';
import { AutomaticManualTransferSwitchService } from '@shared/services/certificates-clearances/automatic-manual-transfer-switch.service';
import { FormService } from '@shared/services/form.service';
import { AutomaticManualTransferSwitchPrintService } from '@shared/services/print/certificates/electrical/automatic-manual-transfer-switch-print.service';
import { TemporaryPowerConnectionPrintService } from '@shared/services/print/certificates/electrical/temporary-power-connection-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateAutomaticManualTransferSwitchCertDialogComponent } from '../create-automatic-manual-transfer-switch-cert-dialog/create-automatic-manual-transfer-switch-cert-dialog.component';

@Component({
  selector: 'app-list-automatic-manual-transfer-switch-cert',
  templateUrl: './list-automatic-manual-transfer-switch-cert.component.html',
  styleUrls: ['./list-automatic-manual-transfer-switch-cert.component.scss'],
})
export class ListAutomaticManualTransferSwitchCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.AMTSCertColumns;
  ELEMENT_DATA: IAutomaticManualTransferSwitchModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private AMTSService: AutomaticManualTransferSwitchService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: AutomaticManualTransferSwitchPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.AMTSService.findAll();
    this.AMTSService.AMTSCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateAutomaticManualTransferSwitchCertDialogComponent, {
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
  editRecord(data: IAutomaticManualTransferSwitchModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.AMTSService.setCertificate(data);
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
    element: IAutomaticManualTransferSwitchModel = new AutomaticManualTransferSwitchModel()
  ) {
    this.printService.print(element);
  }
}
