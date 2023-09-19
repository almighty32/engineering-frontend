import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { ISidewalkConstructionPermitModel } from '@shared/model/interface/isidewalk-construction-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { FormService } from '@shared/services/form.service';
import { SidewalkPermitService } from '@shared/services/sidewalk-permit.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { PDFDocument } from 'pdf-lib';
import { CreateSidewalkPermitDialogComponent } from '../create-sidewalk-permit-dialog/create-sidewalk-permit-dialog.component';
import { SidewalkPermitPrintService } from '@shared/services/print/permit/sidewalk-permit-print.service';

@Component({
  selector: 'app-list-sidewalk-permit',
  templateUrl: './list-sidewalk-permit.component.html',
  styleUrls: ['./list-sidewalk-permit.component.scss'],
})
export class ListSidewalkPermitComponent implements OnInit {
  displayedColumns: string[] = this.tablerService.SidewalkPColumns;
  dataSource = new MatTableDataSource<ISidewalkConstructionPermitModel>([]);
  selection = new SelectionModel<ISidewalkConstructionPermitModel>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    // private logger: NGXLogger,
    // private notificationService: NotificationService,
    private sidewalkPermitService: SidewalkPermitService,
    private formService: FormService,
    private buildingPermitService: BuildingPermitService,
    private signatoryService: SignatoryService,

    private titleService: Title,
    private tablerService: TableService,
    private printService: SidewalkPermitPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Fencing Permit');
    this.dataSource.sort = this.sort;
    this.sidewalkPermitService.findAll();
    this.sidewalkPermitService.sidewalkPermitList.subscribe(msg => {
      this.dataSource = new MatTableDataSource(msg);
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

  editPermit(data: ISidewalkConstructionPermitModel) {
    this.formService.setSaveSelector('UPDATE');
    this.sidewalkPermitService.setData(data);
    const { building } = data;
    this.buildingPermitService.setData(building);
    this.signatoryService.setDesignProfessional(data.designProfessional);
    this.signatoryService.setInspectorSupervisor(data.inspectorOrSupervisor);
    this.openCreateDialog();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateSidewalkPermitDialogComponent, {
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

  async printPermitApplication(element: ISidewalkConstructionPermitModel) {
    console.log(element);
    this.printService.print(element);
  }

  printList() {
    this.printService.printList();
  }
}
