import { IBuildingPermitModel } from './building-permit/I-building-permit';
import { ISignatory } from './I-signatory';

export interface IFencingPermitModel {
  id: string;
  applicationNo: string;
  fencingPermitNo: string;

  building: IBuildingPermitModel;
  buildingId: string;

  isNewConstruction: boolean;
  isErection: boolean;
  isAddition: boolean;
  isRepair: boolean;
  isDemolition: boolean;
  others: string;

  designProfessional: ISignatory;
  inspectorOrSupervisor: ISignatory;
  designProfessionalId: string;
  inspectorOrSupervisorId: string;

  lotOwner: string;

  length: string;
  height: string;

  isIndigenousMaterials: boolean;
  isReinforceConcrete: boolean;
  isRCAndConcHollowBlocks: boolean;
  isRCAndBricks: boolean;
  isRCAndInterlinkOrCycloneWire: boolean;
  isRCSteelMatting: boolean;
  isRCBarbedWire: boolean;

  othersFencingType: string;
}
