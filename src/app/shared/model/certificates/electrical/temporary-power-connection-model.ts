import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { SignaturyModel } from '@shared/model/signatury-model';
import { ITemporaryPowerConnectionModel } from '../../interface/certificates/electical/itemporary-power-connection-model';

export class TemporaryPowerConnectionModel implements ITemporaryPowerConnectionModel {
  dateIssued = new Date();
  electricalPermitId = '';
  electricalPermit = {} as IElectricalPermit;
  verifier = new SignaturyModel();
  verifierId = '';
  isForConstruction = false;
  isForTesting = false;
  isOthers = false;
  isOthersDetail = '';
  validityStartDate = '';
  noOfDays = 0.0;
  nameOfProject = '';
  electricalInspectorId = '';
  electricalInspector = new SignaturyModel();
  electricalInspectorDateSigned = new Date();
  chiefElectricalSectionId = '';
  chiefElectricalSection = new SignaturyModel();
  chiefElectricalSectionDateSigned = new Date();
  chiefInspectionEnforcementDivisionId = '';
  chiefInspectionEnforcementDivision = new SignaturyModel();
  chiefInspectionEnforcementDivisionDateSigned = new Date();
  buildingOfficialId = '';
  buildingOfficial = new SignaturyModel();
  buildingOfficialDateSigned = new Date();
  certificateNo = '';
  fee = 0.0;
  orNo = '';
  datePaid = new Date();
  id = '';
}
