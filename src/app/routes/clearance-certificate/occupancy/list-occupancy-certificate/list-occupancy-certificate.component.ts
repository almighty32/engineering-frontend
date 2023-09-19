import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { IndoorOutdoorStationTransformerModel } from '@shared/model/certificates/electrical/indoor-outdoor-station-transformer-model';
import { IOccupancyCertificate } from '@shared/model/interface/I-occupancy-certificate';
import { IIndoorOutdoorStationTransformerModel } from '@shared/model/interface/certificates/electical/iindoor-outdoor-station-transformer-model';
import { IndoorOutdoorStationTransformerService } from '@shared/services/certificates-clearances/electrical/indoor-outdoor-station-transformer.service';
import { DateService } from '@shared/services/date.service';
import { FormService } from '@shared/services/form.service';
import { IndoorOutdoorStationTransformerPrintService } from '@shared/services/print/certificates/electrical/Indoor-outdoor-station-transformer-print.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { OccupancyCreateDlgComponent } from '../occupancy-create-dlg/occupancy-create-dlg.component';
import { OccupancyService } from '@shared/services/certificates-clearances/electrical/occupancy.service';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { NotificationService } from '@shared/services/notification.service';
import { BuildingPermitPrintService } from '@shared/services/print/permit/bp-permit-print.service';

@Component({
  selector: 'app-list-occupancy-certificate',
  templateUrl: './list-occupancy-certificate.component.html',
  styleUrls: ['./list-occupancy-certificate.component.scss'],
})
export class ListOccupancyCertificateComponent implements OnInit {
  columns: MtxGridColumn[] = [
    {
      header: 'Date',
      field: 'created_at',
      width: '150px',
      pinned: 'left',
    },
    { header: 'Permit No', field: 'occupancyPermitNo', width: '200px', pinned: 'left' },
    {
      header: 'Building Permit No',
      field: 'buildingPermit.buildingPermitNo',
      width: '200px',
      pinned: 'left',
    },
    {
      header: 'Name Of Project',
      field: 'nameOfProject',
      width: '200px',
    },
    {
      header: 'Fsic No',
      field: 'fsicNo',
      width: '200px',
    },
    {
      header: 'Fsic Date Issued',
      field: 'fsicDateIssued',
      width: '200px',
    },
    {
      header: 'Fees',
      field: 'feesPaid',
      width: '200px',
    },
    {
      header: 'Action',
      field: 'action',
      width: '150px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          text: 'edit',
          icon: 'edit',
          tooltip: 'Edit',
          click: value => this.editOccupancy(value),
        },
        {
          type: 'icon',
          text: 'print',
          icon: 'print',
          tooltip: 'Print Occupancy Certificate',
          click: value => this.printOccupancyCertificate(value),
        },
      ],
    },
  ];

  list: IOccupancyCertificate[] = [];

  constructor(
    private occupancyService: OccupancyService,
    private formService: FormService,
    private titleService: Title,
    private printService: BuildingPermitPrintService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Occupancy Permit');
    this.fetchOccupancyCertificates();

    this.occupancyService.occupancyList.subscribe(msg => {
      this.list = msg;
    });
  }

  refresh() {
    this.fetchOccupancyCertificates();
  }

  fetchOccupancyCertificates() {
    this.occupancyService.findAll();
  }

  printOccupancyCertificate(occupancyCertificate: IOccupancyCertificate) {
    const { buildingPermit } = occupancyCertificate;
    if (buildingPermit.isApproved) {
      this.printService.printOccupancyCertificate(occupancyCertificate);
      return;
    }

    this.notificationService.openMessageDialog('Building Permit is for approval.');
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(OccupancyCreateDlgComponent, {
      hasBackdrop: true,
      width: '95vw',
      maxHeight: '80vh',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
  editOccupancy(occupancyCertificate: IOccupancyCertificate) {
    this.formService.setSaveSelector('UPDATE');
    this.occupancyService.form.patchValue(occupancyCertificate);

    const { buildingPermit } = occupancyCertificate;
    const { firstName, middleInitial, lastName } = buildingPermit.applicant;
    const applicant = `${firstName} ${middleInitial} ${lastName}`;

    const occupancyBuildingPermit = {
      buildingPermitNo: buildingPermit.buildingPermitNo,
      applicant,
    };

    this.occupancyService.occupancyBuildingPermit = occupancyBuildingPermit;
    this.openCreateDialog();
  }
  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }
}
