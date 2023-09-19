import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { IncomingLowVoltageSwitchgearModel } from '@shared/model/certificates/electrical/incoming-low-voltage-switchgear-model';
import { IIncomingLowVoltageSwitchgearModel } from '@shared/model/interface/certificates/electical/iincoming-low-voltage-switchgear-model';
import { IncomingLowVoltageSwitchGearService } from '@shared/services/certificates-clearances/electrical/incoming-low-voltage-switch-gear.service';
import { FormService } from '@shared/services/form.service';
import { IncomingLowVoltageSwitchGearPrintService } from '@shared/services/print/certificates/electrical/incoming-low-voltage-switch-gear-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateIncomingLVSwitchgearDialogComponent } from '../create-incoming-low-voltage-switchgear-dialog/create-incoming-low-voltage-switchgear-cert-dialog.component';

@Component({
  selector: 'app-list-incoming-low-voltage-switchgear-cert',
  templateUrl: './list-incoming-low-voltage-switchgear-cert.component.html',
  styleUrls: ['./list-incoming-low-voltage-switchgear-cert.component.scss'],
})
export class ListIncomingLVSwitchgearCertificateComponent implements OnInit {
  displayedColumns: string[] = this.tableService.ILVSGCertColumns;
  ELEMENT_DATA: IIncomingLowVoltageSwitchgearModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private ILVSGService: IncomingLowVoltageSwitchGearService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: IncomingLowVoltageSwitchGearPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.ILVSGService.findAll();
    this.ILVSGService.ILVSWCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateIncomingLVSwitchgearDialogComponent, {
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
  editRecord(data: IIncomingLowVoltageSwitchgearModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.ILVSGService.setCertificate(data);
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
    element: IIncomingLowVoltageSwitchgearModel = new IncomingLowVoltageSwitchgearModel()
  ) {
    this.printService.print(element);
  }
}
