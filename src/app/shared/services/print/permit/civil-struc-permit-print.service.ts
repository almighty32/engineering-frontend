import { Injectable } from '@angular/core';
import { ICivilOrStructuralPermit } from '@shared/model/interface/civil-structural/i-civil-structural-permit-model';
import { PDFDocument } from 'pdf-lib';
import { DateService } from '../../date.service';

@Injectable({
  providedIn: 'root',
})
export class CivilStructuralPermitPrintService {
  constructor(private dateService: DateService) {}

  async print(data: ICivilOrStructuralPermit) {
    // !Note: Uncomment from top to bottom
    // const element = data;
    // try {
    //   const secondPdfBytes = await fetch('/assets/pdfs/civil_or_structural_permit.pdf').then(res =>
    //     res.arrayBuffer()
    //   );
    //   const pdfDoc = await PDFDocument.load(secondPdfBytes);
    //   pdfDoc.setTitle('Civil or Structural Permit');
    //   pdfDoc.setAuthor('MyElf Station');
    //   // Modify doc, fill out the form...
    //   const fieldNames = pdfDoc
    //     .getForm()
    //     .getFields()
    //     .map(f => f.getName());
    //   console.log({ fieldNames });
    //   const form = pdfDoc.getForm();
    //   // const possibleFields = Array.from({ length: 111 }, (_, i) => i);
    //   // possibleFields.forEach((possibleField) => {
    //   //   try {
    //   //     form
    //   //       .getTextField(`Text${possibleField}`)
    //   //       .setText(possibleField.toString());
    //   //   } catch (error) {
    //   //     // console.error(error);
    //   //   }
    //   // });
    //   const { applicant, constructionLocation, formOfOwnership } = element.building;
    //   const {
    //     id,
    //     firstName,
    //     lastName,
    //     middleInitial,
    //     tin,
    //     addressNo,
    //     addressStreet,
    //     addressBarangay,
    //     addressCity,
    //     addressZipCode,
    //     contactNo,
    //   } = applicant;
    //   const { lotNo, blockNo, tctNo, taxDecNo, street, barangay, cityMun } = constructionLocation;
    //   const areaNo = element.applicationNo;
    //   const applicationNo = element.applicationNo;
    //   const bpNo = element.building.buildingPermitNo;
    //   const cutAreaNo = areaNo.slice(0, 8);
    //   const cutApplicationNo = applicationNo.slice(0, 10);
    //   const buildingPermitNo = bpNo.slice(0, 8);
    //   form.getTextField('APPLICATION_NO').setText(cutApplicationNo);
    //   form.getTextField('CSPNO').setText(cutAreaNo);
    //   form.getTextField('BUILDING_PERMIT_NO').setText(buildingPermitNo);
    //   form.getTextField('FIRST_NAME').setText(firstName);
    //   form.getTextField('LAST_NAME').setText(lastName);
    //   form.getTextField('MIDDLE_INITIAL').setText(middleInitial);
    //   form.getTextField('FORM_OF_OWNERSHIP').setText(formOfOwnership);
    //   form.getTextField('USE_OR_CHARACTER_OF_OCCUPANCY').setText('');
    //   form.getTextField('NO').setText(addressNo);
    //   form.getTextField('ADDRESS_STREET').setText(addressStreet);
    //   form.getTextField('ADDRESS_BARANGAY').setText(addressBarangay);
    //   form.getTextField('ADDRESS_CITY_MUN').setText(addressCity);
    //   form.getTextField('LOT_NO').setText(lotNo);
    //   form.getTextField('BLK NO').setText(blockNo);
    //   form.getTextField('TCT_NO').setText(tctNo);
    //   form.getTextField('TAX_DEC_NO').setText(taxDecNo);
    //   form.getTextField('STREET').setText(street);
    //   form.getTextField('BARANGAY').setText(barangay);
    //   form.getTextField('CITY_MUN').setText(cityMun);
    //   if (element.designProfessional) {
    //     const { completeName, address, prcNo, ptrNo, issuedAt, validity, dateIssued, tinNo } =
    //       element.designProfessional;
    //     form.getTextField('DESIGN_PROF').setText(completeName.toUpperCase());
    //     form.getTextField('DES_PROF_ADDRESS').setText(address.toUpperCase());
    //     form.getTextField('PRC_NO').setText(prcNo.toUpperCase());
    //     form.getTextField('PTR_NO').setText(ptrNo.toUpperCase());
    //     form.getTextField('ISSUED_AT').setText(issuedAt.toUpperCase());
    //     form.getTextField('VALIDITY').setText(validity.toUpperCase());
    //     form.getTextField('DATE_ISSUED').setText(dateIssued.toUpperCase());
    //     form.getTextField('TIN').setText(tinNo.toUpperCase());
    //   }
    //   if (element.inspectorOrSupervisor) {
    //     const { completeName, address, prcNo, ptrNo, issuedAt, validity, dateIssued, tinNo } =
    //       element.inspectorOrSupervisor;
    //     form.getTextField('SUPERVISOR').setText(completeName.toUpperCase());
    //     form.getTextField('SUP_ADDRESS').setText(address.toUpperCase());
    //     form.getTextField('SUP_PRC_NO').setText(prcNo.toUpperCase());
    //     form.getTextField('SUP_PTR_NO').setText(ptrNo.toUpperCase());
    //     form.getTextField('SUP_ISSUED_AT').setText(issuedAt.toUpperCase());
    //     form.getTextField('SUP_VALIDITY').setText(validity.toUpperCase());
    //     form.getTextField('SUP_DATE_ISSUED').setText(dateIssued.toUpperCase());
    //     form.getTextField('SUP_TIN').setText(tinNo.toUpperCase());
    //   }
    //   if (element.isNewConstruction) {
    //     form.getCheckBox('NEW_CONSTRUCTION').check();
    //   }
    //   if (element.isErection) {
    //     form.getCheckBox('ERECTION').check();
    //   }
    //   if (element.isAddition) {
    //     form.getCheckBox('ADDITION').check();
    //   }
    //   if (element.isAlteration) {
    //     form.getCheckBox('ALTERATION').check();
    //   }
    //   if (element.isFoundation) {
    //     form.getCheckBox('FOUNDATION').check();
    //   }
    //   if (element.isRenovation) {
    //     form.getCheckBox('RENOVATION_CHECKBOX').check();
    //   }
    //   if (element.isConvertion) {
    //     form.getCheckBox('CONVERSION_CHECKBOX').check();
    //   }
    //   if (element.isDemolition) {
    //     form.getCheckBox('DEMOLITION_CHECKBOX').check();
    //   }
    //   if (element.isMoving) {
    //     form.getCheckBox('MOVING_CHECKBOX').check();
    //   }
    //   if (element.isRepair) {
    //     form.getCheckBox('REPAIR_CHECKBOX').check();
    //   }
    //   if (element.isRaising) {
    //     form.getCheckBox('RAISING_CHECKBOX').check();
    //   }
    //   if (element.isAccessoryBuildingOrStruc) {
    //     form.getCheckBox('ACCESSORY_BUILDING').check();
    //   }
    //   if (element.otherScopeOfWork != '') {
    //     form.getCheckBox('OTHERS_CHECKBOX').check();
    //   }
    //   const {
    //     isStaking,
    //     isErectionOrLifting,
    //     isExcavation,
    //     isFoundation,
    //     isMaterialTesting,
    //     isPiling,
    //     isSlabs,
    //     isWalls,
    //     isConcreteFraming,
    //     isStructuralSteelFraming,
    //     isPrestressWork,
    //     isSteelTowers,
    //     isTanks,
    //     otherNatureOfWork,
    //   } = element;
    //   if (isStaking) {
    //     form.getCheckBox('STAKING').check();
    //   }
    //   if (isExcavation) {
    //     form.getCheckBox('EXCAVATION').check();
    //   }
    //   if (isFoundation) {
    //     form.getCheckBox('SOIL_STABILIZATION').check();
    //   }
    //   if (isPiling) {
    //     form.getCheckBox('PILING_WORKS').check();
    //   }
    //   // if (isPiling) {
    //   //   form.getCheckBox('FOUNDATION').check();
    //   // }
    //   if (isErectionOrLifting) {
    //     form.getCheckBox('ERECTION_LIFTING').check();
    //   }
    //   if (isConcreteFraming) {
    //     form.getCheckBox('CONCRETE_FRAMING').check();
    //   }
    //   if (isStructuralSteelFraming) {
    //     form.getCheckBox('STRUCTURAL_STEEL').check();
    //   }
    //   if (isSlabs) {
    //     form.getCheckBox('SLABS').check();
    //   }
    //   if (isWalls) {
    //     form.getCheckBox('WALLS').check();
    //   }
    //   if (isPrestressWork) {
    //     form.getCheckBox('PRESTRESS_WORKS').check();
    //   }
    //   if (isMaterialTesting) {
    //     form.getCheckBox('MATERIAL_TESTING').check();
    //   }
    //   if (isSteelTowers) {
    //     form.getCheckBox('STEEL_TESTING').check();
    //   }
    //   if (isTanks) {
    //     form.getCheckBox('TANKS').check();
    //   }
    //   if (otherNatureOfWork != '') {
    //     form.getCheckBox('OTHERS').check();
    //   }
    //   // pdfDoc.removePage(0);
    //   // pdfDoc.removePage(1);
    //   // pdfDoc.removePage(1);
    //   // pdfDoc.removePage(1);
    //   // pdfDoc.removePage(1);
    //   const pdfBytes = await pdfDoc.save();
    //   const file = new Blob([pdfBytes], { type: 'application/pdf' });
    //   const fileURL = URL.createObjectURL(file);
    //   window.open(fileURL);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  async printList() {
    // const fonts = {
    //   Roboto: {
    //     normal: 'fonts/Roboto-Regular.ttf',
    //     bold: 'fonts/Roboto-Medium.ttf',
    //     italics: 'fonts/Roboto-Italic.ttf',
    //     bolditalics: 'fonts/Roboto-MediumItalic.ttf',
    //   },
    // };
    // const compiledData: any[] = [];
    // this.ELEMENT_DATA.forEach((element: ICivilOrStructuralPermit) => {
    //   compiledData.push([
    //     { text: element.building.applicationNo },
    //     { text: new Date().getDate },
    //     { text: 'element.areaCode' },
    //     { text: element.building.firstName },
    //     { text: element.building.lotNo },
    //     { text: element.building.blockNo },
    //     { text: element.building.tctNo },
    //     { text: element.building.tctNo },
    //     { text: element.building.addressStreet },
    //     { text: element.building.addressBarangay },
    //     { text: element.building.addressCity },
    //     { text: 'Active' },
    //   ]);
    // });
    // const printTitle = 'CIVIL/STRUCTURAL';
    // pdfMake
    //   .createPdf({
    //     pageOrientation: 'landscape',
    //     pageSize: 'LEGAL',
    //     content: [
    //       {
    //         text: 'REPUBLIC OF THE PHILIPPINES',
    //         alignment: 'center',
    //         style: {
    //           fontSize: 15,
    //           lineHeight: 1.3,
    //         },
    //       },
    //       { text: 'PROVINCE OF CEBU', alignment: 'center', lineHeight: 1.3 },
    //       { text: 'CITY OF CEBU', alignment: 'center', lineHeight: 1.3 },
    //       {
    //         margin: [0, 20, 0, 0],
    //         text: `${printTitle} PERMIT LIST`,
    //         alignment: 'center',
    //         fontSize: 15,
    //         bold: true,
    //         lineHeight: 1.3,
    //       },
    //       { text: 'Month of March 2022', alignment: 'center', lineHeight: 1.3 },
    //       {
    //         margin: [0, 20, 0, 0],
    //         style: 'tableExample',
    //         table: {
    //           heights: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    //           widths: ['*', '*', 'auto', 100, 'auto', 'auto', 'auto', 'auto', '*', '*', '*', '*'],
    //           body: [
    //             [
    //               { text: 'Application Code', style: 'tableHeader' },
    //               { text: 'Date', style: 'tableHeader' },
    //               { text: 'Area Code', style: 'tableHeader' },
    //               { text: 'Application Name', style: 'tableHeader' },
    //               { text: 'Lot No', style: 'tableHeader' },
    //               { text: 'Block No', style: 'tableHeader' },
    //               { text: 'TCT No', style: 'tableHeader' },
    //               { text: 'TD No', style: 'tableHeader' },
    //               { text: 'Property St', style: 'tableHeader' },
    //               { text: 'Property Baranggay', style: 'tableHeader' },
    //               { text: 'Property City/Mun', style: 'tableHeader' },
    //               { text: 'Application Status', style: 'tableHeader' },
    //             ],
    //             ...compiledData,
    //           ],
    //         },
    //       },
    //     ],
    //     styles: {
    //       header: {
    //         fontSize: 18,
    //         bold: true,
    //         margin: [0, 0, 0, 10],
    //       },
    //       subheader: {
    //         fontSize: 16,
    //         bold: true,
    //         margin: [0, 10, 0, 5],
    //       },
    //       tableExample: {
    //         margin: [0, 5, 0, 15],
    //       },
    //       tableOpacityExample: {
    //         margin: [0, 5, 0, 15],
    //         fillColor: 'blue',
    //         fillOpacity: 0.3,
    //       },
    //       tableHeader: {
    //         alignment: 'center',
    //         bold: true,
    //         color: 'black',
    //       },
    //     },
    //     defaultStyle: {
    //       // alignment: 'justify'
    //     },
    //   })
    //   .open({}, window);
  }
}
