export interface ISignatory {
  id: string;
  firstName: string;
  lastName: string;
  middle: string;
  completeName: string;
  profession: string;

  address: string;
  prcNo: string;
  ptrNo: string;
  validity: string;
  tinNo: string;
  issuedAt: string;
  dateIssued: string;

  isProfessionalEE: boolean;
  isRegisteredEE: boolean;
  isRegisteredME: boolean;

  isProfMechanicalE: boolean;
  isMechanicalE: boolean;

  isArchitect: boolean;
  isCivilEngineer: boolean;
}
