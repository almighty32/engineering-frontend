import { IElectricalPermit } from '../../electrical-permit/i-electrical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface IUnsafeElectricalInstallationModel {
  id: string;
  dateIssued: Date;
  inspectionDate: Date;

  electricalPermit: IElectricalPermit;
  electricalPermitId: string;

  meterAccountNo: string;
  referenceNo: string;

  occupant: string;

  defects: string;

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
