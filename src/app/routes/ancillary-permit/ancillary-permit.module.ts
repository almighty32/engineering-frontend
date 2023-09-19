import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AncillaryPermitRoutingModule } from './ancillary-permit-routing.module';
import { ArchitecturalListComponent } from './architectural/architectural-list/architectural-list.component';
import { CreateArchitecturalPermitComponent } from './architectural/create-architectural-permit/create-architectural-permit.component';
import { CreateElectricalPermitComponent } from './electrical/create-electrical-permit/create-electrical-permit.component';
import { ListElectricalPermitComponent } from './electrical/list-electrical-permit/list-electrical-permit.component';
import { CreateMechanicalPermitComponent } from './mechanical/create-mechanical-permit/create-mechanical-permit.component';
import { ListMechanicalPermitComponent } from './mechanical/list-mechanical-permit/list-mechanical-permit.component';
import { CreatePlumbingPermitComponent } from './plumbing/create-plumbing-permit/create-plumbing-permit.component';
import { ListPlumbingPermitComponent } from './plumbing/list-plumbing-permit/list-plumbing-permit.component';
import { CreateSanitaryPermitComponent } from './sanitary/create-sanitary-permit/create-sanitary-permit.component';
import { ListSanitaryPermitComponent } from './sanitary/list-sanitary-permit/list-sanitary-permit.component';
import { CreateCivilStructuralPermitComponent } from './structural/create-civil-structural-permit/create-civil-structural-permit.component';
import { ListCivilStructuralPermitComponent } from './structural/list-civil-structural-permit/list-civil-structural-permit.component';
import { SharedModule } from '@shared';
import { ComformanceToFireCodeComponent } from './architectural/create-architectural-permit/comformance-to-fire-code/comformance-to-fire-code.component';
import { ArchitecturalFacilitiesComponent } from './architectural/create-architectural-permit/architectural-facilities/architectural-facilities.component';
import { PercentageOfOccupancyComponent } from './architectural/create-architectural-permit/percentage-of-occupancy/percentage-of-occupancy.component';
import { NatureOfCivilStructureWorksComponent } from './structural/create-civil-structural-permit/nature-of-civil-structure-works/nature-of-civil-structure-works.component';
import { ElectricalLoadOrCapacitiesAppliedForComponent } from './electrical/create-electrical-permit/electrical-load-or-capacities-applied-for/electrical-load-or-capacities-applied-for.component';
import { InstallationAndOperationComponent } from './mechanical/create-mechanical-permit/installation-and-operation/installation-and-operation.component';
import { SanitaryInstallationAndOperationComponent } from './sanitary/create-sanitary-permit/sanitary-installation-and-operation/sanitary-installation-and-operation.component';
import { FixtureComponent } from './plumbing/create-plumbing-permit/fixture/fixture.component';
import { CreateArchitecturalPermitDialogComponent } from './architectural/create-architectural-permit-dialog/create-architectural-permit-dialog.component';
import { CreateElectronicPermitComponent } from './electronic/create-electronic-permit/create-electronic-permit.component';
import { ListElectronicPermitComponent } from './electronic/list-electronic-permit/list-electronic-permit.component';
import { ElectronicNatureOfInstallationComponent } from './electronic/create-electronic-permit/electronic-nature-of-installation/electronic-nature-of-installation.component';
import { ElectronicScopeOfWorkComponent } from './electronic/create-electronic-permit/electronic-scope-of-work/electronic-scope-of-work.component';
import { ArchitecturalScopeOfWorkComponent } from './architectural/create-architectural-permit/architectural-scope-of-work/architectural-scope-of-work.component';
import { ElectricalScopeOfWorkComponent } from './electrical/create-electrical-permit/electrical-scope-of-work/electrical-scope-of-work.component';
import { MechanicalScopeOfWorkComponent } from './mechanical/create-mechanical-permit/mechanical-scope-of-work/mechanical-scope-of-work.component';
import { PlumbingScopeOfWorkComponent } from './plumbing/create-plumbing-permit/plumbing-scope-of-work/plumbing-scope-of-work.component';
import { SanitaryScopeOfWorkComponent } from './sanitary/create-sanitary-permit/sanitary-scope-of-work/sanitary-scope-of-work.component';
import { StructuralScopeOfWorkComponent } from './structural/create-civil-structural-permit/structural-scope-of-work/structural-scope-of-work.component';
import { CreateCivilStructuralPermitDialogComponent } from './structural/create-civil-structural-permit-dialog/create-civil-structural-dialog.component';
import { CreateElectricalPermitDialogComponent } from './electrical/create-electrical-permit-dialog/create-electrical-permit-dialog.component';
import { CreateMechanicalPermitDialogComponent } from './mechanical/create-mechanica-permit-dialog/create-mechanica-permit-dialog.component';
import { CreateElectronicPermitDialogComponent } from './electronic/create-electronic-permit-dialog/create-electronic-permit-dialog.component';
import { CreateSanitaryPermitDialogComponent } from './sanitary/create-sanitary-permit-dialog/create-sanitary-permit-dialog.component';
import { CreatePlumbingPermitDialogComponent } from './plumbing/create-plumbing-permit-dialog/create-plumbing-permit-dialog.component';

