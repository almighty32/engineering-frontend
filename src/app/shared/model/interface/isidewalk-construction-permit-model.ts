import { IBuildingPermitModel } from './building-permit/I-building-permit';
import { ISignatory } from './I-signatory';

export interface ISidewalkConstructionPermitModel {
  id: string;

  applicationNo: string;
  sidewalkPermitNo: string;

  building: IBuildingPermitModel;
  buildingId: string;

  isNewConstruction: boolean;
  isErection: boolean;
  isAddition: boolean;
  isRenovation: boolean;
  isRepair: boolean;

  otherScopeOfWork: string;

  designProfessional: ISignatory;
  inspectorOrSupervisor: ISignatory;
  designProfessionalId: string;
  inspectorOrSupervisorId: string;

  lotOwner: string;
}
