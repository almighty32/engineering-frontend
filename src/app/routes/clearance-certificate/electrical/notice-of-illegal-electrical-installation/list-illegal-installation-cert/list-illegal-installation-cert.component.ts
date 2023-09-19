import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { IllegalElectricalInstallationModel } from '@shared/model/certificates/electrical/illegal-electrical-installation-model';
import { IIllegalElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iillegal-electrical-installation-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { IllegalElectricalInstallationService } from '@shared/services/certificates-clearances/electrical/notice-illegal-electrical-installation.service';
import { DateService } from '@shared/services/date.service';
import { FormService } from '@shared/services/form.service';
import { NotificationService } from '@shared/services/notification.service';
import { IllegalElectricalInstallationPrintService } from '@shared/services/print/certificates/electrical/illegal-electrical-installation-print.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { CreateIllegalInstallationCertificateDialogComponent } from '../create-illegal-electrical-installation-cert-dialog/create-illegal-electrical-installation-cert-dialog.component';
@Component({
  selector: 'app-list-illegal-installation-cert',
  templateUrl: './list-illegal-installation-cert.component.html',
  styleUrls: ['./list-illegal-installation-cert.component.scss'],
})
export class ListIllegalInstallationCertificateComponent implements OnInit {
  displayedColumns: string[] = this.tableService.IEICertColumns;
  ELEMENT_DATA: IIllegalElectricalInstallationModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    // private logger: NGXLogger,
    private notificationService: NotificationService,
    private buildingPermitService: BuildingPermitService,
    private illegalElectricalInstallationService: IllegalElectricalInstallationService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private dateService: DateService,
    private signatoryService: SignatoryService,
    private printService: IllegalElectricalInstallationPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Fencing Permit');
    this.illegalElectricalInstallationService.findAll();
    this.illegalElectricalInstallationService.illegalElectricalInstList.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateIllegalInstallationCertificateDialogComponent, {
      hasBackdrop: true,

      width: '95vw',
      // minHeight: '90vh',
      maxHeight: '80vh',
      disableClose: true,
      autoFocus: false,
      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  editRecord(data: IIllegalElectricalInstallationModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.illegalElectricalInstallationService.setData(data);
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
    element: IIllegalElectricalInstallationModel = new IllegalElectricalInstallationModel()
  ) {
    this.printService.print(element);
  }
}
