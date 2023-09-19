import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExcavationGroundPrepPermitComponent } from './create-excavation-ground-prep-permit/create-excavation-ground-prep-permit.component';
import { ListExcavationGroundPrepPermitComponent } from './list-excavation-ground-prep-permit/list-excavation-ground-prep-permit.component';

const routes: Routes = [
  { path: 'create', component: CreateExcavationGroundPrepPermitComponent },
  { path: 'list', component: ListExcavationGroundPrepPermitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcavationGroundPrepRoutingModule {}
