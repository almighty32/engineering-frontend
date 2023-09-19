import { IBuildingPermitModel } from './building-permit/I-building-permit';
import { ISignatory } from './I-signatory';

export interface IExcavationGroundPrepModel {
  id: string;

  applicationNo: string;
  egppNo: string; // excavation and ground prep

  building: IBuildingPermitModel;
  buildingId: string;

  isNewConstruction: boolean;
  isErection: boolean;
  isAddition: boolean;
  isRenovation: boolean;
  isRepair: boolean;
  otherScopeOfWork: string;

  // use or character of occupancy
  isCharOccupancygroupA: boolean;
  isCharOccupancygroupB: boolean;
  isCharOccupancygroupC: boolean;
  isCharOccupancygroupD: boolean;
  isCharOccupancygroupE: boolean;
  isCharOccupancygroupF: boolean;
  isCharOccupancygroupG: boolean;
  isCharOccupancygroupH: boolean;
  isCharOccupancygroupI: boolean;
  isCharOccupancygroupJ: boolean;

  designProfessional: ISignatory;
  inspectorOrSupervisor: ISignatory;
  designProfessionalId: string;
  inspectorOrSupervisorId: string;

  lotOwner: string;
}
