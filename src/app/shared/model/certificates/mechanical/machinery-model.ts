import { IMachinery } from '@shared/model/interface/certificates/mechanical/machinery-model';
import { IMechanicalPermit } from '@shared/model/interface/mechanical-permit/i-mechanical-permit-model';
import { SignaturyModel } from '@shared/model/signatury-model';

export class MachineryModel implements IMachinery {
  id = '';
  dateIssued = new Date();
  mechanicalPermitId = '';
  mechanicalPermit = {} as IMechanicalPermit;
  verifier = new SignaturyModel();
  verifierId = '';
  noOfUnits = 0;
  totalHP = 0;
  dateVerified = new Date();
  dateExpire = new Date();
  inspectionFee = 0;
  inspectionPaymentORNo = '';
  inspectionPaymentDate = new Date();
  mechanicalInspectorId = '';
  mechanicalInspector = new SignaturyModel();
  mechanicalInspectorDateSigned = new Date();
  chiefMechanicalSectionId = '';
  chiefMechanicalSection = new SignaturyModel();
  chiefMechanicalSectionDateSigned = new Date();
  chiefInspectionEnforcementDivisionId = '';
  chiefInspectionEnforcementDivision = new SignaturyModel();
  chiefInspectionEnforcementDivisionDateSigned = new Date();
  chiefProcessingAndEvaluationDivisionId = '';
  chiefProcessingAndEvaluationDivision = new SignaturyModel();
  chiefProcessingAndEvaluationDivisionDateSigned = new Date();
  buildingOfficialId = '';
  buildingOfficial = new SignaturyModel();
  buildingOfficialDateSigned = new Date();
  certificateNo = '';
  fee = 0;
  orNo = '';
  datePaid = new Date();
}
