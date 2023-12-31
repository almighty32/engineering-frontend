import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { SignaturyModel } from '@shared/model/signatury-model';
import { IAutomaticManualTransferSwitchModel } from '../../interface/certificates/electical/iautomatic-manual-transfer-switch-model';

export class AutomaticManualTransferSwitchModel implements IAutomaticManualTransferSwitchModel {
  id = '';
  dateIssued = new Date();
  electricalPermitId = '';
  electricalPermit = {} as IElectricalPermit;
  verifier = new SignaturyModel();
  verifierId = '';
  ampsOfCB = 0;
  poles = 0;
  descOrManuf = '';
  typesOfEnclosure = '';
  voltage = 0;
  withPlantExerciser = '';
  transferringOperation = '';
  standbyBatteries = '';
  trickleCharger = '';
  noAndSizeOfIncomingWirePerPhase = 0;
  noAndSizeOfGroundingWires = 0;
  kindOfOperation = '';
  dateVerified = new Date();
  dateExpires = new Date();
  inspectionFee = 0;
  inspectionORNo = '';
  inspectionORDateIssued = new Date();

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
