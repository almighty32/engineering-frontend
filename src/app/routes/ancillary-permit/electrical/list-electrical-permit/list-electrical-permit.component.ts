import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { FormService } from '@shared/services/form.service';
import { NotificationService } from '@shared/services/notification.service';
import { ElectricalPermitPrintService } from '@shared/services/print/permit/electrical-permit-print.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { CreateElectricalPermitDialogComponent } from '../create-electrical-permit-dialog/create-electrical-permit-dialog.component';

@Component({
  selector: 'app-list-electrical-permit',
  templateUrl: './list-electrical-permit.component.html',
  styleUrls: ['./list-electrical-permit.component.scss'],
})
export class ListElectricalPermitComponent implements OnInit {
  ELEMENT_DATA: IElectricalPermit[] = [];
  displayedColumns: string[] = this.tableService.ElectricalPColumns;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<IElectricalPermit>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    private titleService: Title,
    private electricalPermitService: ElectricalPermitService,
    private formService: FormService,
    private printService: ElectricalPermitPrintService,
    private buildingPermitService: BuildingPermitService,
    private signatoryService: SignatoryService,
    private tableService: TableService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Electrical Permit');
    this.electricalPermitService.findAll();
    this.dataSource.sort = this.sort;

    this.electricalPermitService.electricalPermitList.subscribe(msg => {
      this.ELEMENT_DATA = msg;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });
  }
  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.resetInputs();
    this.openCreateDialog();
  }

  editPermit(data: IElectricalPermit) {
    this.formService.setSaveSelector('UPDATE');
    // this.form.value.patchValue(data)
    this.openCreateDialog();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateElectricalPermitDialogComponent, {
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
  async printElectricalPermit(element: IElectricalPermit) {
    this.printService.print(element);
  }
  printList() {
    this.printService.printList();
  }
  resetInputs() {
    this.buildingPermitService.setData({} as IBuildingPermitModel);
    this.electricalPermitService.setData({} as IElectricalPermit);
  }

  approveApplication(element: IElectricalPermit) {
    this.electricalPermitService.approve(element.id ?? 'no_id_obtain').subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.electricalPermitService.findAll();
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
