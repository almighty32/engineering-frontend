import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { NoticeIllegalMechanicalInstallationModel } from '@shared/model/certificates/mechanical/notice-illegal-mechanical-installation-model';
import { INoticeIllegalMechanicalInstallationModel } from '@shared/model/interface/certificates/mechanical/inotice-illegal-mechanical-installation-model';
import { IllegalMechanicalInstallationService } from '@shared/services/certificates-clearances/mechanical/illegal-mechanical-inst.service';
import { FormService } from '@shared/services/form.service';
import { IllegalMechanicalInstallationPrintService } from '@shared/services/print/certificates/mechanical/illegal-mechanical-installation-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateIllegalMechanicalInstallationNoticeDialogComponent } from '../create-illegal-mech-inst-notice-dialog/create-illegal-mechanical-installation-notice-dialog.component';

@Component({
  selector: 'app-list-illegal-mechanical-installation-notice',
  templateUrl: './list-illegal-mechanical-installation-notice.component.html',
  styleUrls: ['./list-illegal-mechanical-installation-notice.component.scss'],
})
export class ListIllegalMechanicalInstallationNoticeComponent implements OnInit {
  displayedColumns: string[] = this.tableService.AMTSCertColumns;
  ELEMENT_DATA: INoticeIllegalMechanicalInstallationModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private IMIService: IllegalMechanicalInstallationService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: IllegalMechanicalInstallationPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.IMIService.findAll();
    this.IMIService.IMICertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateIllegalMechanicalInstallationNoticeDialogComponent, {
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
  editRecord(data: INoticeIllegalMechanicalInstallationModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.IMIService.setCertificate(data);
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
    element: INoticeIllegalMechanicalInstallationModel = new NoticeIllegalMechanicalInstallationModel()
  ) {
    this.printService.print(element);
  }
}
