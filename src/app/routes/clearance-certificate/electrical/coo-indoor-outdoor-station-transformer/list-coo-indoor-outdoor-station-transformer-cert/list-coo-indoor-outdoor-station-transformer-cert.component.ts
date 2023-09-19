import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { IndoorOutdoorStationTransformerModel } from '@shared/model/certificates/electrical/indoor-outdoor-station-transformer-model';
import { IIndoorOutdoorStationTransformerModel } from '@shared/model/interface/certificates/electical/iindoor-outdoor-station-transformer-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { IndoorOutdoorStationTransformerService } from '@shared/services/certificates-clearances/electrical/indoor-outdoor-station-transformer.service';
import { DateService } from '@shared/services/date.service';
import { FormService } from '@shared/services/form.service';
import { IndoorOutdoorStationTransformerPrintService } from '@shared/services/print/certificates/electrical/Indoor-outdoor-station-transformer-print.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { CreateCOOIndoorOutdoorStationTransformerCertDialogComponent } from '../create-coo-indoor-outdoor-station-transformer-cert-dialog/create-coo-indoor-outdoor-station-transformer-cert-dialog.component';
@Component({
  selector: 'app-list-coo-indoor-outdoor-station-transformer-cert',
  templateUrl: './list-coo-indoor-outdoor-station-transformer-cert.component.html',
  styleUrls: ['./list-coo-indoor-outdoor-station-transformer-cert.component.scss'],
})
export class ListCOOIndoorOutdoorStationTransformerCertComponent implements OnInit {
  displayedColumns: string[] = this.tableService.IOSTCertColumns;
  ELEMENT_DATA: IIndoorOutdoorStationTransformerModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    // private logger: NGXLogger,
    private buildingPermitService: BuildingPermitService,
    private indoorOutdoorStationTransformerService: IndoorOutdoorStationTransformerService,
    private formService: FormService,
    private titleService: Title,
    private tableService: TableService,
    private dateService: DateService,
    private signatoryService: SignatoryService,
    private printService: IndoorOutdoorStationTransformerPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Fencing Permit');
    this.indoorOutdoorStationTransformerService.findAll();
    this.indoorOutdoorStationTransformerService.inOutStationTransformerList.subscribe(msg => {
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
    const dialogRef = this.dialog.open(
      CreateCOOIndoorOutdoorStationTransformerCertDialogComponent,
      {
        hasBackdrop: true,

        width: '95vw',
        // minHeight: '90vh',
        maxHeight: '80vh',
        // disableClose: true,
        autoFocus: false,
        // data: { name: this.name, animal: this.animal },
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  editRecord(data: IIndoorOutdoorStationTransformerModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.indoorOutdoorStationTransformerService.setInOutStationTransformerCert(data);
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
    element: IIndoorOutdoorStationTransformerModel = new IndoorOutdoorStationTransformerModel()
  ) {
    this.printService.print(element);
  }

  printList() {}
}
