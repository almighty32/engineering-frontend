import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { AutomaticManualTransferSwitchModel } from '@shared/model/certificates/electrical/automatic-manual-transfer-switch-model';
import { EscalatorModel } from '@shared/model/certificates/mechanical/escalator-model';
import { IEscalator } from '@shared/model/interface/certificates/mechanical/iescalator-model';
import { EscalatorService } from '@shared/services/certificates-clearances/mechanical/escalator.service';
import { FormService } from '@shared/services/form.service';
import { AutomaticManualTransferSwitchPrintService } from '@shared/services/print/certificates/electrical/automatic-manual-transfer-switch-print.service';
import { EscalatorPrintService } from '@shared/services/print/certificates/mechanical/escalator-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateIllegalMechanicalInstallationNoticeDialogComponent } from '../../illegal-mechanical-installation/create-illegal-mech-inst-notice-dialog/create-illegal-mechanical-installation-notice-dialog.component';
import { CreateEscalatorCertDialogComponent } from '../create-escalator-cert-dialog/create-escalator-cert-dialog.component';

@Component({
  selector: 'app-list-escalator-cert',
  templateUrl: './list-escalator-cert.component.html',
  styleUrls: ['./list-escalator-cert.component.scss'],
})
export class ListEscalatorCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.EColumns;
  ELEMENT_DATA: IEscalator[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private eService: EscalatorService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: EscalatorPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.eService.findAll();
    this.eService.EscalatorCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateEscalatorCertDialogComponent, {
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
  editRecord(data: IEscalator) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.eService.setCertificate(data);
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

  async printCertificate(element: IEscalator = new EscalatorModel()) {
    this.printService.print(element);
  }
}
