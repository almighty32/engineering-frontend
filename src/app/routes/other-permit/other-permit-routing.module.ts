import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDemolitionPermitComponent } from './demolition/create-demolition-permit/create-demolition-permit.component';
import { ListDemolitionPermitComponent } from './demolition/list-demolition-permit/list-demolition-permit.component';
import { CreateExcavationGroundPrepPermitComponent } from './excavation-ground-prep/create-excavation-ground-prep-permit/create-excavation-ground-prep-permit.component';
import { ListExcavationGroundPrepPermitComponent } from './excavation-ground-prep/list-excavation-ground-prep-permit/list-excavation-ground-prep-permit.component';
import { CreateFencingPermitComponent } from './fencing/create-fencing-permit/create-fencing-permit.component';
import { ListFencingPermitComponent } from './fencing/list-fencing-permit/list-fencing-permit.component';
import { CreateScaffoldingPermitComponent } from './scaffolding/create-scaffolding-permit/create-scaffolding-permit.component';
import { ListScaffoldingPermitComponent } from './scaffolding/list-scaffolding-permit/list-scaffolding-permit.component';
import { CreateSidewalkPermitComponent } from './sidewalk/create-sidewalk-permit/create-sidewalk-permit.component';
import { ListSidewalkPermitComponent } from './sidewalk/list-sidewalk-permit/list-sidewalk-permit.component';
import { CreateTemporaryServiceConnectionComponent } from './temporary-service-connection/create-temporary-service-connection/create-temporary-service-connection.component';
import { ListTemporaryServiceConnectionComponent } from './temporary-service-connection/list-temporary-service-connection/list-temporary-service-connection.component';

const routes: Routes = [
  // demolition
  { path: 'create/demolition', component: CreateDemolitionPermitComponent },
  { path: 'demolition-permit', component: ListDemolitionPermitComponent },
  // excavation and ground prep
  { path: 'create/excavation-ground-prep', component: CreateExcavationGroundPrepPermitComponent },
  {
    path: 'excavation-ground-prep-permit',
    component: ListExcavationGroundPrepPermitComponent,
  },
  // fencing
  { path: 'create/fencing', component: CreateFencingPermitComponent },
  { path: 'fencing-permit', component: ListFencingPermitComponent },
  // tsc
  {
    path: 'create/temporary-service-connection',
    component: CreateTemporaryServiceConnectionComponent,
  },
  {
    path: 'temporary-service-connection-permit',
    component: ListTemporaryServiceConnectionComponent,
  },
  // scaffolding
  { path: 'create/scaffolding', component: CreateScaffoldingPermitComponent },
  { path: 'scaffolding', component: ListScaffoldingPermitComponent },
  // sidewalk
  { path: 'create/sidewalk', component: CreateSidewalkPermitComponent },
  { path: 'sidewalk', component: ListSidewalkPermitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherPermitRoutingModule {}
