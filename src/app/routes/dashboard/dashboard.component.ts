import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  NgZone,
} from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { SettingsService } from '@core';
import { Subscription } from 'rxjs';
import { CreateIllegalInstallationCertificateDialogComponent } from '../clearance-certificate/electrical/notice-of-illegal-electrical-installation/create-illegal-electrical-installation-cert-dialog/create-illegal-electrical-installation-cert-dialog.component';
import { ListIllegalInstallationCertificateComponent } from '../clearance-certificate/electrical/notice-of-illegal-electrical-installation/list-illegal-installation-cert/list-illegal-installation-cert.component';

import { DashboardService } from './dashboard.srevice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .mat-raised-button {
        margin-right: 8px;
        margin-top: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  imageSrc = 'assets/images/lgu_logo.png';
  imageAlt = 'iPhone';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.dashboardSrv.getData();

  messages = this.dashboardSrv.getMessages();

  charts = this.dashboardSrv.getCharts();
  chart1: any;
  chart2: any;

  stats = this.dashboardSrv.getStats();

  notifySubscription!: Subscription;

  constructor(
    private ngZone: NgZone,
    private dashboardSrv: DashboardService,
    private settings: SettingsService,
    private _bottomSheet: MatBottomSheet,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.notifySubscription = this.settings.notify.subscribe(res => {
      console.log(res);
    });
  }

  ngAfterViewInit() {
    // this.ngZone.runOutsideAngular(() => this.initChart());
  }

  ngOnDestroy() {
    if (this.chart1) {
      this.chart1?.destroy();
    }
    if (this.chart2) {
      this.chart2?.destroy();
    }

    this.notifySubscription.unsubscribe();
  }

  initChart() {
    this.chart1 = new ApexCharts(document.querySelector('#chart1'), this.charts[0]);
    this.chart1?.render();
    this.chart2 = new ApexCharts(document.querySelector('#chart2'), this.charts[1]);
    this.chart2?.render();
  }

  viewBottomSheet() {}

  openBottomSheet(): void {
    this.openCreateDialog('');
    // console.log('sdsd');
    // this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
  openCreateDialog(ACTION: string) {
    // const component =
    //   ACTION === 'CREATE'
    //     ?
    //     : ListIllegalInstallationCertificateComponent;
    const dialogRef = this.dialog.open(CreateIllegalInstallationCertificateDialogComponent, {
      hasBackdrop: true,

      width: '95vw',
      // minHeight: '90vh',
      maxHeight: '80vh',
      disableClose: true,
      autoFocus: false,
      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheetComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>,
    private dialog: MatDialog
  ) {}

  openLink(ACTION: string): void {
    this._bottomSheetRef.dismiss();
    // event.preventDefault();
    // console.log(event);
    this.openCreateDialog(ACTION);
  }
  openCreateDialog(ACTION: string) {
    // const component =
    //   ACTION === 'CREATE'
    //     ? CreateIllegalInstallationCertificateDialogComponent
    //     : ListIllegalInstallationCertificateComponent;
    const dialogRef = this.dialog.open(ListIllegalInstallationCertificateComponent, {
      hasBackdrop: true,

      width: '95vw',
      // minHeight: '90vh',
      maxHeight: '80vh',
      disableClose: true,
      autoFocus: false,
      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
