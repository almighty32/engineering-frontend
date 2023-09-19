import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListElectricalPermitComponent } from '../ancillary-permit/electrical/list-electrical-permit/list-electrical-permit.component';
import { AnnualInspectionCertificateComponent } from './annual-inspection/annual-inspection-certificate/annual-inspection-certificate.component';
import { CreateAnnualInspectionComponent } from './annual-inspection/create-annual-inspection/create-annual-inspection.component';
import { ListAnnualInspectionComponent } from './annual-inspection/list-annual-inspection/list-annual-inspection.component';
import { ListAutomaticManualTransferSwitchCertComponent } from './electrical/automatic-manual-transfer-switch/list-automatic-manual-transfer-switch-cert/list-automatic-manual-transfer-switch-cert.component';
import { ListCOOIndoorOutdoorStationTransformerCertComponent } from './electrical/coo-indoor-outdoor-station-transformer/list-coo-indoor-outdoor-station-transformer-cert/list-coo-indoor-outdoor-station-transformer-cert.component';
import { ListFinalElectInspCertificateComponent } from './electrical/final-electrical-inspection/list-final-electrical-inspection-cert/list-final-electrical-inspection-cert.component';
import { ListGeneratorOrUpsCertificateComponent } from './electrical/generator-or-ups/list-generator-or-ups-cert/list-generator-or-ups-cert.component';
import { ListHvmvPrimaryDisconMeansCertificateComponent } from './electrical/hvmv-primary-discon-means/list-hvmv-primary-discon-means-cert/list-hvmv-primary-discon-means-cert.component';
import { ListIncomingLVSwitchgearCertificateComponent } from './electrical/incoming-low-voltage-switchgear/list-incoming-low-voltage-switchgear/list-incoming-low-voltage-switchgear-cert.component';
import { ListLightingDistributionPanelCertComponent } from './electrical/lighting-distribution-panels/list-lighting-distribution-panels-cert/list-lighting-distribution-panels-cert.component';
import { ListMotorControlCenterCertComponent } from './electrical/motor-control-center/list-motor-control-center-cert/list-motor-control-center-cert.component';
import { CreateIllegalElectricalInstallationCertComponent } from './electrical/notice-of-illegal-electrical-installation/create-illegal-electrical-installation-cert/create-illegal-electrical-installation-cert.component';
import { ListIllegalInstallationCertificateComponent } from './electrical/notice-of-illegal-electrical-installation/list-illegal-installation-cert/list-illegal-installation-cert.component';
import { CreateUnsafeElectricalInstallationCertComponent } from './electrical/notice-of-unsafe-electrical-installation/create-notice-of-unsafe-electrical-installation-cert/create-notice-of-unsafe-electrical-installation-cert.component';
import { ListUnsafeInstallationCertificateComponent } from './electrical/notice-of-unsafe-electrical-installation/list-notice-of-unsafe-electrical-installation-cert/list-notice-of-unsafe-electrical-installation-cert.component';
import { ListTemporaryPowerConCertificateComponent } from './electrical/temp-power-con/list-temp-power-con-cert/list-temp-power-con-cert.component';
import { ListAirconRefCertComponent } from './mechanical/aircon-ref/list-aircon-ref-cert/list-aircon-ref-cert.component';
import { ListElevatorDumbwaiterCertComponent } from './mechanical/elevator-dumb-waiter/list-elevator-dumbwaiter-cert/list-elevator-dumbwaiter-cert.component';
import { ListEscalatorCertComponent } from './mechanical/escalator/list-escalator-cert/list-escalator-cert.component';
import { ListGasPipeBurnerCertComponent } from './mechanical/gas-pipe-burner/list-gas-pipe-burner-cert/list-gas-pipe-burner-cert.component';
import { ListIllegalMechanicalInstallationNoticeComponent } from './mechanical/illegal-mechanical-installation/list-illegal-mechanical-installation-notice/list-illegal-mechanical-installation-notice.component';
import { ListInternalCombustionEngineCertComponent } from './mechanical/internal-combustion-engine/list-internal-combustion-engine-cert/list-internal-combustion-engine-cert.component';
import { ListMachineryCertComponent } from './mechanical/machinery/list-machinery-cert/list-machinery-cert.component';
import { ListMechanicalReqNoticeComponent } from './mechanical/mechanical-req/list-mechanical-req-notice/list-mechanical-req-notice.component';
import { ListSteamBoilerCertComponent } from './mechanical/steam-boiler/list-steam-boiler-cert/list-steam-boiler-cert.component';
import { ListUnfiredPressureVesselCertComponent } from './mechanical/unfired-pressure-vessel/list-unfired-pressure-vessel-cert/list-unfired-pressure-vessel-cert.component';
import { CreateOccupancyCertificateComponent } from './occupancy/create-occupancy-certificate/create-occupancy-certificate.component';
import { ListOccupancyCertificateComponent } from './occupancy/list-occupancy-certificate/list-occupancy-certificate.component';
import { OccupancyCertificateComponent } from './occupancy/occupancy-certificate/occupancy-certificate.component';

