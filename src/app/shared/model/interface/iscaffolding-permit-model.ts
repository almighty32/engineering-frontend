import { IBuildingPermitModel } from './building-permit/I-building-permit';
import { ISignatory } from './I-signatory';

export interface IScaffoldingPermitModel {
  id: string;

  applicationNo: string;
  scaffoldingPermitNo: string;

  building: IBuildingPermitModel;
  buildingId: string;

  isNewConstruction: boolean;
  isErection: boolean;
  isAddition: boolean;
  isAlteration: boolean;
  isRenovation: boolean;
  isConversion: boolean;
  isRepair: boolean;
  isMoving: boolean;
  isRaising: boolean;
  isDemolition: boolean;
  isAccesoryBuildingOrStructure: boolean;

  otherScopeOfWork: string;

  designProfessional: ISignatory;
  inspectorOrSupervisor: ISignatory;
  designProfessionalId: string;
  inspectorOrSupervisorId: string;

  lotOwner: string;
}
