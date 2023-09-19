import { IApplicant } from './interface/i-applicant';

export class ApplicantModel implements IApplicant {
  lastName = '';
  firstName = '';
  middleInitial = '';
  tin = '';
  addressNo = '';
  addressStreet = '';
  addressBarangay = '';
  addressCity = '';
  addressZipCode = '';
  contactNo = '';
}
