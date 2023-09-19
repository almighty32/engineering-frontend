import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { SignaturyModel } from '@shared/model/signatury-model';
import { IElectricalInspectionModel } from '../../interface/certificates/electical/ielectrical-inspection-model';
import { ILightingDistributionPanelModel } from '../../interface/certificates/electical/ilighting-distribution-panel-model';

export class LightingDistributionPanelModel implements ILightingDistributionPanelModel {
  id = '';
  dateIssued = new Date();
  electricalPermitId = '';
  electricalPermit = {} as IElectricalPermit;
  verifier = new SignaturyModel();
  verifierId = '';
  voltage = '';
  typesOfEnclosure = '';
  descOrManuf = '';
  mainCBAmpsRating = '';
  poles = '';
  noOfBranchBreakers = 0;
  noAndSizeOfIncomingWirePerPhase = '';
  noAndSizeOfGroundingWire = '';
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
  fee = 0;
  orNo = '';
  datePaid = new Date();
}
