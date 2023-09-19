import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { AdminLayoutComponent } from '@theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { AuthGuard } from '@core/authentication';
import { ListAnnualInspectionComponent } from './clearance-certificate/annual-inspection/list-annual-inspection/list-annual-inspection.component';
import { ListOccupancyCertificateComponent } from './clearance-certificate/occupancy/list-occupancy-certificate/list-occupancy-certificate.component';
import { ProjectRegistrationComponent } from './building/project-registration/project-registration.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: DashboardComponent },
      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },

      { path: 'project-registration', component: ProjectRegistrationComponent },

      {
        path: 'user',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'building',
        loadChildren: () => import('./building/building.module').then(m => m.BuildingModule),
      },
      // {
      //   path: 'annual-inspection',
      //   loadChildren: () => import('./annual-inspection/annual-inspection.module').then(m => m.AnnualInspectionModule),
      // },
      // {
      //   path: 'occupancy',
      //   loadChildren: () => import('./occupancy/occupancy.module').then(m => m.OccupancyModule),
      // },
      {
        path: 'ancillary',
        loadChildren: () =>
          import('./ancillary-permit/ancillary-permit.module').then(m => m.AncillaryPermitModule),
      },
      {
        path: 'other-permit',
        loadChildren: () =>
          import('./other-permit/other-permit.module').then(m => m.OtherPermitModule),
      },
      {
        path: 'electrical-certificate',
        loadChildren: () =>
          import('./clearance-certificate/clearance-certificate.module').then(
            m => m.ClearanceCertificateModule
          ),
      },
      {
        path: 'mechanical',
        loadChildren: () =>
          import('./clearance-certificate/clearance-certificate.module').then(
            m => m.ClearanceCertificateModule
          ),
      },

      {
        path: 'occupancy',
        component: ListOccupancyCertificateComponent,
      },
      {
        path: 'annual-inspection',
        component: ListAnnualInspectionComponent,
      },
      // {
      //   path: 'occupancy',
      //   loadChildren: () =>
      //     import('./clearance-certificate/clearance-certificate.module').then(
      //       m => m.ClearanceCertificateModule
      //     ),
      // },
      // {
      //   path: 'annual-inspection',
      //   loadChildren: () =>
      //     import('./clearance-certificate/clearance-certificate.module').then(
      //       m => m.ClearanceCertificateModule
      //     ),
      // },
      // {
      //   path: 'clearance-certificate',
      //   loadChildren: () =>
      //     import('./clearance-certificate/clearance-certificate.module').then(
      //       m => m.ClearanceCertificateModule
      //     ),
      // },
      // {
      //   path: 'design',
      //   loadChildren: () => import('./design/design.module').then(m => m.DesignModule),
      // },
      // {
      //   path: 'material',
      //   loadChildren: () => import('./material/material.module').then(m => m.MaterialModule),
      // },
      // {
      //   path: 'media',
      //   loadChildren: () => import('./media/media.module').then(m => m.MediaModule),
      // },
      // {
      //   path: 'forms',
      //   loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      // },
      // {
      //   path: 'tables',
      //   loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),
      // },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
      // {
      //   path: 'helpers',
      //   loadChildren: () => import('./helpers/helpers.module').then(m => m.HelpersModule),
      // },
      {
        path: 'permissions',
        loadChildren: () =>
          import('./permissions/permissions.module').then(m => m.PermissionsModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
