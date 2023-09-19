import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearanceCertificateRoutingModule } from './clearance-certificate-routing.module';
import { CreateAnnualInspectionComponent } from './annual-inspection/create-annual-inspection/create-annual-inspection.component';
import { ListAnnualInspectionComponent } from './annual-inspection/list-annual-inspection/list-annual-inspection.component';
import { SharedModule } from '@shared';
import { ListOccupancyCertificateComponent } from './occupancy/list-occupancy-certificate/list-occupancy-certificate.component';
import { CreateOccupancyCertificateComponent } from './occupancy/create-occupancy-certificate/create-occupancy-certificate.component';
import { CreateIllegalElectricalInstallationCertComponent } from './electrical/notice-of-illegal-electrical-installation/create-illegal-electrical-installation-cert/create-illegal-electrical-installation-cert.component';
import { ListIllegalMechanicalInstallationNoticeComponent } from './mechanical/illegal-mechanical-installation/list-illegal-mechanical-installation-notice/list-illegal-mechanical-installation-notice.component';
import { CreateIllegalMechanicalInstallationNoticeComponent } from './mechanical/illegal-mechanical-installation/create-illegal-mechanical-installation-notice/create-illegal-mechanical-installation-notice.component';
import { CreateMechanicalReqNoticeComponent } from './mechanical/mechanical-req/create-mechanical-req-notice/create-mechanical-req-notice.component';
import { ListMechanicalReqNoticeComponent } from './mechanical/mechanical-req/list-mechanical-req-notice/list-mechanical-req-notice.component';
import { ListSteamBoilerCertComponent } from './mechanical/steam-boiler/list-steam-boiler-cert/list-steam-boiler-cert.component';
import { CreateSteamBoilerCertComponent } from './mechanical/steam-boiler/create-steam-boiler-cert/create-steam-boiler-cert.component';
import { CreateUnfiredPressureVesselCertComponent } from './mechanical/unfired-pressure-vessel/create-unfired-pressure-vessel-cert/create-unfired-pressure-vessel-cert.component';
import { CreateGasPipeBurnerCertComponent } from './mechanical/gas-pipe-burner/create-gas-pipe-burner-cert/create-gas-pipe-burner-cert.component';
import { CreateInternalCombustionEngineCertComponent } from './mechanical/internal-combustion-engine/create-internal-combustion-engine-cert/create-internal-combustion-engine-cert.component';
import { CreateElevatorDumbwaiterCertComponent } from './mechanical/elevator-dumb-waiter/create-elevator-dumbwaiter-cert/create-elevator-dumbwaiter-cert.component';
import { ListElevatorDumbwaiterCertComponent } from './mechanical/elevator-dumb-waiter/list-elevator-dumbwaiter-cert/list-elevator-dumbwaiter-cert.component';
import { ListInternalCombustionEngineCertComponent } from './mechanical/internal-combustion-engine/list-internal-combustion-engine-cert/list-internal-combustion-engine-cert.component';
import { ListMachineryCertComponent } from './mechanical/machinery/list-machinery-cert/list-machinery-cert.component';
import { CreateMachineryCertComponent } from './mechanical/machinery/create-machinery-cert/create-machinery-cert.component';
import { CreateEscalatorCertComponent } from './mechanical/escalator/create-escalator-cert/create-escalator-cert.component';
import { CreateAirconRefCertComponent } from './mechanical/aircon-ref/create-aircon-ref-cert/create-aircon-ref-cert.component';
import { NgxPrintModule } from 'ngx-print';
import { AnnualInspectionCertificateComponent } from './annual-inspection/annual-inspection-certificate/annual-inspection-certificate.component';
import { OccupancyCertificateComponent } from './occupancy/occupancy-certificate/occupancy-certificate.component';
import { ListIllegalInstallationCertificateComponent } from './electrical/notice-of-illegal-electrical-installation/list-illegal-installation-cert/list-illegal-installation-cert.component';
import { CreateIllegalInstallationCertificateDialogComponent } from './electrical/notice-of-illegal-electrical-installation/create-illegal-electrical-installation-cert-dialog/create-illegal-electrical-installation-cert-dialog.component';
import { CreateUnsafeElectricalInstallationCertComponent } from './electrical/notice-of-unsafe-electrical-installation/create-notice-of-unsafe-electrical-installation-cert/create-notice-of-unsafe-electrical-installation-cert.component';
import { CreateUnsafeInstallationCertificateDialogComponent } from './electrical/notice-of-unsafe-electrical-installation/create-notice-of-unsafe-electrical-installation-cert-dialog/create-notice-of-unsafe-electrical-installation-cert-dialog.component';
import { ListUnsafeInstallationCertificateComponent } from './electrical/notice-of-unsafe-electrical-installation/list-notice-of-unsafe-electrical-installation-cert/list-notice-of-unsafe-electrical-installation-cert.component';
import { CreateCOOIndoorOutdoorStationTransformerCertDialogComponent } from './electrical/coo-indoor-outdoor-station-transformer/create-coo-indoor-outdoor-station-transformer-cert-dialog/create-coo-indoor-outdoor-station-transformer-cert-dialog.component';
import { CreateCOOIndoorOutdoorStationTransformerCertComponent } from './electrical/coo-indoor-outdoor-station-transformer/create-coo-indoor-outdoor-station-transformer-cert/create-coo-indoor-outdoor-station-transformer-cert.component';
import { ListCOOIndoorOutdoorStationTransformerCertComponent } from './electrical/coo-indoor-outdoor-station-transformer/list-coo-indoor-outdoor-station-transformer-cert/list-coo-indoor-outdoor-station-transformer-cert.component';
import { CreateTemporaryPowerConCertComponent } from './electrical/temp-power-con/create-temp-power-con-cert/create-temp-power-con-cert.component';
import { CreateTemporaryPowerConDialogComponent } from './electrical/temp-power-con/create-temp-power-con-cert-dialog/create-temp-power-con-cert-dialog.component';
import { ListTemporaryPowerConCertificateComponent } from './electrical/temp-power-con/list-temp-power-con-cert/list-temp-power-con-cert.component';
import { CreateFinalElectInspCertComponent } from './electrical/final-electrical-inspection/create-final-electrical-inspection-cert/create-final-electrical-inspection-cert.component';
import { CreateFinalElectInspCertDialogComponent } from './electrical/final-electrical-inspection/create-final-electrical-inspection-cert-dialog/create-final-electrical-inspection-cert-dialog.component';
import { ListFinalElectInspCertificateComponent } from './electrical/final-electrical-inspection/list-final-electrical-inspection-cert/list-final-electrical-inspection-cert.component';
import { CreateHvmvPrimaryDisconMeansCertComponent } from './electrical/hvmv-primary-discon-means/create-hvmv-primary-discon-means-cert/create-hvmv-primary-discon-means-cert.component';
import { CreateHvmvPrimaryDisconMeansCertDialogComponent } from './electrical/hvmv-primary-discon-means/create-hvmv-primary-discon-means-cert-dialog/create-hvmv-primary-discon-means-cert-dialog.component';
import { ListHvmvPrimaryDisconMeansCertificateComponent } from './electrical/hvmv-primary-discon-means/list-hvmv-primary-discon-means-cert/list-hvmv-primary-discon-means-cert.component';
import { CreateIncomingLVSwitchgearDialogComponent } from './electrical/incoming-low-voltage-switchgear/create-incoming-low-voltage-switchgear-dialog/create-incoming-low-voltage-switchgear-cert-dialog.component';
import { CreateIncomingLVSwitchgearCertComponent } from './electrical/incoming-low-voltage-switchgear/create-incoming-low-voltage-switchgear/create-incoming-low-voltage-switchgear-cert.component';
import { ListIncomingLVSwitchgearCertificateComponent } from './electrical/incoming-low-voltage-switchgear/list-incoming-low-voltage-switchgear/list-incoming-low-voltage-switchgear-cert.component';
import { CreateMotorControlCenterCertComponent } from './electrical/motor-control-center/create-motor-control-center-cert/create-motor-control-center-cert.component';
import { CreateMotorControlCenterCertDialogComponent } from './electrical/motor-control-center/create-motor-control-center-cert-dialog/create-motor-control-center-cert-dialog.component';
import { ListMotorControlCenterCertComponent } from './electrical/motor-control-center/list-motor-control-center-cert/list-motor-control-center-cert.component';
import { CreateLightingDistributionPanelCertComponent } from './electrical/lighting-distribution-panels/create-lighting-distribution-panels-cert/create-lighting-distribution-panels-cert.component';
import { CreateLightingDistributionPanelCertDialogComponent } from './electrical/lighting-distribution-panels/create-lighting-distribution-panels-cert-dialog/create-lighting-distribution-panels-cert-dialog.component';
import { ListLightingDistributionPanelCertComponent } from './electrical/lighting-distribution-panels/list-lighting-distribution-panels-cert/list-lighting-distribution-panels-cert.component';
import { CreateGeneratorOrUpsCertComponent } from './electrical/generator-or-ups/create-generator-or-ups-cert/create-generator-or-ups-cert.component';
import { CreateGeneratorOrUpsDialogComponent } from './electrical/generator-or-ups/create-generator-or-ups-dialog/create-generator-or-ups-cert-dialog.component';
import { ListGeneratorOrUpsCertificateComponent } from './electrical/generator-or-ups/list-generator-or-ups-cert/list-generator-or-ups-cert.component';
import { CreateAutomaticManualTransferSwitchCertComponent } from './electrical/automatic-manual-transfer-switch/create-automatic-manual-transfer-switch-cert/create-automatic-manual-transfer-switch-cert.component';
import { CreateAutomaticManualTransferSwitchCertDialogComponent } from './electrical/automatic-manual-transfer-switch/create-automatic-manual-transfer-switch-cert-dialog/create-automatic-manual-transfer-switch-cert-dialog.component';
import { ListAutomaticManualTransferSwitchCertComponent } from './electrical/automatic-manual-transfer-switch/list-automatic-manual-transfer-switch-cert/list-automatic-manual-transfer-switch-cert.component';
import { CreateAirconRefCertDialogComponent } from './mechanical/aircon-ref/create-aircon-ref-cert-dialog/create-aircon-ref-cert-dialog.component';
import { ListAirconRefCertComponent } from './mechanical/aircon-ref/list-aircon-ref-cert/list-aircon-ref-cert.component';
import { CreateElevatorDumbwaiterCertDialogComponent } from './mechanical/elevator-dumb-waiter/create-elevator-dumbwaiter-cert-dialog/create-elevator-dumbwaiter-cert-dialog.component';
import { CreateEscalatorCertDialogComponent } from './mechanical/escalator/create-escalator-cert-dialog/create-escalator-cert-dialog.component';
import { CreateSteamboilerCertDialogComponent } from './mechanical/steam-boiler/create-steamboiler-cert-dialog/create-steamboiler-cert-dialog.component';
import { CreateUnfiredPressureVesselCertDialogComponent } from './mechanical/unfired-pressure-vessel/create-unfired-pressure-vessel-cert-dialog/create-unfired-pressure-vessel-cert-dialog.component';
import { ListUnfiredPressureVesselCertComponent } from './mechanical/unfired-pressure-vessel/list-unfired-pressure-vessel-cert/list-unfired-pressure-vessel-cert.component';
import { CreateGasPipeBurnerCertDialogComponent } from './mechanical/gas-pipe-burner/create-gas-pipe-burner-cert-dialog/create-gas-pipe-burner-cert-dialog.component';
import { ListGasPipeBurnerCertComponent } from './mechanical/gas-pipe-burner/list-gas-pipe-burner-cert/list-gas-pipe-burner-cert.component';
import { CreateInternalCombustionEngineCertDialogComponent } from './mechanical/internal-combustion-engine/create-internal-combustion-engine-cert-dialog/create-internal-combustion-engine-cert-dialog.component';
import { CreateMachineryCertDialogComponent } from './mechanical/machinery/create-machinery-cert-dialog/create-machinery-cert-dialog.component';
import { ListEscalatorCertComponent } from './mechanical/escalator/list-escalator-cert/list-escalator-cert.component';
import { CreateIllegalMechanicalInstallationNoticeDialogComponent } from './mechanical/illegal-mechanical-installation/create-illegal-mech-inst-notice-dialog/create-illegal-mechanical-installation-notice-dialog.component';
import { CreateMechanicalPermitDialogComponent } from '../ancillary-permit/mechanical/create-mechanica-permit-dialog/create-mechanica-permit-dialog.component';
import { CreateMechanicalReqNoticeDialogComponent } from './mechanical/mechanical-req/create-mechanical-req-notice-dialog/create-mechanical-req-notice-dialog.component';
import { CreateAnnualInspectionDialogComponent } from './annual-inspection/create-annual-inspection-dialog/create-annual-inspection-dialog.component';
import { OccupancyCreateDlgComponent } from './occupancy/occupancy-create-dlg/occupancy-create-dlg.component';