const COMPONENTS_ARCHITECTURE: any[] = [
  CreateArchitecturalPermitDialogComponent,
  ArchitecturalListComponent,
  CreateArchitecturalPermitComponent,
  ComformanceToFireCodeComponent,
  ArchitecturalScopeOfWorkComponent,
  ArchitecturalFacilitiesComponent,

  PercentageOfOccupancyComponent,
];
const COMPONENTS_ELECTRICAL: any[] = [
  CreateElectricalPermitComponent,
  ElectricalScopeOfWorkComponent,
  ElectricalLoadOrCapacitiesAppliedForComponent,
  ListElectricalPermitComponent,
  CreateElectricalPermitDialogComponent,
];
const COMPONENTS_ELECTRONIC: any[] = [
  CreateElectronicPermitComponent,
  ElectronicScopeOfWorkComponent,
  ElectronicNatureOfInstallationComponent,
  ListElectronicPermitComponent,
  CreateElectronicPermitDialogComponent,
];
const COMPONENTS_MECHANICAL: any[] = [
  CreateMechanicalPermitComponent,
  MechanicalScopeOfWorkComponent,
  InstallationAndOperationComponent,
  ListMechanicalPermitComponent,
  CreateMechanicalPermitDialogComponent,
];
const COMPONENTS_PLUMBING: any[] = [
  CreatePlumbingPermitComponent,
  ListPlumbingPermitComponent,
  PlumbingScopeOfWorkComponent,
  FixtureComponent,
  CreatePlumbingPermitDialogComponent,
];
const COMPONENTS_SANITARY: any[] = [
  CreateSanitaryPermitComponent,
  ListSanitaryPermitComponent,
  SanitaryScopeOfWorkComponent,
  SanitaryInstallationAndOperationComponent,
  CreateSanitaryPermitDialogComponent,
];
const COMPONENTS_CIVIL_STRUCTURAL: any[] = [
  CreateCivilStructuralPermitComponent,
  StructuralScopeOfWorkComponent,
  ListCivilStructuralPermitComponent,
  NatureOfCivilStructureWorksComponent,
  CreateCivilStructuralPermitDialogComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS_ARCHITECTURE,
    ...COMPONENTS_ELECTRICAL,
    ...COMPONENTS_ELECTRONIC,
    ...COMPONENTS_MECHANICAL,
    ...COMPONENTS_PLUMBING,
    ...COMPONENTS_SANITARY,
    ...COMPONENTS_CIVIL_STRUCTURAL,
  ],

  imports: [CommonModule, SharedModule, AncillaryPermitRoutingModule],
})
export class AncillaryPermitModule {}
