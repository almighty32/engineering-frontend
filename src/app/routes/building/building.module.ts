import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import {
  BuildingListComponent,
  DialogOverviewExampleDialogComponent,
} from './building-list/building-list.component';
import { CreateBuildingPermitComponent } from './create-building-permit/create-building-permit.component';
import { SharedModule } from '@shared/shared.module';
import { ProjectRegistrationComponent } from './project-registration/project-registration.component';
import { ListIssuedPermitComponent } from './list-issued-permit/list-issued-permit.component';
import { NgxPrintModule } from 'ngx-print';
import { UseOrCharacterOfOccupancyComponent } from './create-building-permit/use-or-character-of-occupancy/use-or-character-of-occupancy.component';
import { MatStepperComponent } from './create-building-permit/mat-stepper/mat-stepper.component';
import { CreateBuildingPermitDialogComponent } from './create-building-permit-dialog/create-building-permit-dialog.component';
import { BuildingOrderPaymentComponent } from './building-order-payment/building-order-payment.component';
import { BuildingPermitPrintComponent } from './building-permit-print/building-permit-print.component';
import { BuildingPermitCreateComponent } from './building-permit-create/building-permit-create.component';
import { BuildingPermitForIssuanceComponent } from './building-permit-for-issuance/building-permit-for-issuance.component';
import { BuildingPermitIssuedComponent } from './building-permit-issued/building-permit-issued.component';
import { BuildingPermitListComponent } from './building-permit-list/building-permit-list.component';
import { BuildingPermitCreateDlgComponent } from './building-permit-create-dlg/building-permit-create-dlg.component';
import { BuildingPermitRequirementsListDlgComponent } from './building-permit-requirements-list-dlg/building-permit-requirements-list-dlg.component';
import { BuildingPermitCertificatesComponent } from './building-permit-certificates/building-permit-certificates.component';
import { BuildingPermitCreateCertificateComponent } from './building-permit-create-certificate/building-permit-create-certificate.component';
import { BuildingPermitCreateCertificateDlgComponent } from './building-permit-create-certificate-dlg/building-permit-create-certificate-dlg.component';
import { EditBuildingPermitDialogComponent } from './edit-building-permit-dialog/edit-building-permit-dialog.component';

@NgModule({
  declarations: [
    BuildingListComponent,
    CreateBuildingPermitComponent,
    ProjectRegistrationComponent,
    ListIssuedPermitComponent,
    DialogOverviewExampleDialogComponent,
    UseOrCharacterOfOccupancyComponent,
    MatStepperComponent,
    CreateBuildingPermitDialogComponent,
    BuildingOrderPaymentComponent,
    BuildingPermitPrintComponent,
    BuildingPermitCreateComponent,
    BuildingPermitForIssuanceComponent,
    BuildingPermitIssuedComponent,
    BuildingPermitListComponent,
    BuildingPermitCreateDlgComponent,
    BuildingPermitRequirementsListDlgComponent,
    BuildingPermitCertificatesComponent,
    BuildingPermitCreateCertificateComponent,
    BuildingPermitCreateCertificateDlgComponent,
    EditBuildingPermitDialogComponent,
  ],
  imports: [SharedModule, CommonModule, NgxPrintModule, BuildingRoutingModule],
})
export class BuildingModule {}