const COMPONENTS_ANNUAL_INSPECTION: any[] = [
  AnnualInspectionCertificateComponent,
  CreateAnnualInspectionComponent,
  CreateAnnualInspectionDialogComponent,
  ListAnnualInspectionComponent,
];
const COMPONENTS_OCCUPANCY: any[] = [
  OccupancyCertificateComponent,
  CreateOccupancyCertificateComponent,
  ListOccupancyCertificateComponent,
  OccupancyCreateDlgComponent,
];
const COMPONENTS_ILLEGAL_ELECTRICAL_INSTALLATION: any[] = [
  ListIllegalInstallationCertificateComponent,
  CreateIllegalElectricalInstallationCertComponent,
  CreateIllegalInstallationCertificateDialogComponent,
];

const COMPONENTS_UNSAFE_ELECTRICAL_INSTALLATION: any[] = [
  CreateUnsafeElectricalInstallationCertComponent,
  CreateUnsafeInstallationCertificateDialogComponent,
  ListUnsafeInstallationCertificateComponent,
];
const COMPONENTS_INDOOR_OUTDOOR_STATION_TRANSFORMER: any[] = [
  CreateCOOIndoorOutdoorStationTransformerCertDialogComponent,
  CreateCOOIndoorOutdoorStationTransformerCertComponent,
  ListCOOIndoorOutdoorStationTransformerCertComponent,
];

const COMPONENTS_TEMP_POWER_CON: any[] = [
  CreateTemporaryPowerConCertComponent,
  CreateTemporaryPowerConDialogComponent,
  ListTemporaryPowerConCertificateComponent,
];

const COMPONENTS_FINAL_ELECT_INSPECT_CERT_CON: any[] = [
  CreateFinalElectInspCertComponent,
  CreateFinalElectInspCertDialogComponent,
  ListFinalElectInspCertificateComponent,
];

const COMPONENTS_HVMV_PRIMARY_DISCON_MEANS: any[] = [
  CreateHvmvPrimaryDisconMeansCertComponent,
  CreateHvmvPrimaryDisconMeansCertDialogComponent,
  ListHvmvPrimaryDisconMeansCertificateComponent,
];
const COMPONENTS_INCOMING_LOW_VOLTAGE_SWITCHGEAR: any[] = [
  CreateIncomingLVSwitchgearDialogComponent,
  CreateIncomingLVSwitchgearCertComponent,
  ListIncomingLVSwitchgearCertificateComponent,
];

const COMPONENTS_ILLEGAL_ELECTRICAL_INST: any[] = [
  CreateIllegalElectricalInstallationCertComponent,
  CreateIllegalInstallationCertificateDialogComponent,
  ListIllegalInstallationCertificateComponent,
];

