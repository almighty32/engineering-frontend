import { IBuildingPermitModel } from './building-permit/I-building-permit';
import { ISignatory } from './I-signatory';

export interface ITemporaryServiceConnectionModel {
  id: string;

  applicationNo: string;
  tscPermitNo: string;

  building: IBuildingPermitModel;
  buildingId: string;

  isForConstruction: boolean;
  isForTesting: boolean;

  forOthers: string;

  totalConnectionLoad: number;
  totalTransformerCapacity: number;
  totalGeneratorOrUpsCapacity: number;

  designProfessional: ISignatory;
  inspectorOrSupervisor: ISignatory;
  designProfessionalId: string;
  inspectorOrSupervisorId: string;

  lotOwner: string;
}
