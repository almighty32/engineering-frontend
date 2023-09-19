import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { InternalCombustionEngineModel } from '@shared/model/certificates/mechanical/internal-combustion-engine-model';
import { IInternalCombustionEngineModel } from '@shared/model/interface/certificates/mechanical/iinternal-combustion-engine-model';
import { InternalCombustionEngineService } from '@shared/services/certificates-clearances/mechanical/internal-combustion-engine.service';
import { FormService } from '@shared/services/form.service';
import { InternalCombustionEnginePrintService } from '@shared/services/print/certificates/mechanical/internal-combustion-engine-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateInternalCombustionEngineCertDialogComponent } from '../create-internal-combustion-engine-cert-dialog/create-internal-combustion-engine-cert-dialog.component';

@Component({
  selector: 'app-list-internal-combustion-engine-cert',
  templateUrl: './list-internal-combustion-engine-cert.component.html',
  styleUrls: ['./list-internal-combustion-engine-cert.component.scss'],
})
export class ListInternalCombustionEngineCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.ICEColumns;
  ELEMENT_DATA: IInternalCombustionEngineModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private iceService: InternalCombustionEngineService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: InternalCombustionEnginePrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.iceService.findAll();
    this.iceService.ICECertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateInternalCombustionEngineCertDialogComponent, {
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
  editRecord(data: IInternalCombustionEngineModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.iceService.setCertificate(data);
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
    element: IInternalCombustionEngineModel = new InternalCombustionEngineModel()
  ) {
    this.printService.print(element);
  }
}
