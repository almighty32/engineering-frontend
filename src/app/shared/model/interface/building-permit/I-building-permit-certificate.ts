import { IBuildingPermitModel } from './I-building-permit';

export interface IBuildingPermitCertificateModel {
  id?: string;
  buildingPermit: IBuildingPermitModel;
  projectTitle: string;
  fsecNo: string;
  fsecDateIssued?: Date;
  orNo: string;
  datePaid?: Date;

  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
