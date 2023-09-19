import { ISteamBoilerModel } from '@shared/model/interface/certificates/mechanical/isteam-boiler-model';
import { IMechanicalPermit } from '@shared/model/interface/mechanical-permit/i-mechanical-permit-model';
import { SignaturyModel } from '@shared/model/signatury-model';

export class SteamBoilerModel implements ISteamBoilerModel {
  id = '';
  dateIssued = new Date();
  mechanicalPermitId = '';
  mechanicalPermit = {} as IMechanicalPermit;
  verifier = new SignaturyModel();
  verifierId = '';
  typeOfBoiler = '';
  hp = '';
  shellDrumLength = 0;
  shellDrumDiameter = 0;
  shellPlateTS = 0;
  shellPlateThickness = 0;
  headThickness = 0;
  tubesNumberSize = 0;
  totalHeatingSurfaceArea = 0;
  gaugeNo = 0;
  longitudinalJoinStyle = '';
  awp = 0;
  fusiblePlug = '';
  installationLocation = '';
  systemOfFiring = '';
  inspectionDate = new Date();
  expirationDate = new Date();
  inspectionFeePaid = 0;
  inspectionORNo = '';
  inspectionDatePaid = new Date();
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