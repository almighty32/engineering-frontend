import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { SignatoryService } from '@shared/services/signatory.service';

@Component({
  selector: 'app-design-prof-list',
  templateUrl: './design-prof-list.component.html',
  styleUrls: ['./design-prof-list.component.scss'],
})
export class DesignProfListComponent implements OnInit {
  selectedRowIndex = '';
  displayedColumns: string[] = ['completeName', 'profession', 'action'];
  dataSource = new MatTableDataSource<ISignatory>([]);
  selection = new SelectionModel<ISignatory>(true, []);

  // @Input() item = '';
  @Output() selectProfessional = new EventEmitter<ISignatory>();

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort();

  constructor(private titleService: Title, private signatoryService: SignatoryService) {}

  ngOnInit() {
    this.titleService.setTitle('Engineering - Fencing Permit');
    this.fetchAllSignatury();
    this.dataSource.sort = this.sort;

    this.signatoryService.signatoryList.subscribe(msg => {
      this.dataSource = new MatTableDataSource(msg);
    });
  }

  fetchAllSignatury() {
    this.signatoryService.findAll().subscribe({
      next: res => {
        this.dataSource = new MatTableDataSource(res);
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowSelect(data: ISignatory) {
    this.selectProfessional.emit(data);
    this.signatoryService.setDesignProfessional(data);
    this.selectedRowIndex = data.id;
  }

  printList() {}
}
