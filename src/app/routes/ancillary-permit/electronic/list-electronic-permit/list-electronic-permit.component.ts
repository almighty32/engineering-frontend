import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { IElectronicPermit } from '@shared/model/interface/electronic/i-electronic-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { ElectronicPermitService } from '@shared/services/electronic-permit.service';
import { FormService } from '@shared/services/form.service';
import { NotificationService } from '@shared/services/notification.service';
import { ElectronicPermitPrintService } from '@shared/services/print/permit/electronic-permit-print.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { CreateElectronicPermitDialogComponent } from '../create-electronic-permit-dialog/create-electronic-permit-dialog.component';

@Component({
  selector: 'app-list-electronic-permit',
  templateUrl: './list-electronic-permit.component.html',
  styleUrls: ['./list-electronic-permit.component.scss'],
})
export class ListElectronicPermitComponent implements OnInit {
  displayedColumns: string[] = this.tableService.ElectronicPColumns;
  ELEMENT_DATA: IElectronicPermit[] = [];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<IElectronicPermit>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private electronicPermitService: ElectronicPermitService,
    private titleService: Title,
    private formService: FormService,
    private buildingPermitService: BuildingPermitService,
    private signatoryService: SignatoryService,
    private tableService: TableService,
    private printService: ElectronicPermitPrintService,
    public dialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Architectural Permit');
    this.dataSource.sort = this.sort;
    this.electronicPermitService.findAll();

    this.electronicPermitService.electronicPermitList.subscribe(msg => {
      this.ELEMENT_DATA = msg;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });
  }
  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }

  editPermit(data: IElectronicPermit) {
    this.formService.setSaveSelector('UPDATE');
    this.electronicPermitService.form.patchValue(data);
    this.openCreateDialog();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateElectronicPermitDialogComponent, {
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

  async printPermitApplication(element: IElectronicPermit) {
    console.log(element);
    this.printService.print(element);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  printList() {
    this.printService.printList();
  }

  approveApplication(element: IElectronicPermit) {
    this.electronicPermitService.approve(element.id ?? 'no_electronic_id').subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.electronicPermitService.findAll();
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
