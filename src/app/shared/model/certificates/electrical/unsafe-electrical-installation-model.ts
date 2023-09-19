import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { IUnsafeElectricalInstallationModel } from '../../interface/certificates/electical/iunsafe-electrical-installation-model';
import { SignaturyModel } from '../../signatury-model';

export class UnsafeElectricalInstallationModel implements IUnsafeElectricalInstallationModel {
  meterAccountNo = '';
  referenceNo = '';
  id = '';
  dateIssued = new Date();
  inspectionDate = new Date();
  electricalPermit = {} as IElectricalPermit;
  electricalPermitId = '';
  occupant = '';
  defects = '';
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
