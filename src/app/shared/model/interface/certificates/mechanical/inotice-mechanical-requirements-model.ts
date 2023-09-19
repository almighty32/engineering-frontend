import { Time } from '@angular/common';
import { IMechanicalPermit } from '../../mechanical-permit/i-mechanical-permit-model';
import { ISignatory } from '../../I-signatory';

export interface INoticeMechanicalRequirementsModel {
  id: string;
  dateIssued: Date;

  mechanicalPermitId: string;
  mechanicalPermit: IMechanicalPermit;

  receivedByOwner: boolean;
  receivedByFirstName: string;
  receivedByMiddleName: string;
  receivedByLastName: string;
  receivedByCompleteName: string;
  dateReceived: string;

  inspectionFee: number;
  inspectionORNo: string;
  inspectionDate: Date;

  mechanicalInspectorId: string;
  mechanicalInspector: ISignatory;
  mechanicalInspectorDateSigned: Date;

  chiefMechanicalSectionId: string;
  chiefMechanicalSection: ISignatory;
  chiefMechanicalSectionDateSigned: Date;

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
