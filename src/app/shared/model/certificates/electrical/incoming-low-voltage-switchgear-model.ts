import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { IIncomingLowVoltageSwitchgearModel } from '../../interface/certificates/electical/iincoming-low-voltage-switchgear-model';
import { SignaturyModel } from '../../signatury-model';

export class IncomingLowVoltageSwitchgearModel implements IIncomingLowVoltageSwitchgearModel {
  id = '';
  dateIssued = new Date();
  electricalPermitId = '';
  electricalPermit = {} as IElectricalPermit;
  verifier = new SignaturyModel();
  verifierId = '';
  mainCBAmps = '';
  poles = '';
  descOrManuf = '';
  voltage = '';
  typeOfEnclosure = '';
  NoOfFeederBreakers = '';
  NoAndSizeOfIncomingCablePerPhase = '';
  NoAndSizeOfGroundWire = '';
  mechanicalOperation = '';
  dateVerified = new Date();
  dateExpires = new Date();
  electricalInspectorId = '';
  electricalInspector = new SignaturyModel();
  electricalInspectorDateSigned = new Date();
  chiefElectricalSectionId = '';
  chiefElectricalSection = new SignaturyModel();
  chiefElectricalSectionDateSigned = new Date();
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
  fee = 0.0;
  orNo = '';
  datePaid = new Date();
}
