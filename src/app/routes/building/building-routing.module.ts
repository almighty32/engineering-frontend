import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingPermitCertificatesComponent } from './building-permit-certificates/building-permit-certificates.component';
import { BuildingPermitListComponent } from './building-permit-list/building-permit-list.component';
import { CreateBuildingPermitComponent } from './create-building-permit/create-building-permit.component';
import { ProjectRegistrationComponent } from './project-registration/project-registration.component';

const routes: Routes = [
  { path: 'project-registration', component: ProjectRegistrationComponent },
  { path: 'create', component: CreateBuildingPermitComponent },
  { path: 'list', component: BuildingPermitListComponent },
  { path: 'certificate', component: BuildingPermitCertificatesComponent },

  // { path: 'list-issued', component: ListIssuedPermitComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingRoutingModule {}
