import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { IExcavationGroundPrepModel } from '@shared/model/interface/iexcavation-ground-prep-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { ExcavationGroundPrepPermitService } from '@shared/services/excavation-ground-prep-permit.service';
import { FormService } from '@shared/services/form.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { PDFDocument } from 'pdf-lib';
import { CreateExcavationGroundPrepPermitDialogComponent } from '../create-excavation-ground-prep-permit-dialog/create-excavation-ground-prep-permit-dialog.component';
import { EGPPermitPrintService } from '@shared/services/print/permit/egp-permit-print.service';

@Component({
  selector: 'app-list-excavation-ground-prep-permit',
  templateUrl: './list-excavation-ground-prep-permit.component.html',
  styleUrls: ['./list-excavation-ground-prep-permit.component.scss'],
})
export class ListExcavationGroundPrepPermitComponent implements OnInit {
  displayedColumns: string[] = this.tableService.EGPPColumns;
  dataSource = new MatTableDataSource<IExcavationGroundPrepModel>([]);
  selection = new SelectionModel<IExcavationGroundPrepModel>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    // private logger: NGXLogger,
    // private notificationService: NotificationService,
    private excavationGroundPrepPermitService: ExcavationGroundPrepPermitService,
    private buildingPermitService: BuildingPermitService,
    private signatoryService: SignatoryService,
    private titleService: Title,
    private formService: FormService,
    private tableService: TableService,
    private printService: EGPPermitPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Building Permit');
    this.excavationGroundPrepPermitService.findAll();
    this.excavationGroundPrepPermitService.excavationGroundPrepList.subscribe(msg => {
      this.dataSource = new MatTableDataSource(msg);
    });
    this.dataSource.sort = this.sort;
  }

  editPermit(data: IExcavationGroundPrepModel) {
    this.formService.setSaveSelector('UPDATE');
    this.excavationGroundPrepPermitService.setData(data);
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

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateExcavationGroundPrepPermitDialogComponent, {
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

  async printPermitApplication(element: IExcavationGroundPrepModel) {
    console.log(element);
    this.printService.print(element);
  }

  printList() {
    this.printService.printList();
  }
}
