import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { IIllegalElectricalInstallationModel } from '../../interface/certificates/electical/iillegal-electrical-installation-model';
import { SignaturyModel } from '../../signatury-model';

export class IllegalElectricalInstallationModel implements IIllegalElectricalInstallationModel {
  id = '';
  electricalPermit = {} as IElectricalPermit;
  electricalPermitId = '';
  dateIssued = new Date();

  receivedByFirstName = '';
  receivedByMiddleName = '';
  receivedByLastName = '';
  receivedByCompleteName = '';

  isOwner = false;
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

  inspectionFee = 0.0;
  orNo = '';
  datePaid = new Date();
}
