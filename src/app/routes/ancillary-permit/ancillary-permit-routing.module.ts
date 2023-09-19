import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDemolitionPermitComponent } from '../other-permit/demolition/list-demolition-permit/list-demolition-permit.component';
import { ArchitecturalListComponent } from './architectural/architectural-list/architectural-list.component';
import { CreateArchitecturalPermitComponent } from './architectural/create-architectural-permit/create-architectural-permit.component';
import { CreateElectricalPermitComponent } from './electrical/create-electrical-permit/create-electrical-permit.component';
import { ListElectricalPermitComponent } from './electrical/list-electrical-permit/list-electrical-permit.component';
import { CreateElectronicPermitComponent } from './electronic/create-electronic-permit/create-electronic-permit.component';
import { ListElectronicPermitComponent } from './electronic/list-electronic-permit/list-electronic-permit.component';
import { CreateMechanicalPermitComponent } from './mechanical/create-mechanical-permit/create-mechanical-permit.component';
import { ListMechanicalPermitComponent } from './mechanical/list-mechanical-permit/list-mechanical-permit.component';
import { CreatePlumbingPermitComponent } from './plumbing/create-plumbing-permit/create-plumbing-permit.component';
import { ListPlumbingPermitComponent } from './plumbing/list-plumbing-permit/list-plumbing-permit.component';
import { CreateSanitaryPermitComponent } from './sanitary/create-sanitary-permit/create-sanitary-permit.component';
import { ListSanitaryPermitComponent } from './sanitary/list-sanitary-permit/list-sanitary-permit.component';
import { CreateCivilStructuralPermitComponent } from './structural/create-civil-structural-permit/create-civil-structural-permit.component';
import { ListCivilStructuralPermitComponent } from './structural/list-civil-structural-permit/list-civil-structural-permit.component';

const routes: Routes = [
  // architectural
  { path: 'create/architectural', component: CreateArchitecturalPermitComponent },
  { path: 'architectural-permit', component: ArchitecturalListComponent },
  // electrical
  { path: 'create/electrical', component: CreateElectricalPermitComponent },
  { path: 'electrical-permit', component: ListElectricalPermitComponent },
  // electronic
  { path: 'create/electronic', component: CreateElectronicPermitComponent },
  { path: 'electronic-permit', component: ListElectronicPermitComponent },
  // mechanical
  { path: 'create/mechanical', component: CreateMechanicalPermitComponent },
  { path: 'mechanical-permit', component: ListMechanicalPermitComponent },
  // plumbing
  { path: 'create/plumbing', component: CreatePlumbingPermitComponent },
  { path: 'plumbing-permit', component: ListPlumbingPermitComponent },
  // sanitary
  { path: 'create/sanitary', component: CreateSanitaryPermitComponent },
  { path: 'sanitary-permit', component: ListSanitaryPermitComponent },
  // Civil/structural
  { path: 'create/civil-structural', component: CreateCivilStructuralPermitComponent },
  { path: 'civil-structural-permit', component: ListCivilStructuralPermitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AncillaryPermitRoutingModule {}
