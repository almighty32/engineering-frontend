import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ICivilOrStructuralPermit } from '@shared/model/interface/civil-structural/i-civil-structural-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { CivilStructuralPermitService } from '@shared/services/civil-structural-permit.service';
import { FormService } from '@shared/services/form.service';
import { NotificationService } from '@shared/services/notification.service';
import { CivilStructuralPermitPrintService } from '@shared/services/print/permit/civil-struc-permit-print.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { CreateCivilStructuralPermitDialogComponent } from '../create-civil-structural-permit-dialog/create-civil-structural-dialog.component';

@Component({
  selector: 'app-list-civil-structural-permit',
  templateUrl: './list-civil-structural-permit.component.html',
  styleUrls: ['./list-civil-structural-permit.component.scss'],
})
export class ListCivilStructuralPermitComponent implements OnInit {
  ELEMENT_DATA: ICivilOrStructuralPermit[] = [];
  cspList: ICivilOrStructuralPermit[] = [];

  displayedColumns: string[] = this.tableService.CSPColumns;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private titleService: Title,
    private civilStructuralPermitService: CivilStructuralPermitService,
    private buildingPermitService: BuildingPermitService,
    private formService: FormService,
    private signatoryService: SignatoryService,
    private tableService: TableService,
    private printService: CivilStructuralPermitPrintService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Civil/Structural Permit');
    this.civilStructuralPermitService.findAll();
    this.dataSource.sort = this.sort;

    this.buildingPermitService.findAll();
    this.civilStructuralPermitService.civilStructuralPermitList.subscribe(msg => {
      this.ELEMENT_DATA = msg;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      console.log(this.ELEMENT_DATA);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }

  editPermit(data: ICivilOrStructuralPermit) {
    this.formService.setSaveSelector('UPDATE');
    this.civilStructuralPermitService.form.patchValue(data);
    this.openCreateDialog();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateCivilStructuralPermitDialogComponent, {
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

  async printPermitApplication(element: ICivilOrStructuralPermit) {
    console.log(element);
    this.printService.print(element);
  }

  printList() {
    this.printService.printList();
  }

  approveApplication(element: ICivilOrStructuralPermit) {
    this.civilStructuralPermitService.approve(element.id ?? 'no_id_obtain').subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.civilStructuralPermitService.findAll();
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
