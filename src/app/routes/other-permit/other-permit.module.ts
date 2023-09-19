import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherPermitRoutingModule } from './other-permit-routing.module';
import { CreateExcavationGroundPrepPermitComponent } from './excavation-ground-prep/create-excavation-ground-prep-permit/create-excavation-ground-prep-permit.component';
import { ListExcavationGroundPrepPermitComponent } from './excavation-ground-prep/list-excavation-ground-prep-permit/list-excavation-ground-prep-permit.component';
import { CreateDemolitionPermitComponent } from './demolition/create-demolition-permit/create-demolition-permit.component';
import { ListDemolitionPermitComponent } from './demolition/list-demolition-permit/list-demolition-permit.component';
import { CreateFencingPermitComponent } from './fencing/create-fencing-permit/create-fencing-permit.component';
import { ListFencingPermitComponent } from './fencing/list-fencing-permit/list-fencing-permit.component';
import { SharedModule } from '@shared';
import { CreateTemporaryServiceConnectionComponent } from './temporary-service-connection/create-temporary-service-connection/create-temporary-service-connection.component';
import { ListTemporaryServiceConnectionComponent } from './temporary-service-connection/list-temporary-service-connection/list-temporary-service-connection.component';
import { FencingScopeOfWorkComponent } from './fencing/create-fencing-permit/fencing-scope-of-work/fencing-scope-of-work.component';
import { FencingTypeComponent } from './fencing/create-fencing-permit/fencing-type/fencing-type.component';
import { DemolitionScopeOfWorkComponent } from './demolition/create-demolition-permit/demolition-scope-of-work/demolition-scope-of-work.component';
import { EgpScopeOfWorkComponent } from './excavation-ground-prep/create-excavation-ground-prep-permit/egp-scope-of-work/egp-scope-of-work.component';
import { TscPurposeComponent } from './temporary-service-connection/create-temporary-service-connection/tsc-purpose/tsc-purpose.component';
import { ListScaffoldingPermitComponent } from './scaffolding/list-scaffolding-permit/list-scaffolding-permit.component';
import { CreateScaffoldingPermitComponent } from './scaffolding/create-scaffolding-permit/create-scaffolding-permit.component';
import { ScaffoldingScopeOfWorkComponent } from './scaffolding/create-scaffolding-permit/scaffolding-scope-of-work/scaffolding-scope-of-work.component';
import { ListSidewalkPermitComponent } from './sidewalk/list-sidewalk-permit/list-sidewalk-permit.component';
import { CreateSidewalkPermitComponent } from './sidewalk/create-sidewalk-permit/create-sidewalk-permit.component';
import { SidewalkScopeOfWorkComponent } from './sidewalk/create-sidewalk-permit/sidewalk-scope-of-work/sidewalk-scope-of-work.component';
import { EgpCharOfOccupancyComponent } from './excavation-ground-prep/create-excavation-ground-prep-permit/egp-char-of-occupancy/egp-char-of-occupancy.component';
import { TscElectricalLoadOrCapacitiesAppliedForComponent } from './temporary-service-connection/create-temporary-service-connection/tsc-electrical-load-or-capacities-applied-for/tsc-electrical-load-or-capacities-applied-for.component';
import { CreateFencingPermitDialogComponent } from './fencing/create-fencing-permit-dialog/create-fencing-permit-dialog.component';
import { CreateDemolitionPermitDialogComponent } from './demolition/create-demolition-permit-dialog/create-demolition-permit-dialog.component';
import { CreateExcavationGroundPrepPermitDialogComponent } from './excavation-ground-prep/create-excavation-ground-prep-permit-dialog/create-excavation-ground-prep-permit-dialog.component';
import { CreateTscPermitDialogComponent } from './temporary-service-connection/create-tsc-permit-dialog/create-tsc-permit-dialog.component';
import { CreateScaffoldingPermitDialogComponent } from './scaffolding/create-scaffolding-permit-dialog/create-scaffolding-permit-dialog.component';
import { CreateSidewalkPermitDialogComponent } from './sidewalk/create-sidewalk-permit-dialog/create-sidewalk-permit-dialog.component';

const COMPONENTS_FENCING: any[] = [
  CreateFencingPermitComponent,
  ListFencingPermitComponent,
  FencingScopeOfWorkComponent,
  FencingTypeComponent,
  CreateFencingPermitDialogComponent,
];
const COMPONENTS_DEMOLITION: any[] = [
  CreateDemolitionPermitComponent,
  ListDemolitionPermitComponent,
  DemolitionScopeOfWorkComponent,
  CreateDemolitionPermitDialogComponent,
];
const COMPONENTS_EXCAVATION_GROUND_PREP: any[] = [
  CreateExcavationGroundPrepPermitComponent,
  ListExcavationGroundPrepPermitComponent,
  EgpScopeOfWorkComponent,
  EgpCharOfOccupancyComponent,
  CreateExcavationGroundPrepPermitDialogComponent,
];
const COMPONENTS_TEMP_SERVICE_CONNECTION: any[] = [
  CreateTemporaryServiceConnectionComponent,
  ListTemporaryServiceConnectionComponent,
  TscPurposeComponent,
  TscElectricalLoadOrCapacitiesAppliedForComponent,
  CreateTscPermitDialogComponent,
];
const COMPONENTS_SCAFFOLDING: any[] = [
  ListScaffoldingPermitComponent,
  CreateScaffoldingPermitComponent,
  ScaffoldingScopeOfWorkComponent,
  CreateScaffoldingPermitDialogComponent,
];

const COMPONENTS_SIDEWALK: any[] = [
  ListSidewalkPermitComponent,
  CreateSidewalkPermitComponent,
  SidewalkScopeOfWorkComponent,
  CreateSidewalkPermitDialogComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS_FENCING,
    ...COMPONENTS_DEMOLITION,
    ...COMPONENTS_EXCAVATION_GROUND_PREP,
    ...COMPONENTS_TEMP_SERVICE_CONNECTION,
    ...COMPONENTS_SCAFFOLDING,
    ...COMPONENTS_SIDEWALK,
  ],
  imports: [CommonModule, SharedModule, OtherPermitRoutingModule],
})
export class OtherPermitModule {}