const COMPONENTS_MOTOR_CONTROL_CENTER_CERT: any[] = [
  CreateMotorControlCenterCertComponent,
  CreateMotorControlCenterCertDialogComponent,
  ListMotorControlCenterCertComponent,
];

const COMPONENTS_LIGHTING_DISTRIBUTION_PANEL: any[] = [
  CreateLightingDistributionPanelCertComponent,
  CreateLightingDistributionPanelCertDialogComponent,
  ListLightingDistributionPanelCertComponent,
];

const COMPONENTS_GENERATOR_OR_UPS: any[] = [
  CreateGeneratorOrUpsCertComponent,
  CreateGeneratorOrUpsDialogComponent,
  ListGeneratorOrUpsCertificateComponent,
];

const COMPONENTS_AUTOMATIC_MANUAL_TRANSFER_SWITCH: any[] = [
  CreateAutomaticManualTransferSwitchCertComponent,
  CreateAutomaticManualTransferSwitchCertDialogComponent,
  ListAutomaticManualTransferSwitchCertComponent,
];

// mechanical

const COMPONENTS_ILLEGAL_MECHANICAL_INST: any[] = [
  ListIllegalMechanicalInstallationNoticeComponent,
  CreateIllegalMechanicalInstallationNoticeComponent,
  CreateIllegalMechanicalInstallationNoticeDialogComponent,
];

const COMPONENTS_MECHANICAL_REQUIREMENT: any[] = [
  CreateMechanicalReqNoticeComponent,
  CreateMechanicalReqNoticeDialogComponent,
  ListMechanicalReqNoticeComponent,
];

const COMPONENTS_STEAM_BOILER: any[] = [
  ListSteamBoilerCertComponent,
  CreateSteamBoilerCertComponent,
  CreateSteamboilerCertDialogComponent,
];

const COMPONENTS_UNFIRED_PRESSURE_VESSEL: any[] = [
  CreateUnfiredPressureVesselCertComponent,
  CreateUnfiredPressureVesselCertDialogComponent,
  ListUnfiredPressureVesselCertComponent,
];
const COMPONENTS_GASPIPE_BURNER: any[] = [
  CreateGasPipeBurnerCertComponent,
  CreateGasPipeBurnerCertDialogComponent,
  ListGasPipeBurnerCertComponent,
];
const COMPONENTS_INTERNAL_COMBUSTION_ENGINE: any[] = [
  CreateInternalCombustionEngineCertComponent,
  ListInternalCombustionEngineCertComponent,
  CreateInternalCombustionEngineCertDialogComponent,
];
const COMPONENTS_ELEVATOR_DUMBWAITER: any[] = [
  CreateElevatorDumbwaiterCertComponent,
  CreateElevatorDumbwaiterCertDialogComponent,
  ListElevatorDumbwaiterCertComponent,
];
const COMPONENTS_MACHINERY: any[] = [
  ListMachineryCertComponent,
  CreateMachineryCertComponent,
  CreateMachineryCertDialogComponent,
];
const COMPONENTS_ESCALATOR: any[] = [
  CreateEscalatorCertComponent,
  CreateEscalatorCertDialogComponent,
  ListEscalatorCertComponent,
];
const COMPONENTS_AIRCON_REF: any[] = [
  CreateAirconRefCertComponent,
  CreateAirconRefCertDialogComponent,
  ListAirconRefCertComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS_ANNUAL_INSPECTION,
    ...COMPONENTS_OCCUPANCY,
    ...COMPONENTS_UNSAFE_ELECTRICAL_INSTALLATION,
    ...COMPONENTS_ILLEGAL_ELECTRICAL_INSTALLATION,
    ...COMPONENTS_INDOOR_OUTDOOR_STATION_TRANSFORMER,
    ...COMPONENTS_TEMP_POWER_CON,
    ...COMPONENTS_FINAL_ELECT_INSPECT_CERT_CON,
    ...COMPONENTS_HVMV_PRIMARY_DISCON_MEANS,
    ...COMPONENTS_INCOMING_LOW_VOLTAGE_SWITCHGEAR,
    ...COMPONENTS_ILLEGAL_ELECTRICAL_INST,
    ...COMPONENTS_MOTOR_CONTROL_CENTER_CERT,
    ...COMPONENTS_LIGHTING_DISTRIBUTION_PANEL,
    ...COMPONENTS_GENERATOR_OR_UPS,
    ...COMPONENTS_AUTOMATIC_MANUAL_TRANSFER_SWITCH,
    // mechanical
    ...COMPONENTS_ILLEGAL_MECHANICAL_INST,
    ...COMPONENTS_AIRCON_REF,
    ...COMPONENTS_MECHANICAL_REQUIREMENT,
    ...COMPONENTS_STEAM_BOILER,
    ...COMPONENTS_UNFIRED_PRESSURE_VESSEL,
    ...COMPONENTS_GASPIPE_BURNER,
    ...COMPONENTS_INTERNAL_COMBUSTION_ENGINE,
    ...COMPONENTS_ELEVATOR_DUMBWAITER,
    ...COMPONENTS_MACHINERY,
    ...COMPONENTS_ESCALATOR,
  ],
  imports: [
    CommonModule,
    SharedModule,
    // NgxPrintModule,
    ClearanceCertificateRoutingModule,
  ],
})
export class ClearanceCertificateModule {}
