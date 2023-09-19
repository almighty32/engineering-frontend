import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ArchitecturalPermitService } from '@shared/services/architectural-permit.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { FormService } from '@shared/services/form.service';
import { ArchitecturalPermitPrintService } from '@shared/services/print/permit/architectural-permit-print.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TableService } from '@shared/services/table.service';
import { CreateArchitecturalPermitDialogComponent } from '../create-architectural-permit-dialog/create-architectural-permit-dialog.component';
import { NotificationService } from '@shared/services/notification.service';
import { IArchitectural } from '@shared/model/interface/architectural-permit/i-architectural-permit';

const tableColumns = [
  'applicationNo',
  'firstName',
  'lotNo',
  'blockNo',
  'tctNo',
  'taxDecNo',
  'street',
  'baranggay',
  'cityMun',
  'action',
];
@Component({
  selector: 'app-architectural-list',
  templateUrl: './architectural-list.component.html',
  styleUrls: ['./architectural-list.component.scss'],
})
export class ArchitecturalListComponent implements OnInit {
  buildingPermitList: IBuildingPermitModel[] = [];
  displayedColumns: string[] = this.tableService.APColumns;

  ELEMENT_DATA: IArchitectural[] = [];
  dataSource = new MatTableDataSource<IArchitectural>([]);
  selection = new SelectionModel<IArchitectural>(true, []);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private notificationService: NotificationService,
    private architecturalPermitService: ArchitecturalPermitService,
    private formService: FormService,
    private buildingPermitService: BuildingPermitService,
    private signatoryService: SignatoryService,
    private titleService: Title,
    private tableService: TableService,
    private printService: ArchitecturalPermitPrintService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Architectural Permit');
    this.architecturalPermitService.findAll();
    this.architecturalPermitService.architecturalPermitList.subscribe(msg => {
      this.ELEMENT_DATA = msg;
      this.dataSource = new MatTableDataSource(msg);
    });
    this.dataSource.sort = this.sort;
  }

  opeCreateArchitecturalPermitDialog(): void {
    const dialogRef = this.dialog.open(CreateArchitecturalPermitDialogComponent, {
      hasBackdrop: true,
      width: '95vw',
      maxHeight: '80vh',
      disableClose: true,
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  createPermit() {
    this.formService.setSaveSelector('SAVE');
    this.opeCreateArchitecturalPermitDialog();
  }
  approveApplication(element: IArchitectural) {
    this.architecturalPermitService.approve(element.id).subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.architecturalPermitService.findAll();
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

  refresh() {
    this.architecturalPermitService.findAll();
  }
  editPermit(data: IArchitectural) {
    console.log(data);
    this.formService.setSaveSelector('UPDATE');
    this.architecturalPermitService.form.patchValue(data);
    this.opeCreateArchitecturalPermitDialog();
  }

  // openCreateDialog() {
  //   const dialogRef = this.dialog.open(CreateArchitecturalPermitComponent, {
  //     hasBackdrop: true,

  //     width: '95vw',
  //     // minHeight: '90vh',
  //     maxHeight: '80vh',
  //     // disableClose: true,
  //     autoFocus: false,
  //     // data: { name: this.name, animal: this.animal },
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.animal = result;
  //   });
  // }

  async printPermitApplication(element: IArchitectural) {
    this.printService.print(element);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  printList() {
    this.printService.printList();
  }
}
