import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MtxDialog } from '@ng-matero/extensions/dialog';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar, private mtxDialog: MtxDialog) {}

  public openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2 * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    // this.snackBar.open(message, '', {
    //   duration: 5000,
    // });
  }
  public openMessageDialog(message: string, title?: string) {
    this.mtxDialog.alert(title ?? 'Message', message, () => {});
  }
}
