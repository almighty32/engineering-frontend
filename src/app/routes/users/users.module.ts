import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersCreateDlgComponent } from './users-create-dlg/users-create-dlg.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [UsersListComponent, UsersCreateDlgComponent, UsersCreateComponent],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
})
export class UsersModule {}
