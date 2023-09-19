import { IElectricalPermit } from '../../electrical-permit/i-electrical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface ITemporaryPowerConnectionModel {
  id: string;
  dateIssued: Date;

  electricalPermitId: string;
  electricalPermit: IElectricalPermit;

  verifier: ISignatory;
  verifierId: string;

  isForConstruction: boolean;
  isForTesting: boolean;
  isOthers: boolean;
  isOthersDetail: string;
  validityStartDate: string;
  noOfDays: number;

  nameOfProject: string;

  electricalInspectorId: string;
  electricalInspector: ISignatory;
  electricalInspectorDateSigned: Date;

  chiefElectricalSectionId: string;
  chiefElectricalSection: ISignatory;
  chiefElectricalSectionDateSigned: Date;

  chiefInspectionEnforcementDivisionId: string;
  chiefInspectionEnforcementDivision: ISignatory;
  chiefInspectionEnforcementDivisionDateSigned: Date;

  buildingOfficialId: string;
  buildingOfficial: ISignatory;
  buildingOfficialDateSigned: Date;

  certificateNo: string;
  fee: number;
  orNo: string;
  datePaid: Date;
}
