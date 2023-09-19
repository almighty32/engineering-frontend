import { IElectricalPermit } from '../../electrical-permit/i-electrical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface ILightingDistributionPanelModel {
  id: string;
  dateIssued: Date;

  electricalPermitId: string;
  electricalPermit: IElectricalPermit;

  verifier: ISignatory;
  verifierId: string;

  voltage: string;
  typesOfEnclosure: string;
  descOrManuf: string;
  mainCBAmpsRating: string;
  poles: string;
  noOfBranchBreakers: number;
  noAndSizeOfIncomingWirePerPhase: string;
  noAndSizeOfGroundingWire: string;
  dateVerified: Date;
  dateExpires: Date;

  electricalInspectorId: string;
  electricalInspector: ISignatory;
  electricalInspectorDateSigned: Date;

  chiefElectricalSectionId: string;
  chiefElectricalSection: ISignatory;
  chiefElectricalSectionDateSigned: Date;

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