const routes: Routes = [
  // annual-inspection
  { path: 'print/annual-inspection-certifcate', component: AnnualInspectionCertificateComponent },
  { path: 'create/annual-inspection', component: CreateAnnualInspectionComponent },
  { path: 'annual-inspection', component: ListAnnualInspectionComponent },
  // occupancy
  { path: 'print/occupancy', component: OccupancyCertificateComponent },
  { path: 'create/occupancy', component: CreateOccupancyCertificateComponent },
  { path: 'occupancy', component: ListOccupancyCertificateComponent },

  // electrical - unsafe electrical installation
  {
    path: 'create/notice-unsafe-electrical-installation',
    component: CreateUnsafeElectricalInstallationCertComponent,
  },
  {
    path: 'notice-unsafe-electrical-installation',
    component: ListUnsafeInstallationCertificateComponent,
  },

  // electrical - illegal electrical installation
  {
    path: 'create/notice-illegal-electrical-installation',
    component: CreateIllegalElectricalInstallationCertComponent,
  },
  {
    path: 'illegal-electrical-certificate-notice',
    component: ListIllegalInstallationCertificateComponent,
  },

  {
    path: 'notice-unsafe-electrical-installation',
    component: ListOccupancyCertificateComponent,
  },

  // electrical - temp power connection
  { path: 'temporary-power-connection', component: ListTemporaryPowerConCertificateComponent },

  // electrical - electrical-inspection
  { path: 'electrical-inspection', component: ListElectricalPermitComponent },

  // electrical - final-electrical-inspection
  { path: 'final-electrical-inspection', component: ListFinalElectInspCertificateComponent },

  // electrical - completion-of-electrical-works
  { path: 'completion-of-electrical-works', component: ListOccupancyCertificateComponent },

  // electrical - indoor-outdoor-station-transformer

  {
    path: 'coo-indoor-outdoor-station-transformer',
    component: ListCOOIndoorOutdoorStationTransformerCertComponent,
  },

  // electrical - hv-mv-primary-disconnecting-means
  {
    path: 'hv-mv-primary-disconnecting-means',
    component: ListHvmvPrimaryDisconMeansCertificateComponent,
  },

  // electrical - incoming-low-voltage-switch-gear
  {
    path: 'incoming-low-voltage-switch-gear',
    component: ListIncomingLVSwitchgearCertificateComponent,
  },

  // electrical - lighting-distribution-panel
  { path: 'power-distribution-panel', component: ListOccupancyCertificateComponent },
  // electrical - lighting-distribution-panel
  { path: 'lighting-distribution-panel', component: ListLightingDistributionPanelCertComponent },

  // electrical - generator-or-uninterrupted-power-supply
  {
    path: 'generator-or-uninterrupted-power-supply',
    component: ListGeneratorOrUpsCertificateComponent,
  },
  {
    path: 'motor-control-center',
    component: ListMotorControlCenterCertComponent,
  },

  // electrical - automatic-or-manual-transfer-switch
  {
    path: 'automatic-or-manual-transfer-switch',
    component: ListAutomaticManualTransferSwitchCertComponent,
  },

  // !mechanical

  {
    path: 'notice-illegal-mechanical-installation',
    component: ListIllegalMechanicalInstallationNoticeComponent,
  },

  // mechanical - automatic-or-manual-transfer-switch
  { path: 'notice-mechanical-requirements', component: ListMechanicalReqNoticeComponent },

  // mechanical - steam-boiler
  { path: 'steam-boiler', component: ListSteamBoilerCertComponent },

  // mechanical - unfired-pressure-vessels
  { path: 'unfired-pressure-vessels', component: ListUnfiredPressureVesselCertComponent },

  // mechanical - gas-pipe-and-burner
  { path: 'gas-pipe-and-burner', component: ListGasPipeBurnerCertComponent },

  // mechanical - internal-cumbostion-engine
  { path: 'internal-cumbostion-engine', component: ListInternalCombustionEngineCertComponent },

  // mechanical - elevator-or-dumbwaiter
  { path: 'elevator-or-dumbwaiter', component: ListElevatorDumbwaiterCertComponent },
  // mechanical -machinery
  { path: 'machinery', component: ListMachineryCertComponent },

  // mechanical -escalator
  { path: 'escalator', component: ListEscalatorCertComponent },

  // mechanical -airconditioning-or-refrigerator

  { path: 'airconditioning-or-refrigerator', component: ListAirconRefCertComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClearanceCertificateRoutingModule {}
