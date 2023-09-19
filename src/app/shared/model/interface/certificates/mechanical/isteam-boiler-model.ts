import { IMechanicalPermit } from '../../mechanical-permit/i-mechanical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface ISteamBoilerModel {
  id: string;
  dateIssued: Date;

  mechanicalPermitId: string;
  mechanicalPermit: IMechanicalPermit;

  verifier: ISignatory;
  verifierId: string;

  typeOfBoiler: string;
  hp: string;
  shellDrumLength: number;
  shellDrumDiameter: number;
  shellPlateThickness: number;
  shellPlateTS: number;
  headThickness: number;
  tubesNumberSize: number;
  totalHeatingSurfaceArea: number;
  gaugeNo: number;
  longitudinalJoinStyle: string;
  awp: number;
  fusiblePlug: string;
  installationLocation: string;
  systemOfFiring: string;

  inspectionDate: Date;
  expirationDate: Date;
  inspectionFeePaid: number;
  inspectionORNo: string;
  inspectionDatePaid: Date;

  mechanicalInspectorId: string;
  mechanicalInspector: ISignatory;
  mechanicalInspectorDateSigned: Date;

  chiefMechanicalSectionId: string;
  chiefMechanicalSection: ISignatory;
  chiefMechanicalSectionDateSigned: Date;

  chiefInspectionEnforcementDivisionId: string;
  chiefInspectionEnforcementDivision: ISignatory;
  chiefInspectionEnforcementDivisionDateSigned: Date;

  chiefProcessingAndEvaluationDivisionId: string;
  chiefProcessingAndEvaluationDivision: ISignatory;
  chiefProcessingAndEvaluationDivisionDateSigned: Date;

  buildingOfficialId: string;
  buildingOfficial: ISignatory;
  buildingOfficialDateSigned: Date;

  certificateNo: string;
  fee: number;
  orNo: string;
  datePaid: Date;
}
