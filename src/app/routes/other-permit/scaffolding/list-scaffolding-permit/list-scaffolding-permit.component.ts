import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { IScaffoldingPermitModel } from '@shared/model/interface/iscaffolding-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { FormService } from '@shared/services/form.service';
import { ScaffoldingPermitService } from '@shared/services/scaffolding-permit.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { PDFDocument } from 'pdf-lib';
import { CreateScaffoldingPermitDialogComponent } from '../create-scaffolding-permit-dialog/create-scaffolding-permit-dialog.component';
import { ScaffoldingPermitPrintService } from '@shared/services/print/permit/scaffolding-permit-print.service';

@Component({
  selector: 'app-list-scaffolding-permit',
  templateUrl: './list-scaffolding-permit.component.html',
  styleUrls: ['./list-scaffolding-permit.component.scss'],
})
export class ListScaffoldingPermitComponent implements OnInit {
  displayedColumns: string[] = this.tableService.ScaffoldingPColumns;
  dataSource = new MatTableDataSource<IScaffoldingPermitModel>([]);
  selection = new SelectionModel<IScaffoldingPermitModel>(true, []);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(
    // private logger: NGXLogger,
    // private notificationService: NotificationService,
    private scaffoldingPermitService: ScaffoldingPermitService,
    private formService: FormService,
    private buildingPermitService: BuildingPermitService,
    private signatoryService: SignatoryService,
    private titleService: Title,
    private tableService: TableService,
    private printService: ScaffoldingPermitPrintService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Fencing Permit');
    // this.logger.log('Fencing permit loaded');
    // this.notificationService.openSnackBar('Fencing permit loaded');
    this.dataSource.sort = this.sort;
    this.scaffoldingPermitService.findAll();
    this.scaffoldingPermitService.scaffoldingPermitList.subscribe(msg => {
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

  editPermit(data: IScaffoldingPermitModel) {
    this.formService.setSaveSelector('UPDATE');
    this.scaffoldingPermitService.setData(data);
    const { building } = data;
    this.buildingPermitService.setData(building);
    this.signatoryService.setDesignProfessional(data.designProfessional);
    this.signatoryService.setInspectorSupervisor(data.inspectorOrSupervisor);
    this.openCreateDialog();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateScaffoldingPermitDialogComponent, {
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

  async printPermitApplication(element: IScaffoldingPermitModel) {
    console.log(element);
    this.printService.print(element);
  }

  printList() {
    this.printService.printList();
  }
}
