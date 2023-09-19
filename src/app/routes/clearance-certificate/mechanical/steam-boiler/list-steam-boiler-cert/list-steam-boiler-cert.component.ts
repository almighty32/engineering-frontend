import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { SteamBoilerModel } from '@shared/model/certificates/mechanical/steam-boiler-model';
import { ISteamBoilerModel } from '@shared/model/interface/certificates/mechanical/isteam-boiler-model';
import { SteamBoilerService } from '@shared/services/certificates-clearances/mechanical/steam-boiler.service';
import { FormService } from '@shared/services/form.service';
import { SteamBoilerPrintService } from '@shared/services/print/certificates/mechanical/steam-boiler-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateSteamboilerCertDialogComponent } from '../create-steamboiler-cert-dialog/create-steamboiler-cert-dialog.component';

@Component({
  selector: 'app-list-steam-boiler-cert',
  templateUrl: './list-steam-boiler-cert.component.html',
  styleUrls: ['./list-steam-boiler-cert.component.scss'],
})
export class ListSteamBoilerCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.SBColumns;
  ELEMENT_DATA: ISteamBoilerModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private sbService: SteamBoilerService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private printService: SteamBoilerPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Unsafe Electrical Installation');
    this.sbService.findAll();
    this.sbService.SBCertificates.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateSteamboilerCertDialogComponent, {
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
  editRecord(data: ISteamBoilerModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.sbService.setCertificate(data);
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

  async printCertificate(element: ISteamBoilerModel = new SteamBoilerModel()) {
    this.printService.print(element);
  }
}
