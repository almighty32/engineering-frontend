import { IElectricalPermit } from '../../electrical-permit/i-electrical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface IIllegalElectricalInstallationModel {
  id: string;
  electricalPermit: IElectricalPermit;
  electricalPermitId: string;

  dateIssued: Date;
  // recipientFirstname: string;
  // recipientMiddleName: string;
  // recipientLastName: string;
  // recipientCompleteName: string;

  // recipientAddressNo: string;
  // recipientAddressSt: string;
  // recipientAddressPostal: string;
  // recipientAddressCity: string;
  // recipientAddressCountry: string;

  receivedByFirstName: string;
  receivedByMiddleName: string;
  receivedByLastName: string;
  receivedByCompleteName: string;

  isOwner: boolean;

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

  inspectionFee: number;
  orNo: string;
  datePaid: Date;
}
