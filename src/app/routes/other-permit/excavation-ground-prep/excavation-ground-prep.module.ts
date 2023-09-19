import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcavationGroundPrepRoutingModule } from './excavation-ground-prep-routing.module';
// import { CreateExcavationGroundPrepPermitComponent } from './create-excavation-ground-prep-permit/create-excavation-ground-prep-permit.component';
// import { ListExcavationGroundPrepPermitComponent } from './list-excavation-ground-prep-permit/list-excavation-ground-prep-permit.component';
import { SharedModule } from '@shared';


@NgModule({
  declarations: [
    // CreateExcavationGroundPrepPermitComponent,
    // ListExcavationGroundPrepPermitComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExcavationGroundPrepRoutingModule
  ]
})
export class ExcavationGroundPrepModule { }
