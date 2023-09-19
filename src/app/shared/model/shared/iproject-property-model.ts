export interface IProjectPropertyModel {
  tctNo: number;
  address: string;
  owner: string;
  lotNo: number;
  block: number;
  surveyNo: number;
  baranggay: string;

  area: number;
  areaSaleable: number;
  areaNonSaleable: number;
  areaRoadlot: number;
  areaOthers: number;

  subLot: number;
  subLotSaleable: number;
  subLotNonSaleable: number;
  subLotRoadlot: number;
  subLotOthers: number;
}
