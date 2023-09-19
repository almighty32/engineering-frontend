import { SignaturyModel } from '@shared/model/signatury-model';
import { IGeneratorOrUPSModelModel } from '../../interface/certificates/electical/igenerator-or-ups-model';
import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';

export class GeneratorOrUPSModel implements IGeneratorOrUPSModelModel {
  dateIssued = new Date();
  electricalPermitId = '';
  electricalPermit = {} as IElectricalPermit;
  verifier = new SignaturyModel();
  verifierId = '';

  kvaWatts = 0;
  descOrManuf = '';
  incomingOrOutgoingVoltage = 0;
  noOfPhases = 0;
  noAndSizeOfIncomingCables = 0;
  noAndSizeOfOutgoingCables = 0;
  noAndSizeOfGroundingWires = 0;
  dateVerified = '';
  dateExpires = '';
  inspectionFee = 0;
  inspectionORNo = '';
  inspectionOrDateIssued = new Date();

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
  fee = 0;
  orNo = '';
  datePaid = new Date();
  id = '';
}
