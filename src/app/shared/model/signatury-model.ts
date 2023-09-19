import { ISignatory } from './interface/I-signatory';

export class SignaturyModel implements ISignatory {
  id = '';
  firstName = '';
  lastName = '';
  middle = '';
  completeName = '';
  profession = '';
  address = '';
  prcNo = '';
  ptrNo = '';
  validity = '';
  tinNo = '';
  issuedAt = '';
  dateIssued = '';

  isProfessionalEE = false;
  isRegisteredEE = false;
  isRegisteredME = false;

  isProfMechanicalE = false;
  isMechanicalE = false;

  isArchitect = false;
  isCivilEngineer = false;
}
