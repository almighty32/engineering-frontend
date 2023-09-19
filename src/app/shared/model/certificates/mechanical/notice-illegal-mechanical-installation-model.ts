import { INoticeIllegalMechanicalInstallationModel } from '@shared/model/interface/certificates/mechanical/inotice-illegal-mechanical-installation-model';
import { IMechanicalPermit } from '@shared/model/interface/mechanical-permit/i-mechanical-permit-model';
import { SignaturyModel } from '@shared/model/signatury-model';

export class NoticeIllegalMechanicalInstallationModel
  implements INoticeIllegalMechanicalInstallationModel
{
  id = '';
  dateIssued = new Date();
  mechanicalPermitId = '';
  mechanicalPermit = {} as IMechanicalPermit;
  verifier = new SignaturyModel();
  verifierId = '';
  receivedByFirstName = '';
  receivedByMiddleName = '';
  receivedByLastName = '';
  receivedByCompleteName = '';
  dateReceived = '';
  receivedByOwner = false;
  mechanicalInspectorId = '';
  mechanicalInspector = new SignaturyModel();
  mechanicalInspectorDateSigned = new Date();
  chiefMechanicalSectionId = '';
  chiefMechanicalSection = new SignaturyModel();
  chiefMechanicalSectionDateSigned = new Date();
  chiefInspectionEnforcementDivisionId = '';
  chiefInspectionEnforcementDivision = new SignaturyModel();
  chiefInspectionEnforcementDivisionDateSigned = new Date();
  buildingOfficialId = '';
  buildingOfficial = new SignaturyModel();
  buildingOfficialDateSigned = new Date();
  certificateNo = '';
  fee = 0;
  orNo = '';
  datePaid = new Date();
}
