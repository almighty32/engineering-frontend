import { IMechanicalPermit } from '../../mechanical-permit/i-mechanical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface IUnfiredPressuredVesselModel {
  id: string;
  dateIssued: Date;

  mechanicalPermitId: string;
  mechanicalPermit: IMechanicalPermit;

  verifier: ISignatory;
  verifierId: string;

  type: string;
  shellLength: string;
  shellPlateDiameter: number;
  shellPlateThickness: number;
  headType: string;
  radius: number;
  longitudinalJoint: string;
  longJointEfficiency: string;
  pressureAllowed: string;
  inspectionDate: Date;
  expirationDate: Date;
  certDateIssued: Date;
  capacity: number;
  inspectionFeePaid: number;
  inspectionORNo: string;
  inspectionFeePadDate: Date;

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
