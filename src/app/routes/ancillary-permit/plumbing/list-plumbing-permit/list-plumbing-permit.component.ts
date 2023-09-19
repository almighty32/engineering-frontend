import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { IPlumbingPermit } from '@shared/model/interface/plumbing-permit/i-plumbing-permit-model';
import { ApplicantService } from '@shared/services/applicant.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { ConstructionLocationService } from '@shared/services/construction-location.service';
import { FormService } from '@shared/services/form.service';
import { NotificationService } from '@shared/services/notification.service';
import { PlumbingPermitService } from '@shared/services/plumbing-permit.service';
import { PlumbingPermitPrintService } from '@shared/services/print/permit/plumbing-permit-print.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { CreatePlumbingPermitDialogComponent } from '../create-plumbing-permit-dialog/create-plumbing-permit-dialog.component';

@Component({
  selector: 'app-list-plumbing-permit',
  templateUrl: './list-plumbing-permit.component.html',
  styleUrls: ['./list-plumbing-permit.component.scss'],
})
export class ListPlumbingPermitComponent implements OnInit {
  ELEMENT_DATA: IPlumbingPermit[] = [];

  displayedColumns: string[] = this.tableService.PPColumns;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<IPlumbingPermit>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private plumbingPermitService: PlumbingPermitService,
    private formService: FormService,
    private buildingPermitService: BuildingPermitService,
    private signatoryService: SignatoryService,
    private tableService: TableService,
    private printService: PlumbingPermitPrintService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private applicantService: ApplicantService,
    private constructionLocationService: ConstructionLocationService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Mechanical Permit');
    this.dataSource.sort = this.sort;

    this.plumbingPermitService.findAll();

    this.plumbingPermitService.plumbingPermitList.subscribe(msg => {
      this.ELEMENT_DATA = msg;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      console.log(this.ELEMENT_DATA);
    });
  }
  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }

  editPermit(data: IPlumbingPermit) {
    this.formService.setSaveSelector('UPDATE');
    this.plumbingPermitService.form.patchValue(data);
    this.applicantService.form.patchValue(data?.applicant);
    this.constructionLocationService.form.patchValue(data?.constructionLocation);
    this.openCreateDialog();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreatePlumbingPermitDialogComponent, {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async printPermitApplication(element: IPlumbingPermit) {
    console.log(element);
    this.printService.print(element);
  }

  approveApplication(element: IPlumbingPermit) {
    this.plumbingPermitService.approve(element.id ?? '').subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.plumbingPermitService.findAll();
        this.notificationService.openSnackBar('Application Approved!');
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

  printList() {}
}
