import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { BuildingPermitPrintService } from '@shared/services/print/permit/bp-permit-print.service';
import { TableService } from '@shared/services/table.service';

@Component({
  selector: 'app-building-permit-list',
  templateUrl: './building-permit-list.component.html',
  styleUrls: ['./building-permit-list.component.scss'],
})
export class BuildingPermitListComponent implements OnInit {
  columns: MtxGridColumn[] = [
    {
      header: 'Date',
      field: 'created_at',
      width: '150px',
      pinned: 'left',
    },
    { header: 'Application No', field: 'applicationNo', width: '200px', pinned: 'left' },
    { header: 'Permit No', field: 'buildingPermitNo', width: '200px', pinned: 'left' },
    { header: 'Applicant', field: 'applicant', width: '200px' },
    { header: 'Location', field: 'constructionLocation', width: '200px' },
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
          // click: value => this.editPatient(value),
        },
        {
          type: 'icon',
          text: 'print',
          icon: 'folder_shared',
          tooltip: 'View Records',
          // click: data => this.navigateToPatientRecords(data),
        },
      ],
    },
  ];

  list: IBuildingPermitModel[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private buildingPermitService: BuildingPermitService,
    private titleService: Title,
    public dialog: MatDialog,
    private tableService: TableService,
    private printService: BuildingPermitPrintService
  ) {}

  ngOnInit(): void {}
}
