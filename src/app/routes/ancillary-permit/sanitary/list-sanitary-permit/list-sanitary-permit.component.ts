import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ISanitaryPermit } from '@shared/model/interface/sanitary-permit/isanitary-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { FormService } from '@shared/services/form.service';
import { NotificationService } from '@shared/services/notification.service';
import { SanitaryPermitPrintService } from '@shared/services/print/permit/sanitary-permit-print.service';
import { SanitaryPermitService } from '@shared/services/sanitary-permit.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { CreateSanitaryPermitDialogComponent } from '../create-sanitary-permit-dialog/create-sanitary-permit-dialog.component';

@Component({
  selector: 'app-list-sanitary-permit',
  templateUrl: './list-sanitary-permit.component.html',
  styleUrls: ['./list-sanitary-permit.component.scss'],
})
export class ListSanitaryPermitComponent implements OnInit {
  ELEMENT_DATA: ISanitaryPermit[] = [];

  displayedColumns: string[] = this.tableService.SPColumns;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<ISanitaryPermit>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private titleService: Title,
    private sanitaryPermitService: SanitaryPermitService,
    private formService: FormService,
    private buildingPermitService: BuildingPermitService,
    private signatoryService: SignatoryService,
    private tableService: TableService,
    private printService: SanitaryPermitPrintService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Sanitary Permit');
    // this.logger.log('Sanitary permit loaded');
    // this.notificationService.openSnackBar('Sanitary permit loaded');

    this.dataSource.sort = this.sort;
    this.sanitaryPermitService.findAll();
    this.sanitaryPermitService.sanitaryPermitList.subscribe(msg => {
      this.ELEMENT_DATA = msg;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      console.log(this.ELEMENT_DATA);
    });
  }

  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }

  editPermit(data: ISanitaryPermit) {
    this.formService.setSaveSelector('UPDATE');
    this.sanitaryPermitService.setData(data);
    this.sanitaryPermitService.form.patchValue(data);

    // this.applicationService.form.patchValue(data?.applicant);
    // this.constructionLocationService.form.patchValue(data?.constructionLocation);
    this.openCreateDialog();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateSanitaryPermitDialogComponent, {
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

  async printPermitApplication(element: ISanitaryPermit) {
    console.log(element);
    this.printService.print(element);
  }

  printList() {
    this.printService.printList();
  }
  approveApplication(element: ISanitaryPermit) {
    this.sanitaryPermitService.approve(element.id ?? 'no_sanitary_id').subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.sanitaryPermitService.findAll();
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
}
