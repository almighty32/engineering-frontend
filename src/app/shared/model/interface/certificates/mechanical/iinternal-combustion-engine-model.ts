import { IMechanicalPermit } from '../../mechanical-permit/i-mechanical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface IInternalCombustionEngineModel {
  id: string;
  dateIssued: Date;

  mechanicalPermitId: string;
  mechanicalPermit: IMechanicalPermit;

  verifier: ISignatory;
  verifierId: string;

  engineType: string;
  engineHP: number;
  engineUsedFor: string;
  engineManufacturer: string;
  maxEngineSpeed: number;
  dateExpires: Date;
  inspectionDate: Date;
  inspectionFee: number;
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
