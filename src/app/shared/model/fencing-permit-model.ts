import { IBuildingPermitModel } from './interface/building-permit/I-building-permit';
import { IFencingPermitModel } from './interface/ifencing-permit-model';
import { ISignatory } from './interface/I-signatory';
import { SignaturyModel } from './signatury-model';

export class FencingPermitModel implements IFencingPermitModel {
  id = '';
  applicationNo = '';
  fencingPermitNo = '';
  building = {} as IBuildingPermitModel;
  buildingId = '';
  isNewConstruction = false;
  isErection = false;
  isAddition = false;
  isRepair = false;
  isDemolition = false;
  others = '';
  designProfessional = new SignaturyModel();
  inspectorOrSupervisor = new SignaturyModel();
  designProfessionalId = '';
  inspectorOrSupervisorId = '';
  lotOwner = '';
  length = '';
  height = '';
  isIndigenousMaterials = false;
  isReinforceConcrete = false;
  isRCAndConcHollowBlocks = false;
  isRCAndBricks = false;
  isRCAndInterlinkOrCycloneWire = false;
  isRCSteelMatting = false;
  isRCBarbedWire = false;
  othersFencingType = '';
}
