import { IProjectPropertyModel } from './shared/iproject-property-model';

export class ProjectPropertyModel implements IProjectPropertyModel {
  tctNo = 0;
  address = '';
  owner = '';
  lotNo = 0;
  block = 0;
  surveyNo = 0;
  baranggay = '';
  area = 0;
  areaSaleable = 0;
  areaNonSaleable = 0;
  areaRoadlot = 0;
  areaOthers = 0;
  subLot = 0;
  subLotSaleable = 0;
  subLotNonSaleable = 0;
  subLotRoadlot = 0;
  subLotOthers = 0;
}
