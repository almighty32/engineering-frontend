import { IUnfiredPressuredVesselModel } from '@shared/model/interface/certificates/mechanical/iunfired-pressure-vessel-model';
import { IMechanicalPermit } from '@shared/model/interface/mechanical-permit/i-mechanical-permit-model';
import { SignaturyModel } from '@shared/model/signatury-model';

export class UnfiredPressuredVesselModel implements IUnfiredPressuredVesselModel {
  id = '';
  dateIssued = new Date();
  mechanicalPermitId = '';
  mechanicalPermit = {} as IMechanicalPermit;
  verifier = new SignaturyModel();
  verifierId = '';
  type = '';
  shellLength = '';
  shellPlateDiameter = 0;
  shellPlateThickness = 0;
  headType = '';
  radius = 0;
  longitudinalJoint = '';
  longJointEfficiency = '';
  pressureAllowed = '';
  inspectionDate = new Date();
  expirationDate = new Date();
  certDateIssued = new Date();
  capacity = 0;
  inspectionFeePaid = 0;
  inspectionORNo = '';
  inspectionFeePadDate = new Date();
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
