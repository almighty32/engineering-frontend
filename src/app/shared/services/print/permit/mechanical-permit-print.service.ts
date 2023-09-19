import { Injectable } from '@angular/core';
import { IMechanicalPermit } from '@shared/model/interface/mechanical-permit/i-mechanical-permit-model';
import { PDFDocument } from 'pdf-lib';
import { DateService } from '../../date.service';

@Injectable({
  providedIn: 'root',
})
export class MechanicalPermitPrintService {
  constructor(private dateService: DateService) {}

  async print(data: IMechanicalPermit) {
    // TODO: Uncomment this as a whole
    // const element = data;
    // try {
    //   const secondPdfBytes = await fetch('/assets/pdfs/mechanical_permit_form.pdf').then(res =>
    //     res.arrayBuffer()
    //   );
    //   const pdfDoc = await PDFDocument.load(secondPdfBytes);
    //   pdfDoc.setTitle('Mechanical Permit');
    //   pdfDoc.setAuthor('MyElf Station');
    //   const fieldNames = pdfDoc
    //     .getForm()
    //     .getFields()
    //     .map(f => f.getName());
    //   console.log({ fieldNames });
    //   const form = pdfDoc.getForm();
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
    //   form.getTextField('MP_NO').setText(cutAreaNo);
    //   form.getTextField('BUILDING_PERMIT_NO').setText(buildingPermitNo);
    //   form.getTextField('FIRST_NAME').setText(firstName.toUpperCase());
    //   form.getTextField('LAST_NAME').setText(lastName.toUpperCase());
    //   form.getTextField('MIDDLE_INITIAL').setText(middleInitial.toUpperCase());
    //   form.getTextField('FORM_OF_OWNERSHIP').setText(formOfOwnership);
    //   form.getTextField('USE_OR_CHARACTER_OF_OCCUPANCY').setText('');
    //   form.getTextField('NO').setText(addressNo);
    //   form.getTextField('ADDRESS_STREET').setText(addressStreet.toUpperCase());
    //   form.getTextField('ADDRESS_BARANGAY').setText(addressBarangay.toUpperCase());
    //   form.getTextField('ADDRESS_CITY_MUN').setText(addressCity.toUpperCase());
    //   form.getTextField('ADDRESS_ZIP_CODE').setText(addressZipCode);
    //   form.getTextField('LOT NO').setText(lotNo);
    //   form.getTextField('BLK NO').setText(blockNo);
    //   form.getTextField('TCT NO').setText(tctNo);
    //   form.getTextField('TAX DEC NO').setText(taxDecNo);
    //   form.getTextField('STREET').setText(street.toUpperCase());
    //   form.getTextField('BARANGAY').setText(barangay.toUpperCase());
    //   form.getTextField('CITY MUNICIPALITY OF').setText(cityMun.toUpperCase());
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
    //   if (element.isRenovation) {
    //     form.getCheckBox('RENOVATION_CHECKBOX').check();
    //   }
    //   if (element.isConvertion) {
    //     form.getCheckBox('CONVERSION_CHECKBOX').check();
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
    //   if (element.isDemolition) {
    //     form.getCheckBox('DEMOLITION_CHECKBOX').check();
    //   }
    //   if (element.isAccessoryBuildingOrStruc) {
    //     form.getCheckBox('ACCESSORY_BUILDING').check();
    //   }
    //   if (element.otherScopeOfWork != '') {
    //     form.getCheckBox('OTHERS_CHECKBOX').check();
    //   }
    //   if (element.isBoiler) {
    //     form.getCheckBox('BOILER').check();
    //   }
    //   if (element.isPressureVessel) {
    //     form.getCheckBox('PRESSURE_VESSEL').check();
    //   }
    //   if (element.isInternalCombustionEngine) {
    //     form.getCheckBox('INTERNAL_COMBUSTION').check();
    //   }
    //   // if (element.ISR) {
    //   //   form.getCheckBox('REFRIGERATION').check();
    //   // }
    //   // if (element.IS) {
    //   //   form.getCheckBox('WINDOW_TYPE').check();
    //   // }
    //   // if (element.ISPA) {
    //   //   form.getCheckBox('PACKAGE').check();
    //   // }
    //   if (element.isCentralAirConditioning) {
    //     form.getCheckBox('CENTRAL_AIRCONDITIONING').check();
    //   }
    //   if (element.isMechanicalVentillation) {
    //     form.getCheckBox('MECHANICAL_VENTILLATION').check();
    //   }
    //   if (element.isEscalator) {
    //     form.getCheckBox('ESCALATOR').check();
    //   }
    //   if (element.isMovingSidewalk) {
    //     form.getCheckBox('MOVING_SIDEWALK').check();
    //   }
    //   // if (element.ISFRE) {
    //   //   form.getCheckBox('FREIGH_ELEVATOR').check();
    //   // }
    //   // if (element.ISPA) {
    //   //   form.getCheckBox('PASSENGER_ELEVATOR').check();
    //   // }
    //   // if (element.ISCA) {
    //   //   form.getCheckBox('CABLE_CAR').check();
    //   // }
    //   // if (element.ISDU) {
    //   //   form.getCheckBox('DUMBWAITER').check();
    //   // }
    //   if (element.isPumps) {
    //     form.getCheckBox('PUMPS').check();
    //   }
    //   // if (element.ISCOMP) {
    //   //   form.getCheckBox('COMPRESSED_AIR').check();
    //   // }
    //   // if (element.ISPN) {
    //   //   form.getCheckBox('PNEUMATIC_TUBES').check();
    //   // }
    //   // if (element.I) {
    //   //   form.getCheckBox('RAISING_CHECKBOX').check();
    //   // }
    //   // if (element.otherScopeOfWork) {
    //   //   form.getCheckBox('RAISING_CHECKBOX').check();
    //   // }
    //   // form.getTextField('CITY_MUNICIPALITY_OF').setText(element.cityMun);
    //   // form.getCheckBox('Check Box7').check();
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
    // this.ELEMENT_DATA.forEach((element: IMechanicalPermit) => {
    //   compiledData.push([
    //     { text: element.applicationNo },
    //     { text: new Date() },
    //     { text: 'element.areaCode ' },
    //     { text: element.building.firstName },
    //     { text: element.building.lotNo },
    //     { text: element.building.blockNo },
    //     { text: element.building.tctNo },
    //     { text: element.building.tctNo },
    //     { text: element.building.street },
    //     { text: element.building.baranggay },
    //     { text: element.building.cityMun },
    //     { text: 'Active' },
    //   ]);
    // });
    // const printTitle = 'MECHANICAL';
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
