import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import {
  BottomSheetOverviewExampleSheetComponent,
  DashboardComponent,
} from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { ProjectRegistrationListComponent } from './project-registration/project-registration-list/project-registration-list.component';
import { ProjectRegistrationCreateComponent } from './project-registration/project-registration-create/project-registration-create.component';
import { ProjectRegistrationCreateDialogComponent } from './project-registration/project-registration-create-dialog/project-registration-create-dialog.component';

const COMPONENTS: any[] = [
  DashboardComponent,
  BottomSheetOverviewExampleSheetComponent,
  LoginComponent,
  RegisterComponent,
  Error403Component,
  Error404Component,
  Error500Component,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC,
    ProjectRegistrationListComponent,
    ProjectRegistrationCreateComponent,
    ProjectRegistrationCreateDialogComponent,
  ],
})
export class RoutesModule {}
