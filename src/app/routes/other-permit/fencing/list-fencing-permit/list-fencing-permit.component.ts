import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { FencingPermitService } from '@shared/services/fencing-permit.service';
import { FormService } from '@shared/services/form.service';
import { NotificationService } from '@shared/services/notification.service';
import { FencingPermitPrintService } from '@shared/services/print/permit/fencing-permit-print.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { CreateFencingPermitDialogComponent } from '../create-fencing-permit-dialog/create-fencing-permit-dialog.component';
@Component({
  selector: 'app-list-fencing-permit',
  templateUrl: './list-fencing-permit.component.html',
  styleUrls: ['./list-fencing-permit.component.scss'],
})
export class ListFencingPermitComponent implements OnInit {
  displayedColumns: string[] = this.tableService.FPColumns;
  ELEMENT_DATA: IFencingPermitModel[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    // private logger: NGXLogger,
    private notificationService: NotificationService,
    private buildingPermitService: BuildingPermitService,
    private fencingPermitService: FencingPermitService,
    private formService: FormService,
    private titleService: Title,
    private signatoryService: SignatoryService,
    private tableService: TableService,
    private printService: FencingPermitPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Fencing Permit');
    this.fencingPermitService.findAll();
    this.fencingPermitService.fencingPermitList.subscribe(msg => {
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
    const dialogRef = this.dialog.open(CreateFencingPermitDialogComponent, {
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
  editRecord(data: IFencingPermitModel) {
    this.formService.setSaveSelector('UPDATE');
    console.log(data);
    this.fencingPermitService.setData(data);
    const { building } = data;
    this.buildingPermitService.setData(building);
    this.signatoryService.setDesignProfessional(data.designProfessional);
    this.signatoryService.setInspectorSupervisor(data.inspectorOrSupervisor);
    this.openCreateDialog();
  }
  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.openCreateDialog();
  }

  async printPermitApplication(element: IFencingPermitModel) {
    console.log(element);
    this.printService.print(element);
  }

  printList() {
    this.printService.printList();
  }
}
