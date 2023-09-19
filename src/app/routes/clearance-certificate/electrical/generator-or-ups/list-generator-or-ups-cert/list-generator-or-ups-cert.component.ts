import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { GeneratorOrUPSModel } from '@shared/model/certificates/electrical/generator-or-ups-model';
import { TemporaryPowerConnectionModel } from '@shared/model/certificates/electrical/temporary-power-connection-model';
import { IGeneratorOrUPSModelModel } from '@shared/model/interface/certificates/electical/igenerator-or-ups-model';
import { UninterruptedPowerSupplyService } from '@shared/services/certificates-clearances/electrical/uninterrupted-power-supply.service';
import { FormService } from '@shared/services/form.service';
import { GeneratorUninterruptedPowerSupplyPrintService } from '@shared/services/print/certificates/electrical/generator-uninterruped-power-supply-print.service';
import { TemporaryPowerConnectionPrintService } from '@shared/services/print/certificates/electrical/temporary-power-connection-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateGeneratorOrUpsDialogComponent } from '../create-generator-or-ups-dialog/create-generator-or-ups-cert-dialog.component';

@Component({
  selector: 'app-list-generator-or-ups-cert',
  templateUrl: './list-generator-or-ups-cert.component.html',
  styleUrls: ['./list-generator-or-ups-cert.component.scss'],
})
export class ListGeneratorOrUpsCertificateComponent implements OnInit {
  displayedColumns: string[] = this.tableService.GUPSCertColumns;
  ELEMENT_DATA: IGeneratorOrUPSModelModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private GUPSService: UninterruptedPowerSupplyService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: GeneratorUninterruptedPowerSupplyPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.GUPSService.findAll();
    this.GUPSService.GUPSCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateGeneratorOrUpsDialogComponent, {
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
  editRecord(data: IGeneratorOrUPSModelModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.GUPSService.setData(data);
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

  async printCertificate(element: IGeneratorOrUPSModelModel = new GeneratorOrUPSModel()) {
    this.printService.print(element);
  }
}
