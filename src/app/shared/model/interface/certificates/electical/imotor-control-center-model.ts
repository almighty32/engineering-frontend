import { IElectricalPermit } from '../../electrical-permit/i-electrical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface IMotorControlCenterModel {
  id: string;
  dateIssued: Date;

  electricalPermitId: string;
  electricalPermit: IElectricalPermit;

  verifier: ISignatory;
  verifierId: string;

  mainCBAmpsRating: number;
  poles: number;
  descOrManuf: string;
  noOfCombiCBOrMS: number;
  typeOfStarters: string;
  noOfCBOnly: number;
  withPLCS: number;
  withVFDS: number;
  voltage: number;
  typesOfEnclosure: string;
  noOfFeedersBreakers: number;
  noAndSizeOfIncomingCablePerPhase: number;
  noAndSizeOfGroundingWire: number;
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
