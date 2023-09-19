import { ISignatory } from '../../I-signatory';
import { IElectricalPermit } from '../../electrical-permit/i-electrical-permit-model';

export interface IHvMvPrimaryDisconnectingMeansModel {
  id: string;
  dateIssued: Date;

  electricalPermitId: string;
  electricalPermit: IElectricalPermit;

  verifier: ISignatory;
  verifierId: string;

  voltage: string;
  insulatingMedium: string;
  descOrManuf: string;
  typeOfEnclosure: string;
  noOfPoles: string;
  contactLifeLeft: string;
  fuseOrCBRating: string;
  continuesAmpsrating: string;
  NoOrSizeOfIncomingWires: string;
  NoOrSizeOfGroundWires: string;

  dateVerified: Date;

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
