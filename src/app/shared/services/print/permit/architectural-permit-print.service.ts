import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';
import { DateService } from '../../date.service';
import { IArchitectural } from '@shared/model/interface/architectural-permit/i-architectural-permit';

@Injectable({
  providedIn: 'root',
})
export class ArchitecturalPermitPrintService {
  constructor(private dateService: DateService) {}

  async print(data: IArchitectural) {
    // TODO: remove this comment after fixing architectural permit
    // const element = data;
    // try {
    //   const secondPdfBytes = await fetch('/assets/pdfs/architectural_permit_form.pdf').then(res =>
    //     res.arrayBuffer()
    //   );
    //   const pdfDoc = await PDFDocument.load(secondPdfBytes);
    //   pdfDoc.setTitle('Architectural Permit');
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
    //   form.getTextField('AP_NO').setText(cutAreaNo);
    //   form.getTextField('BUILDING_PERMIT_NO').setText(buildingPermitNo);
    //   form.getTextField('FIRST_NAME').setText(firstName.toUpperCase());
    //   form.getTextField('LAST_NAME').setText(lastName.toUpperCase());
    //   form.getTextField('MIDDLE_INITIAL').setText(middleInitial.toUpperCase());
    //   form.getTextField('TIN').setText(tin);
    //   form.getTextField('FORM_OF_OWNERSHIP').setText(formOfOwnership.toUpperCase());
    //   form.getTextField('USE_OR_CHARACTER_OF_OCCUPANCY').setText('');
    //   form.getTextField('ENTERPRISE_ADDRESS_NO').setText(addressNo);
    //   form.getTextField('ENTERPRISE_ADDRESS_ST').setText(addressStreet.toUpperCase());
    //   form.getTextField('ENTERPRISE__ADDRESS_BARANGAY').setText(addressBarangay.toUpperCase());
    //   form.getTextField('ENTERPRISE_ADDRESS_CITY_MUN').setText(addressCity.toUpperCase());
    //   form.getTextField('TELEPHONE_NO').setText('');
    //   form.getTextField('TELEPHONE_NO').setText(contactNo);
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
    //   if (element.isAccessoryBuildingOrStruc) {
    //     form.getCheckBox('ACCESSORY_BUILDING').check();
    //   }
    //   if (element.otherScopeOfWork != '') {
    //     form.getCheckBox('OTHERS_CHECKBOX').check();
    //   }
    //   if (element.stairFacility) {
    //     form.getCheckBox('FACILITY_STAIRS').check();
    //   }
    //   if (element.walkwaysFacility) {
    //     form.getCheckBox('WALK_WAYS').check();
    //   }
    //   if (element.corredorsFacility) {
    //     form.getCheckBox('CORRIDORS').check();
    //   }
    //   if (element.doorEntranceThresholdsFacility) {
    //     form.getCheckBox('DOORS_ENTRANCES').check();
    //   }
    //   if (element.washroomAndToiletFacility) {
    //     form.getCheckBox('WASH_ROOMS').check();
    //   }
    //   if (element.liftOrEleveator) {
    //     form.getCheckBox('LIFTS').check();
    //   }
    //   if (element.stairFacility) {
    //     form.getCheckBox('FACILITY_STAIRS').check();
    //   }
    //   if (element.rampsFacility) {
    //     form.getCheckBox('RAMPS').check();
    //   }
    //   if (element.parkingAreaFacility) {
    //     form.getCheckBox('PARKING_AREA').check();
    //   }
    //   if (element.switchesControlBuzzers) {
    //     form.getCheckBox('SWITCHES_CONTROLS').check();
    //   }
    //   if (element.handRails) {
    //     form.getCheckBox('HANDRAILS').check();
    //   }
    //   if (element.thresolds) {
    //     form.getCheckBox('THRESHOLDS').check();
    //   }
    //   if (element.floorFinishes) {
    //     form.getCheckBox('FLOOR_FINISHES').check();
    //   }
    //   if (element.DrinkingFountains) {
    //     form.getCheckBox('DRINKING_FOUNTAINS').check();
    //   }
    //   if (element.publicTelephones) {
    //     form.getCheckBox('PUBLIC_TELEPHONES').check();
    //   }
    //   if (element.seatingAccomodation) {
    //     form.getCheckBox('SEATING_ACCOMODATIONS').check();
    //   }
    //   if (element.otherFacility != '') {
    //     form.getCheckBox('OTHERS_SPECIFY').check();
    //   }
    //   form
    //     .getTextField('PERCENTAGE OF BUILDING FOOTPRINT')
    //     .setText(element.percentageOfBuildingFootPrint.toString());
    //   form
    //     .getTextField('PERCENTAGE OF IMPERVIOUS SURFACE AREA')
    //     .setText(element.percentageOfImpervousArea.toString());
    //   form
    //     .getTextField('PERCENTAGE OF UNPAVED SURFACE AREA')
    //     .setText(element.percentageOfUnpavedSurface.toString());
    //   form.getTextField('fy_4').setText(element.otherDetails);
    //   if (element.numberAndWithOfExitDoors) {
    //     form.getCheckBox('NUMBER_AND_WIDTH').check();
    //   }
    //   if (element.widthOfCorridors) {
    //     form.getCheckBox('WIDTH_OF_CORRIDORS').check();
    //   }
    //   if (element.distanceToFireExits) {
    //     form.getCheckBox('DISTANCE_TO_FIRE_EXITS').check();
    //   }
    //   if (element.accessToPublicStreet) {
    //     form.getCheckBox('ACCESS_TO_PUBLIC_STREET').check();
    //   }
    //   if (element.firewalls) {
    //     form.getCheckBox('FIRE_WALLS').check();
    //   }
    //   if (element.fireFightingAndSafetyFacility) {
    //     form.getCheckBox('FIRE_FIGHTING_AND_SAFETY_FAC').check();
    //   }
    //   if (element.smokeDetectors) {
    //     form.getCheckBox('SMOKE_DETECTORS').check();
    //   }
    //   if (element.emergencyLights) {
    //     form.getCheckBox('EMERGENCY_LIGHTS').check();
    //   }
    //   if (element.confirmationFireCodeOthers) {
    //     form.getCheckBox('OTHERS').check();
    //   }
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
    // this.ELEMENT_DATA.forEach((element: IArchitectural) => {
    //   const {
    //     firstName,
    //     lastName,
    //     middleInitial,
    //     tin,
    //     ownershipForm,
    //     addressNo,
    //     addressStreet,
    //     addressBarangay,
    //     addressCity,
    //     enterpriseContactNo,
    //     lotNo,
    //     blockNo,
    //     tctNo,
    //     taxDecNo,
    //     street,
    //     baranggay,
    //     cityMun,
    //     scopeOfWork,
    //     applicationNo,
    //   } = element.building;
    //   compiledData.push([
    //     { text: element.applicationNo },
    //     { text: 'element.date ' },
    //     { text: applicationNo },
    //     { text: `${lastName} ${firstName} ${middleInitial} ` },
    //     { text: lotNo },
    //     { text: blockNo },
    //     { text: tctNo },
    //     { text: tctNo },
    //     { text: street },
    //     { text: baranggay },
    //     { text: cityMun },
    //     { text: 'Active' },
    //   ]);
    // });
    // const printTitle = 'ARCHITECTURAL';
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
