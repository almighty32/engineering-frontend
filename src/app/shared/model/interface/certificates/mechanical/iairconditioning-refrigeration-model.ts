import { IMechanicalPermit } from '../../mechanical-permit/i-mechanical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface IAirconditioningRefrigeration {
  id: string;
  dateIssued: Date;

  mechanicalPermitId: string;
  mechanicalPermit: IMechanicalPermit;

  verifier: ISignatory;
  verifierId: string;

  refrigerationTons: number;
  icePlantTons: number;
  centralACTons: number;
  packagedTons: number;
  windowTypeHP: number;
  mechanicalVentilationHP: number;

  refrigerationUnits: number;
  icePlantUnits: number;
  centralACUnits: number;
  packagedUnits: number;
  windowTypeUnits: number;
  mechanicalVentilationUnits: number;

  dateVerified: Date;
  dateExpire: Date;
  inspectionFee: number;
  inspectionPaymentORNo: string;
  inspectionPaymentDate: Date;

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
