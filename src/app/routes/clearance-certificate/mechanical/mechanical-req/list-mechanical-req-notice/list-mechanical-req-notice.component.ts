import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { AutomaticManualTransferSwitchModel } from '@shared/model/certificates/electrical/automatic-manual-transfer-switch-model';
import { NoticeMechanicalRequirementsModel } from '@shared/model/certificates/mechanical/notice-mechanical-requirements-model';
import { INoticeMechanicalRequirementsModel } from '@shared/model/interface/certificates/mechanical/inotice-mechanical-requirements-model';
import { NoticeOfMechanicalReqService } from '@shared/services/certificates-clearances/mechanical/mechanical-req.service';
import { FormService } from '@shared/services/form.service';
import { AutomaticManualTransferSwitchPrintService } from '@shared/services/print/certificates/electrical/automatic-manual-transfer-switch-print.service';
import { MechanicalRequirementPrintService } from '@shared/services/print/certificates/mechanical/mechanical-requirement-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateIllegalMechanicalInstallationNoticeDialogComponent } from '../../illegal-mechanical-installation/create-illegal-mech-inst-notice-dialog/create-illegal-mechanical-installation-notice-dialog.component';
import { CreateMechanicalReqNoticeDialogComponent } from '../create-mechanical-req-notice-dialog/create-mechanical-req-notice-dialog.component';
import { CreateMechanicalReqNoticeComponent } from '../create-mechanical-req-notice/create-mechanical-req-notice.component';

@Component({
  selector: 'app-list-mechanical-req-notice',
  templateUrl: './list-mechanical-req-notice.component.html',
  styleUrls: ['./list-mechanical-req-notice.component.scss'],
})
export class ListMechanicalReqNoticeComponent implements OnInit {
  displayedColumns: string[] = this.tableService.MRColumns;
  ELEMENT_DATA: INoticeMechanicalRequirementsModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private mrService: NoticeOfMechanicalReqService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: MechanicalRequirementPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Notice Of Mechanical Requirements');
    this.mrService.findAll();
    this.mrService.MRCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateMechanicalReqNoticeDialogComponent, {
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
  editRecord(data: INoticeMechanicalRequirementsModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.mrService.setCertificate(data);
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
    element: INoticeMechanicalRequirementsModel = new NoticeMechanicalRequirementsModel()
  ) {
    this.printService.print(element);
  }
}
