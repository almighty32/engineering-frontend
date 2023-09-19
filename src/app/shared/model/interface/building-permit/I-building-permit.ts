import { ICharacterOfOccupancy } from 'app/routes/building/create-building-permit/use-or-character-of-occupancy/use-or-character-of-occupancy.component';
import { IOccupancyCertificate } from '../I-occupancy-certificate';
import { ISignatory } from '../I-signatory';
import { IApplicant } from '../i-applicant';
import { IConstructionLocation } from '../shared/I-construction-location';
import { IBuildingPermitCertificateModel } from './I-building-permit-certificate';
import { IBuildingPermitScopeOfWork } from './I-building-permit-scope-of-work';
import { IApplicantOwnerConsent } from '../shared/i-applicant-owner-consent';

export interface IBuildingPermitModel {

  bpCertificate?: IBuildingPermitCertificateModel;
  occupancyCertificate?: IOccupancyCertificate;

  id?: string;
  scopeOfWork: IBuildingPermitScopeOfWork[];
  applicant: IApplicant;
  signatoryId: string;
  constructionLocation: IConstructionLocation;
  dateApproved?: Date;
  characterOfOccupancy: ICharacterOfOccupancy[];
  buildingPermitNo: string;
  applicationNo: string;
  areaNo: string;
  isApproved: boolean;
  applicationType: string;
  buildingType: string;
  formOfOwnership: string;
  occupancyClassified: string;
  numberOfUnits: number;
  numberOfStory: number;
  floorArea: number;
  lotArea: number;
  totalEstimatedCost: number;
  buildingCost: number;
  electricalCost: number;
  mechanicalCost: number;
  ElectronicCost: number;
  plumbingCost: number;
  equipmentCost1: number;
  equipmentCost2: number;
  equipmentCost3: number;
  equipmentCost4: number;
  expectedCompletion?: Date;
  costOfEquipmentInstalled: number;
  proposedDate?: Date;
  applicantOwnerConsent: IApplicantOwnerConsent;
  status?: string;
  signatoryDate: Date;

  lotNo: string;
  blockNo: string;
  barangay: string;
  street: string;
  cityMun: string;

  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

