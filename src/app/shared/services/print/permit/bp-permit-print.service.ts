import { Injectable } from '@angular/core';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { PDFDocument, PDFTextField, StandardFonts } from 'pdf-lib';
import { DateService } from '../../date.service';
import { IOccupancyCertificate } from '@shared/model/interface/I-occupancy-certificate';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BuildingPermitPrintService {
  constructor(private dateService: DateService, private currencyPipe: CurrencyPipe) {}

  async print(data: IBuildingPermitModel) {
    const element = data;
    try {
      const secondPdfBytes = await fetch('/assets/pdfs/building_permit_form.pdf').then(res =>
        res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('Building Permit');
      pdfDoc.setAuthor('MyElf Station');
      // Modify doc, fill out the form...
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());
      console.log({ fieldNames });

      const form = pdfDoc.getForm();

      // const possibleFields = Array.from({ length: 111 }, (_, i) => i);
      // possibleFields.forEach((possibleField) => {
      //   try {
      //     form
      //       .getTextField(`Text${possibleField}`)
      //       .setText(possibleField.toString());
      //   } catch (error) {
      //     // console.error(error);
      //   }
      // });
      const areaNo = element.areaNo;
      const applicationNo = element.applicationNo;
      const _noDash = applicationNo.replaceAll('-', '');

      const cutAreaNo = areaNo.slice(0, 10);
      const cutApplicationNo = _noDash.slice(0, 10);

      form.getTextField('NEW').setText('/');

      form.getTextField('APPLICATION NO').setText(cutApplicationNo);
      form.getTextField('AREA NO').setText(cutAreaNo);

      form.getTextField('OWNER').setText('');

      const { applicant } = element;

      form.getTextField('FIRSTNAME').setText(applicant.firstName.toUpperCase());
      form.getTextField('LASTNAME').setText(applicant.lastName.toUpperCase());
      form.getTextField('MIDDLE INITIAL').setText(applicant.middleInitial.toUpperCase());
      form.getTextField('TIN').setText(applicant.tin);

      form.getTextField('FORM OF OWNERSHIP').setText(element.formOfOwnership.toUpperCase());
      form.getTextField('ENTERPRISE_ADDRESS_NO').setText(applicant.addressNo.toUpperCase());
      form.getTextField('ENTERPRISE_ADDRESS_ST').setText(applicant.addressStreet.toUpperCase());
      form
        .getTextField('ENTERPRISE_ADDRESS_BARANGGAY')
        .setText(applicant.addressBarangay.toUpperCase());
      form
        .getTextField('ENTERPRISE_ADDRESS_CITY_MUNICIPALITY')
        .setText(applicant.addressCity.toUpperCase());
      form
        .getTextField('ENTERPRISE_ADDRESS_ZIP_CODE')
        .setText(applicant.addressZipCode.toUpperCase());

      form.getTextField('CONTACT_NO').setText(applicant.contactNo.toUpperCase());

      const { constructionLocation } = element;

      form.getTextField('LOT_NO').setText(constructionLocation.lotNo);
      form.getTextField('BLK_NO').setText(constructionLocation.blockNo);
      form.getTextField('TCT_NO').setText(constructionLocation.tctNo.toUpperCase());
      form.getTextField('CURRENT_TAX_DEC_NO').setText(constructionLocation.taxDecNo);
      form.getTextField('STREET').setText(constructionLocation.street.toUpperCase());
      form.getTextField('BARANGAY').setText(constructionLocation.barangay.toUpperCase());
      form.getTextField('CITY_MUNICIPALITY_OF').setText(constructionLocation.cityMun.toUpperCase());

      // location of construction
      // if (element.inspectorOrSupervisor) {
      //   const { completeName, address, prcNo, ptrNo, issuedAt, validity, dateIssued, tinNo } =
      //     element.inspectorOrSupervisor;

      //   form.getTextField('ARCHITECT OR CIVIL ENGINEER').setText(completeName.toUpperCase());
      //   form.getTextField('Address').setText(address.toUpperCase());
      //   form.getTextField('PRC No').setText(prcNo.toUpperCase());
      //   form.getTextField('PTR No').setText(ptrNo.toUpperCase());
      //   form.getTextField('Issued at').setText(issuedAt.toUpperCase());
      //   form.getTextField('Validity').setText(validity.toUpperCase());
      //   form.getTextField('Date Issued').setText(dateIssued.toUpperCase());
      //   form.getTextField('TIN_2').setText(tinNo.toUpperCase());
      // }

      // if (element.scopeOfWork.newConstruction) {
      //   form.getCheckBox('NEW_CONSTRUCTION').check();
      // }

      // if (element.scopeOfWork.erection) {
      //   form.getCheckBox('ERECTION').check();
      // }
      // if (element.scopeOfWork.addition) {
      //   form.getCheckBox('ADDITION').check();
      // }

      // if (element.scopeOfWork.erection) {
      //   form.getCheckBox('ERECTION').check();
      // }

      // if (element.scopeOfWork.renovation) {
      //   form.getCheckBox('RENOVATION').check();
      // }

      // if (element.scopeOfWork.convertion) {
      //   form.getCheckBox('CONVERSION').check();
      // }

      // if (element.scopeOfWork.moving) {
      //   form.getCheckBox('MOVING').check();
      // }
      // if (element.scopeOfWork.repair) {
      //   form.getCheckBox('REPAIR').check();
      // }
      // if (element.scopeOfWork.raising) {
      //   form.getCheckBox('RAISING').check();
      // }
      // if (element.scopeOfWork.accessoryBuildingOrStruc) {
      //   form.getCheckBox('ACCESSORY_BUILDING').check();
      // }
      // if (element.scopeOfWork.legalization) {
      //   form.getCheckBox('LEGALIZATION_OF_EXISTING_BUILDING').check();
      // }
      // if (element.scopeOfWork.other) {
      //   form.getCheckBox('OTHERS').check();
      // }

      // if (element.charOccupancygroupA) {
      //   form.getTextField('GROUP A RESIDENTIAL DWELLINGS').setText('/');
      // }
      // if (element.charOccupancygroupASingle) {
      //   form.getCheckBox('SINGLE').check();
      // }
      // if (element.charOccupancygroupADuplex) {
      //   form.getCheckBox('DUPLEX').check();
      // }
      // if (element.charOccupancygroupAResidential) {
      //   form.getCheckBox('RESIDENTIAL R1 R2').check();
      // }

      // //
      // if (element.charOccupancygroupB) {
      //   form.getTextField('GROUP B  RESIDENTIAL').setText('/');
      // }
      // if (element.charOccupancygroupBHotel) {
      //   form.getCheckBox('HOTEL').check();
      // }
      // if (element.charOccupancygroupBDormitory) {
      //   form.getCheckBox('DORMITORY').check();
      // }
      // if (element.charOccupancygroupBResidential) {
      //   form.getCheckBox('RESIDENTIAL R3 R4 R5').check();
      // }

      // if (element.charOccupancygroupBTownhouse) {
      //   form.getCheckBox('TOWNHOUSE').check();
      // }
      // if (element.charOccupancygroupBBoardingHouse) {
      //   form.getCheckBox('BOARDINGHOUSE').check();
      // }
      // if (element.charOccupancygroupBOthers) {
      //   form.getCheckBox('OTHERS_4').check();
      // }

      // if (element.charOccupancygroupC) {
      //   form.getTextField('GROUP C  EDUCATIONAL  RECREATIONAL').setText('/');
      // }
      // if (element.charOccupancygroupCSchoolBuilding) {
      //   form.getCheckBox('SCHOOL BUILDING').check();
      // }
      // if (element.charOccupancygroupCCivicCenter) {
      //   form.getCheckBox('CIVIC CENTER').check();
      // }
      // if (element.charOccupancygroupCClubHouse) {
      //   form.getCheckBox('CLUBHOUSE').check();
      // }
      // if (element.charOccupancygroupCSchoolAuditorumGym) {
      //   form.getCheckBox('SCHOOL AUDITORIUM').check();
      // }
      // if (element.charOccupancygroupCChurchMosqueTempleChapel) {
      //   form.getCheckBox('CHURCH MOSQUE').check();
      // }
      // if (element.charOccupancygroupCOthers) {
      //   form.getCheckBox('OTHERS_7').check();
      // }

      // if (element.charOccupancygroupD) {
      //   form.getTextField('GROUP D  INSTITUTIONAL').setText('/');
      // }
      // if (element.charOccupancygroupDHospital) {
      //   form.getCheckBox('HOSPITAL OR SIMILAR STRUCTURE').check();
      // }

      // if (element.charOccupancygroupDHomeForTheAged) {
      //   form.getCheckBox('HOME FOR THE AGED').check();
      // }

      // if (element.charOccupancygroupDGovernmentOffice) {
      //   form.getCheckBox('GOVERNMENT OFFICE').check();
      // }

      // if (element.charOccupancygroupDOthers) {
      //   form.getCheckBox('OTHERS_10').check();
      // }

      // if (element.charOccupancygroupE) {
      //   form.getTextField('GROUP E  COMMERCIAL').setText('/');
      // }

      // if (element.charOccupancygroupEBank) {
      //   form.getCheckBox('BANK').check();
      // }

      // if (element.charOccupancygroupEDrinkingDining) {
      //   form.getCheckBox('DRINKING  DINING').check();
      // }

      // if (element.charOccupancygroupEShop) {
      //   form.getCheckBox('SHOP ie DRESS SHOP TAILORING').check();
      // }
      // if (element.charOccupancygroupEShop) {
      //   form.getCheckBox('STORE').check();
      // }
      // if (element.charOccupancygroupEMall) {
      //   form.getCheckBox('SHOPPING').check();
      // }
      // if (element.charOccupancygroupEOthers) {
      //   form.getCheckBox('OTHERS_3').check();
      // }

      // if (element.charOccupancygroupF) {
      //   form.getTextField('GROUP F  LIGHT INDUSTRIAL').setText('/');
      // }
      // if (element.charOccupancygroupFFactory) {
      //   form.getCheckBox('FACTORY  PLANT USING INCOMBUSTIBLE').check();
      // }
      // if (element.charOccupancygroupFOthers) {
      //   form.getCheckBox('OTHERS_5').check();
      // }

      // if (element.charOccupancygroupG) {
      //   form.getTextField('GROUP G  MEDIUM INDUSTRIAL').setText('/');
      // }
      // if (element.charOccupancygroupGStorage) {
      //   form.getCheckBox('STORAGE  WAREHOUSE FOR HAZARDOUS').check();
      // }
      // if (element.charOccupancygroupGFactory) {
      //   form.getCheckBox('FACTORY FOR HAZARDOUS HIGHLY').check();
      // }
      // if (element.charOccupancygroupGOthers) {
      //   form.getCheckBox('OTHERS_3').check();
      // }
      // if (element.charOccupancygroupH) {
      //   form.getTextField('GROUP H  ASSEMBLY OCCUPANT').setText('/');
      // }
      // if (element.charOccupancygroupHTheater) {
      //   form.getCheckBox('THEATER AUDITORIUM CONVENTION HALL').check();
      // }
      // if (element.charOccupancygroupHOthers) {
      //   form.getCheckBox('OTHERS_2').check();
      // }
      // if (element.charOccupancygroupI) {
      //   form.getTextField('GROUP I  ASSEMBLY OCCUPANT').setText('/');
      // }

      // if (element.charOccupancygroupIColiseum) {
      //   form.getCheckBox('COLISEUM SPORTS COMPLEX').check();
      // }
      // if (element.charOccupancygroupIOthers) {
      //   form.getCheckBox('OTHERS_6').check();
      // }

      // if (element.charOccupancygroupJ) {
      //   form.getTextField('GROUP J  J1 AGRICULTURAL').setText('/');
      // }
      // if (element.charOccupancygroupJPrivateCarport) {
      //   form.getCheckBox('BARN GRANARY POULTRY HOUSE').check();
      // }
      // if (element.charOccupancygroupJOthers) {
      //   form.getCheckBox('OTHERS_8').check();
      // }

      form.getTextField('OCCUPANCY CLASSIFIED').setText(element.occupancyClassified.toUpperCase());
      form.getTextField('NUMBER OF UNITS').setText(element.numberOfUnits.toString());
      form.getTextField('NUMBER OF STOREY').setText(element.numberOfStory.toString());
      form.getTextField('TOTAL FLOOR AREA').setText(element.floorArea.toString());
      form.getTextField('LOT AREA').setText(element.lotArea.toString());
      form.getTextField('TOTAL ESTIMATED COST P').setText(element.totalEstimatedCost.toString());
      form.getTextField('BUILDING').setText(element.buildingCost.toString());
      form.getTextField('ELECTRICAL').setText(element.electricalCost.toString());
      form.getTextField('MECHANICAL').setText(element.mechanicalCost.toString());
      form.getTextField('ELECTRONICS').setText(element.ElectronicCost.toString());
      form.getTextField('PLUMBING').setText(element.plumbingCost.toString());
      form.getTextField('P').setText(element.costOfEquipmentInstalled.toString());

      // form.getTextField('CITY_MUNICIPALITY_OF').setText(element.cityMun);

      // form.getCheckBox('Check Box7').check();

      // pdfDoc.removePage(0);
      // pdfDoc.removePage(1);
      // pdfDoc.removePage(1);
      // pdfDoc.removePage(1);
      // pdfDoc.removePage(1);

      form.flatten();

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }

  async printBPCertificate(data: any) {
    const element = data;
    console.log('hey', data);
    try {
      const secondPdfBytes = await fetch('/assets/pdfs/certificates/bp-certificate.pdf').then(res =>
        res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('Building Permit');
      pdfDoc.setAuthor('MyElf Station');
      // Modify doc, fill out the form...
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());
      console.log({ fieldNames });

      const form = pdfDoc.getForm();
      // form.updateFieldAppearances(HelveticaBold);

      const {
        totalEstimatedCost,
        applicant,
        constructionLocation,
        applicationType,
        buildingType,
        characterOfOccupancy,
        buildingPermitNo,
        scopeOfWork,
        dateApproved,
        expectedCompletion,
        bpCertificate,
        signatory,
        occupancyClassified,
      } = element;

      form.getCheckBox('new').uncheck();
      form.getCheckBox('renewal').uncheck();
      form.getCheckBox('amendatory').uncheck();
      console.log({ applicationType });
      console.log({ buildingType });

      switch (applicationType) {
        case 'New':
          form.getCheckBox('new').check();
          break;
        case 'Renewal':
          form.getCheckBox('renewal').check();
          break;
        case 'Amendatory':
          form.getCheckBox('amendatory').check();
          break;
        default:
          break;
      }

      const coo: any = [];
      const scopeOfWorkConsolidated: any = [];

      characterOfOccupancy.forEach((item: { subItems: any[]; groupDescription: any }) => {
        item.subItems?.forEach(subItem => {
          if (subItem.isSelected == true) {
            if (!coo.includes(item.groupDescription)) coo.push(item.groupDescription);
          }
        });
      });

      scopeOfWork.forEach((item: { isSelected: any; description: any }) => {
        if (item.isSelected) {
          if (!coo.includes(item.description)) scopeOfWorkConsolidated.push(item.description);
        }
      });

      const { completeName } = applicant;
      const { barangay, blockNo, cityMun, lotNo, street, tctNo } = constructionLocation;

      await this.setFont(form.getTextField('owner_permittee'), pdfDoc, completeName);
      await this.setFont(form.getTextField('bp_no'), pdfDoc, buildingPermitNo);
      await this.setFont(form.getTextField('street'), pdfDoc, street.toUpperCase());
      await this.setFont(form.getTextField('Lot'), pdfDoc, lotNo.toUpperCase());
      await this.setFont(form.getTextField('Blk'), pdfDoc, blockNo.toUpperCase());
      await this.setFont(form.getTextField('barangay'), pdfDoc, barangay.toUpperCase());
      await this.setFont(form.getTextField('city_mun'), pdfDoc, cityMun.toUpperCase());
      await this.setFont(form.getTextField('zipCode'), pdfDoc, '8500');

      if (bpCertificate) {
        const { fsecNo, fsecDateIssued, orNo, datePaid, created_at, projectTitle } = bpCertificate;
        const _datePaid = this.dateService.formatDate(datePaid);
        const _fsecDateIssued = this.dateService.formatDate(fsecDateIssued);
        const _created_at = this.dateService.formatDate(created_at);

        await this.setFont(form.getTextField('or_no'), pdfDoc, `${orNo ?? ''}`);
        await this.setFont(form.getTextField('date_paid'), pdfDoc, `${_datePaid ?? ''}`);
        await this.setFont(form.getTextField('fsec_no'), pdfDoc, `${fsecNo ?? ''}`);
        await this.setFont(
          form.getTextField('fsec_date_issued'),
          pdfDoc,
          `${_fsecDateIssued ?? ''}`
        );
        await this.setFont(form.getTextField('bp_date_issued'), pdfDoc, `${_created_at ?? ''}`);
        await this.setFont(form.getTextField('OCT No'), pdfDoc, tctNo);
        await this.setFont(form.getTextField('project_title'), pdfDoc, projectTitle ?? '');
      }

      await this.setFont(form.getTextField('character_of_occupancy'), pdfDoc, occupancyClassified);
      await this.setFont(
        form.getTextField('scope_of_work'),
        pdfDoc,
        scopeOfWorkConsolidated.join(', ').toString()
      );
      await this.setFont(
        form.getTextField('total_project_cost'),
        pdfDoc,
        await this.formatNumber(totalEstimatedCost)
      );
      await this.setFont(
        form.getTextField('professional_in_charge'),
        pdfDoc,
        signatory.completeName
      );

      await this.setFont(
        form.getTextField('building_official'),
        pdfDoc,
        'RAMON L. VALENZUELA, MPA'
      );

      form.flatten();

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }
  async printOccupancyCertificate(data: IOccupancyCertificate) {
    const element = data;
    try {
      const secondPdfBytes = await fetch(
        '/assets/pdfs/certificates/occupancy-certificate.pdf'
      ).then(res => res.arrayBuffer());

      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('Building Permit');
      pdfDoc.setAuthor('MyElf Station');
      // Modify doc, fill out the form...
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());
      console.log({ fieldNames });

      const form = pdfDoc.getForm();

      const {
        created_at,
        fsicNo,
        fsicDateIssued,
        occupancyPermitNo,
        feesPaid,
        orNo,
        datePaid,
        type,
        nameOfProject,
        buildingPermit,
      } = data;

      const {
        totalEstimatedCost,
        applicant,
        constructionLocation,
        applicationType,
        characterOfOccupancy,
        buildingPermitNo,
        scopeOfWork,
        dateApproved,
        occupancyClassified,
        expectedCompletion,
        floorArea,
      } = buildingPermit;

      const coo: any = [];
      const scopeOfWorkConsolidated: any = [];

      characterOfOccupancy.forEach(item => {
        item.subItems?.forEach(subItem => {
          if (subItem.isSelected == true) {
            if (!coo.includes(item.groupDescription)) coo.push(item.groupDescription);
            if (!coo.includes(subItem.description)) coo.push(subItem.description);
          }
        });
      });

      scopeOfWork.forEach(item => {
        if (item.isSelected) {
          if (!coo.includes(item.description)) scopeOfWorkConsolidated.push(item.description);
        }
      });

      const { completeName } = applicant;
      form.getTextField('name_of_owner').setText(`${completeName}`);

      const { barangay, blockNo, cityMun, lotNo, street } = constructionLocation;
      form
        .getTextField('located_at')
        .setText(`${lotNo}, ${blockNo}, ${street}, ${barangay}, ${cityMun}`);

      form.getTextField('permit_no').setText(`${occupancyPermitNo ?? ''}`);
      const _created_at = this.dateService.formatDate(created_at);
      form.getTextField('date_issued').setText(`${_created_at}`);

      form.getTextField('fsic_no').setText(`${fsicNo ?? ''}`);
      const _fsicDateIssued = this.dateService.formatDate(fsicDateIssued);
      form.getTextField('fsic_date_issued').setText(`${_fsicDateIssued}`);

      form.getTextField('fees').setText(`${feesPaid ?? ''}`);
      form.getTextField('or_no').setText(`${orNo}`);
      const _datePaid = this.dateService.formatDate(datePaid);
      form.getTextField('date_paid').setText(`${_datePaid}`);
      form.getTextField('name_of_project').setText(`${nameOfProject ?? ''}`);

      const _expectedCompletion = this.dateService.formatDate(expectedCompletion);
      form.getTextField('date_of_completion').setText(`${_expectedCompletion}`);
      form.getTextField('use_or_character_of_occupancy').setText(coo.join(', ').toString());
      form.getTextField('total_floor_area').setText(`${floorArea}`);

      form.getTextField('building_official').setText('RAMON L. VALENZUELA, MPA');
      form.getTextField('bo_date_signed').setText('');

      form.getTextField('bp_no').setText(`${buildingPermitNo}`);
      const _dateApproved = this.dateService.formatDate(dateApproved);
      form.getTextField('bp_date_issuance').setText(`${_dateApproved}`);

      form.getCheckBox('isFull').uncheck();
      form.getCheckBox('isPartial').uncheck();

      const occupancyType = type;
      switch (occupancyType) {
        case 'Full':
          form.getCheckBox('isFull').check();
          break;
        case 'Partial':
          form.getCheckBox('isPartial').check();
          break;
        default:
          break;
      }

      form.flatten();

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }

  async setFont(field: PDFTextField, pdfDoc: PDFDocument, content: any) {
    const HelveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const TimesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
    if (content !== '') {
      field.setText(content);
      field.updateAppearances(HelveticaBold);
    }
  }

  async formatNumber(value: number, options?: Intl.NumberFormatOptions) {
    const locale = 'en-US';
    const formatted = new Intl.NumberFormat(locale, options).format(value);

    return 'Php ' + formatted;
  }

  async printList() {
    // const compiledData: any[] = [];
    // this.ELEMENT_DATA.forEach((element: IBuildingPermitModel) => {
    //   compiledData.push([
    //     { text: element.applicationNo },
    //     { text: 'element.date' },
    //     { text: element.areaNo },
    //     { text: element.firstName },
    //     { text: element.lotNo },
    //     { text: element.blockNo },
    //     { text: element.tctNo },
    //     { text: element.tctNo },
    //     { text: element.street },
    //     { text: element.baranggay },
    //     { text: element.cityMun },
    //     { text: 'element.status' },
    //   ]);
    // });
    // pdfMake
    //   .createPdf({
    //     footer: (currentPage, pageCount) => {
    //       return {
    //         columns: [
    //           {
    //             text: currentPage.toString() + ' of ' + pageCount.toString(),
    //             alignment: 'right',
    //             margin: [0, 0, 50, 0],
    //           },
    //         ],
    //       };
    //     },
    //     // function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount },
    //     // header: function(currentPage, pageCount, pageSize) {
    //     //   // you can apply any logic and return any valid pdfmake element
    //     //   return [
    //     //     { text: 'simple text', alignment: (currentPage % 2) ? 'left' : 'right' },
    //     //     { canvas: [ { type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 } ] }
    //     //   ]
    //     // },
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
    //         margin: [0, 20, 0, 20],
    //         text: `${this.printTitle} PERMIT LIST`,
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
    //           // heights: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    //           widths: [
    //             '*',
    //             '*',
    //             'auto',
    //             'auto',
    //             'auto',
    //             'auto',
    //             'auto',
    //             'auto',
    //             '*',
    //             '*',
    //             '*',
    //             'auto',
    //           ],
    //           body: [
    //             [
    //               {
    //                 text: 'Application Code',
    //                 style: 'tableHeader',
    //                 rowSpan: 2,
    //                 margin: [0, 10, 0, 0],
    //               },
    //               { text: 'Trans Date', style: 'tableHeader', rowSpan: 2, margin: [0, 10, 0, 0] },
    //               { text: 'Area Code', style: 'tableHeader', rowSpan: 2, margin: [0, 10, 0, 0] },
    //               {
    //                 text: 'Application Name',
    //                 style: 'tableHeader',
    //                 rowSpan: 2,
    //                 margin: [0, 10, 0, 0],
    //               },
    //               { text: 'Address of Property', style: 'tableHeader', colSpan: 7 },
    //               {},
    //               {},
    //               {},
    //               {},
    //               {},
    //               {},
    //               { text: 'Status', style: 'tableHeader', rowSpan: 2, margin: [0, 20, 0, 0] },
    //             ],
    //             [
    //               { text: 'Application Code', style: 'tableHeader' },
    //               { text: 'Date', style: 'tableHeader' },
    //               { text: 'Area Code', style: 'tableHeader' },
    //               { text: 'Application Name', style: 'tableHeader' },
    //               { text: 'Lot No', style: 'tableHeader' },
    //               { text: 'Block No', style: 'tableHeader' },
    //               { text: 'TCT No', style: 'tableHeader' },
    //               { text: 'TD No', style: 'tableHeader' },
    //               { text: 'St', style: 'tableHeader', margin: [0, 5, 0, 0] },
    //               { text: 'Baranggay', style: 'tableHeader', margin: [0, 5, 0, 0] },
    //               { text: 'City/Mun', style: 'tableHeader', margin: [0, 5, 0, 0] },
    //               { text: 'Status', style: 'tableHeader', margin: [0, 5, 0, 0] },
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
