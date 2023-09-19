import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { IMechanicalPermit } from '@shared/model/interface/mechanical-permit/i-mechanical-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { FormService } from '@shared/services/form.service';
import { MechanicalPermitService } from '@shared/services/mechanical-permit.service';
import { MechanicalPermitPrintService } from '@shared/services/print/permit/mechanical-permit-print.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { CreateMechanicalPermitDialogComponent } from '../create-mechanica-permit-dialog/create-mechanica-permit-dialog.component';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-list-mechanical-permit',
  templateUrl: './list-mechanical-permit.component.html',
  styleUrls: ['./list-mechanical-permit.component.scss'],
})
export class ListMechanicalPermitComponent implements OnInit {
  ELEMENT_DATA: IMechanicalPermit[] = [];

  displayedColumns: string[] = this.tableService.MPColumns;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<IMechanicalPermit>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private mechanicalPermitService: MechanicalPermitService,
    private formService: FormService,
    private buildingPermitService: BuildingPermitService,
    private signatoryService: SignatoryService,
    private tableService: TableService,
    private printService: MechanicalPermitPrintService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Mechanical Permit');
    this.mechanicalPermitService.findAll();
    this.dataSource.sort = this.sort;
    this.mechanicalPermitService.mechanicalPermitList.subscribe(msg => {
      this.ELEMENT_DATA = msg;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });
  }

  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }

  editPermit(data: IMechanicalPermit) {
    this.formService.setSaveSelector('UPDATE');
    this.mechanicalPermitService.form.patchValue(data);
    this.openCreateDialog();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateMechanicalPermitDialogComponent, {
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

  async printPermitApplication(element: IMechanicalPermit) {
    console.log(element);
    this.printService.print(element);
  }

  printList() {
    this.printService.printList();
  }

  approveApplication(element: IMechanicalPermit) {
    this.mechanicalPermitService.approve(element.id ?? 'no_id_selected').subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.mechanicalPermitService.findAll();
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
