import { IBuildingPermitModel } from './interface/building-permit/I-building-permit';
import { IFencingPermitModel } from './interface/ifencing-permit-model';
import { ISignatory } from './interface/I-signatory';
import { ITemporaryServiceConnectionModel } from './interface/itemporary-service-connection-model';
import { SignaturyModel } from './signatury-model';

export class TemporaryServiceConnectionModel implements ITemporaryServiceConnectionModel {
  applicationNo = '';
  tscPermitNo = '';
  id = '';
  building = {} as IBuildingPermitModel;
  buildingId = '';
  isForConstruction = false;
  isForTesting = false;
  forOthers = '';
  totalConnectionLoad = 0;
  totalTransformerCapacity = 0;
  totalGeneratorOrUpsCapacity = 0;
  designProfessional = new SignaturyModel();
  inspectorOrSupervisor = new SignaturyModel();
  designProfessionalId = '';
  inspectorOrSupervisorId = '';
  lotOwner = '';
}
