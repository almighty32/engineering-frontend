import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { BuildingPermitPrintService } from '@shared/services/print/permit/bp-permit-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateBuildingPermitDialogComponent } from '../create-building-permit-dialog/create-building-permit-dialog.component';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { NotificationService } from '@shared/services/notification.service';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { BuildingPermitRequirementsListDlgComponent } from '../building-permit-requirements-list-dlg/building-permit-requirements-list-dlg.component';
import { BuildingPermitCreateDlgComponent } from '../building-permit-create-dlg/building-permit-create-dlg.component';
import { BuildingPermitCreateCertificateDlgComponent } from '../building-permit-create-certificate-dlg/building-permit-create-certificate-dlg.component';
import { BuildingPermitCertificateService } from '@shared/services/building-permit-certificate.service';
import { CreateOccupancyCertificateComponent } from 'app/routes/clearance-certificate/occupancy/create-occupancy-certificate/create-occupancy-certificate.component';
import { OccupancyService } from '@shared/services/certificates-clearances/electrical/occupancy.service';
import { OccupancyCreateDlgComponent } from 'app/routes/clearance-certificate/occupancy/occupancy-create-dlg/occupancy-create-dlg.component';
import { FormService } from '@shared/services/form.service';
import { EditBuildingPermitDialogComponent } from '../edit-building-permit-dialog/edit-building-permit-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss'],
})
export class BuildingListComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  animal?: string;
  name?: string;
  ELEMENT_DATA: IBuildingPermitModel[] = [];
  printTitle = 'BUILDING';
  // columns = this.tableService.BPColumns;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<IBuildingPermitModel>(true, []);

  columns: MtxGridColumn[] = [
    {
      header: 'Date',
      field: 'created_at',
      width: '150px',
      pinned: 'left',
    },
    { header: 'Application No', field: 'applicationNo', width: '100px', pinned: 'left' },
    { header: 'Permit No', field: 'buildingPermitNo', width: '100px', pinned: 'left' },
    { header: 'Applicant', field: 'applicant.completeName', width: '200px' },
    // { header: 'Location', field: 'constructionLocation', width: '200px' },
    { header: 'Status', field: 'status', width: '100px' },

    {
      header: 'Action',
      field: 'action',
      width: '150px',
      minWidth: 100,
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          text: 'edit',
          icon: 'edit',
          tooltip: 'Edit',
          click: value => this.edit(value),
        },
        {
          type: 'icon',
          text: 'print',
          icon: 'folder_shared',
          tooltip: 'View Submitted Requirements',
          click: data => this.viewRequirements(data),
        },
        {
          type: 'icon',
          text: 'add',
          icon: 'add',
          tooltip: 'Create BP Certificate',
          click: data => this.createBPCertificate(data),
        },
        {
          type: 'icon',
          text: 'print',
          icon: 'print',
          tooltip: 'Print Building Permit',
          click: data => this.printBPCertificate(data),
        },
      ],
    },
  ];

  list: IBuildingPermitModel[] = [];
  applicantFullName: any;
  firstName: any;
  lastName: any;
  middleInitial: any;
  companyName: any;
  tin: any;
  constructor(
    // private logger: NGXLogger,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private buildingPermitService: BuildingPermitService,
    private formService: FormService,
    private titleService: Title,
    public dialog: MatDialog,
    private tableService: TableService,
    private printService: BuildingPermitPrintService,
    private mtxDialog: MtxDialog,
    private bpCertificateService: BuildingPermitCertificateService,
    private occupancyService: OccupancyService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Building Permit');
    this.fetchAllBuildingPermit();

    this.buildingPermitService.buildingPermitList.subscribe(msg => {
      this.list = msg;
      console.log({ msg });
      this.dataSource = new MatTableDataSource(msg);
      this.ELEMENT_DATA = msg;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // createOccupancyCertificate(data: IBuildingPermitModel) {
  //   if (!data.isApproved) {
  //     this.notificationService.openMessageDialog('Building Permit is for approval.');
  //     return;
  //   }
  //   this.occupancyService.form.reset();
  //   this.occupancyService.form.controls.buildingPermit.setValue(data);
  //   const dialogRef = this.dialog.open(OccupancyCreateDlgComponent, {
  //     hasBackdrop: true,
  //     width: '95vw',
  //     // minHeight: '90vh',
  //     maxHeight: '90vh',
  //     disableClose: true,
  //     autoFocus: false,
  //     data,
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
  createBPCertificate(data: IBuildingPermitModel) {
    if (!data.isApproved) {
      this.notificationService.openMessageDialog('Building Permit is for approval.');
      return;
    }

    this.bpCertificateService.form.reset();
    this.bpCertificateService.form.controls.buildingPermit.setValue(data);
    const dialogRef = this.dialog.open(BuildingPermitCreateCertificateDlgComponent, {
      hasBackdrop: true,
      width: '95vw',
      // minHeight: '90vh',
      maxHeight: '90vh',
      disableClose: true,
      autoFocus: false,
      data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  printBPCertificate(bp: any) {
    if (bp.isApproved) {
      if (!bp.bpCertificate) {
        this.notificationService.openMessageDialog('Building Permit Certificate not yet created.');
        return;
      }
      this.printService.printBPCertificate(bp);
      return;
    }

    this.notificationService.openMessageDialog('Building Permit is for approval.');
  }

  viewRequirements(buildingPermit: any) {
    const dialogRef = this.mtxDialog.originalOpen(BuildingPermitRequirementsListDlgComponent, {
      width: '550px',
      data: { id: buildingPermit.id, status: buildingPermit.status },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  approveBuildingPermit(element: IBuildingPermitModel) {
    this.buildingPermitService.approve(element.id ?? '').subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.buildingPermitService.findAll();
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  fetchAllBuildingPermit() {
    this.buildingPermitService.findAll();
  }
  createBuildingPermit() {
    this.formService.setSaveSelector('SAVE');
    this.buildingPermitService.resetBuildingPermit();
    this.openCreateDialog();
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateBuildingPermitDialogComponent, {
      hasBackdrop: true,
      width: '95vw',
      // minHeight: '90vh',
      maxHeight: '90vh',
      disableClose: true,
      autoFocus: false,

    });

    console.log({ name: this.name, animal: this.animal });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log(result);
    });
  }

  openEditDialog(element: IBuildingPermitModel): void {

    const dialogRef = this.dialog.open(EditBuildingPermitDialogComponent, {
      hasBackdrop: true,
      width: '95vw',
      // minHeight: '90vh',
      maxHeight: '90vh',
      disableClose: true,
      autoFocus: false,
      data: { element }, // Pass the building permit data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log(result);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '350px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(element: IBuildingPermitModel) {
    if (element.isApproved) {
      this.notificationService.openMessageDialog(`Editing is not allowed for approved or created permits.`);
      return;
    }
    console.log('element',element.applicant);
    this.applicantFullName = `${element.applicant?.companyName} ${element.applicant?.firstName} ${element.applicant?.middleInitial}. ${element.applicant?.lastName}`;
    this.firstName = `${element.applicant?.firstName}`;
    this.lastName = `${element.applicant?.lastName}`;
    this.middleInitial = `${element.applicant?.middleInitial}`;
    this.companyName = `${element.applicant?.companyName}`;
    this.tin = `${element.applicant?.tin}`;
    const dialogRef = this.dialog.open(EditBuildingPermitDialogComponent, {
      data: { element, applicantFullName: this.applicantFullName,
                       firstName: this.firstName,
                       lastName: this.lastName,
                       middleInitial: this.middleInitial ,
                       companyName: this.companyName},


    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
      }
    });
  }





  async printPermitApplication(element: IBuildingPermitModel) {
    console.log(element);
    this.printService.print(element);
  }

  printList() {
    this.printService.printList();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'select-other-permit-dialog.html',
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
