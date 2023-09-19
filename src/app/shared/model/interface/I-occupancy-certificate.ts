import { IBuildingPermitModel } from './building-permit/I-building-permit';

export interface IOccupancyCertificate {
  id?: string;
  // full or partial
  type: string;
  nameOfProject: string;
  occupancyPermitNo: string;
  buildingPermit: IBuildingPermitModel;
  fsicNo: string;
  fsicDateIssued?: Date;
  feesPaid: string;
  orNo: string;
  datePaid?: Date;

  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
