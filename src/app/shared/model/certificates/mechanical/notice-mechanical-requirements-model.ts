import { INoticeMechanicalRequirementsModel } from '@shared/model/interface/certificates/mechanical/inotice-mechanical-requirements-model';
import { IMechanicalPermit } from '@shared/model/interface/mechanical-permit/i-mechanical-permit-model';
import { SignaturyModel } from '@shared/model/signatury-model';

export class NoticeMechanicalRequirementsModel implements INoticeMechanicalRequirementsModel {
  id = '';
  dateIssued = new Date();
  mechanicalPermitId = '';
  mechanicalPermit = {} as IMechanicalPermit;
  receivedByOwner = false;
  receivedByFirstName = '';
  receivedByMiddleName = '';
  receivedByLastName = '';
  receivedByCompleteName = '';
  dateReceived = '';
  inspectionFee = 0;
  inspectionORNo = '';
  inspectionDate = new Date();
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
