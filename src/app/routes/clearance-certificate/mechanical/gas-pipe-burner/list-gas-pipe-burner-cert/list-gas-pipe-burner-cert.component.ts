import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { AutomaticManualTransferSwitchModel } from '@shared/model/certificates/electrical/automatic-manual-transfer-switch-model';
import { GasPipeBurnerModel } from '@shared/model/certificates/mechanical/gas-pipe-burner-model';
import { IGasPipeBurnerModel } from '@shared/model/interface/certificates/mechanical/igas-pipe-burner-model';
import { GaspipeAndBurnerService } from '@shared/services/certificates-clearances/mechanical/gas-pipe-burner.service';
import { FormService } from '@shared/services/form.service';
import { AutomaticManualTransferSwitchPrintService } from '@shared/services/print/certificates/electrical/automatic-manual-transfer-switch-print.service';
import { GaspipeOrBurnerPrintService } from '@shared/services/print/certificates/mechanical/gas-pipe-or-burner-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateIllegalMechanicalInstallationNoticeDialogComponent } from '../../illegal-mechanical-installation/create-illegal-mech-inst-notice-dialog/create-illegal-mechanical-installation-notice-dialog.component';
import { CreateGasPipeBurnerCertDialogComponent } from '../create-gas-pipe-burner-cert-dialog/create-gas-pipe-burner-cert-dialog.component';

@Component({
  selector: 'app-list-gas-pipe-burner-cert',
  templateUrl: './list-gas-pipe-burner-cert.component.html',
  styleUrls: ['./list-gas-pipe-burner-cert.component.scss'],
})
export class ListGasPipeBurnerCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.GPBColumns;
  ELEMENT_DATA: IGasPipeBurnerModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private gpbService: GaspipeAndBurnerService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: GaspipeOrBurnerPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.gpbService.findAll();
    this.gpbService.GPBCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateGasPipeBurnerCertDialogComponent, {
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
  editRecord(data: IGasPipeBurnerModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.gpbService.setCertificate(data);
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

  async printCertificate(element: IGasPipeBurnerModel = new GasPipeBurnerModel()) {
    this.printService.print(element);
  }
}
