import { Injectable } from '@angular/core';
import { IDemolitionPermitModel } from '@shared/model/interface/idemolition-permit-model';
import { PDFDocument } from 'pdf-lib';
import { DateService } from '../../date.service';

@Injectable({
  providedIn: 'root',
})
export class DemolitionPermitPrintService {
  constructor(private dateService: DateService) {}

  async print(data: IDemolitionPermitModel) {
    const element = data;
    try {
      const secondPdfBytes = await fetch('/assets/pdfs/demolition_permit_form.pdf').then(res =>
        res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('Demolition Permit');
      pdfDoc.setAuthor('MyElf Station');
      // Modify doc, fill out the form...
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());
      console.log({ fieldNames });

      const form = pdfDoc.getForm();

      const { applicant, constructionLocation, formOfOwnership } = element.building;
      const {
        id,
        firstName,
        lastName,
        middleInitial,
        tin,
        addressNo,
        addressStreet,
        addressBarangay,
        addressCity,
        addressZipCode,
        contactNo,
      } = applicant;
      const { lotNo, blockNo, tctNo, taxDecNo, street, barangay, cityMun } = constructionLocation;

      const areaNo = element.applicationNo;
      const applicationNo = element.applicationNo;
      const bpNo = element.building.buildingPermitNo;

      const cutAreaNo = areaNo.slice(0, 8);
      const cutApplicationNo = applicationNo.slice(0, 10);
      const buildingPermitNo = bpNo.slice(0, 8);

      form.getTextField('APPLICATION_NO').setText(cutApplicationNo);
      form.getTextField('DP_NO').setText(cutAreaNo);
      form.getTextField('BUILDING_PERMIT_NO').setText(buildingPermitNo);

      form.getTextField('FIRST_NAME').setText(firstName.toUpperCase());
      form.getTextField('LAST_NAME').setText(lastName.toUpperCase());
      form.getTextField('MIDDLE_INITIAL').setText(middleInitial.toUpperCase());

      form.getTextField('FORM_OF_OWNERSHIP').setText(formOfOwnership);
      form.getTextField('USE_OR_CHARACTER_OF_OCCUPANCY').setText('');
      form.getTextField('NO').setText(addressNo);
      form.getTextField('ADDRESS_STREET').setText(addressStreet.toUpperCase());
      form.getTextField('ADDRESS_BARANGAY').setText(addressBarangay.toUpperCase());
      form.getTextField('ADDRESS_CITY_MUN').setText(addressCity.toUpperCase());
      form.getTextField('ADDRESS_ZIP_CODE').setText(addressZipCode);

      form.getTextField('LOT NO').setText(lotNo);
      form.getTextField('BLK NO').setText(blockNo);
      form.getTextField('TCT NO').setText(tctNo);
      form.getTextField('TAX DEC NO').setText(taxDecNo);
      form.getTextField('STREET').setText(street.toUpperCase());
      form.getTextField('BARANGAY').setText(barangay.toUpperCase());
      form.getTextField('CITY MUNICIPALITY OF').setText(cityMun.toUpperCase());

      if (element.inspectorOrSupervisor) {
        const { completeName, address, prcNo, ptrNo, issuedAt, validity, dateIssued, tinNo } =
          element.inspectorOrSupervisor;

        form.getTextField('SUPERVISOR').setText(completeName.toUpperCase());
        form.getTextField('SUP_ADDRESS').setText(address.toUpperCase());
        form.getTextField('SUP_PRC_NO').setText(prcNo.toUpperCase());
        form.getTextField('SUP_PTR_NO').setText(ptrNo.toUpperCase());
        form.getTextField('SUP_ISSUED_AT').setText(issuedAt.toUpperCase());
        form.getTextField('SUP_VALIDITY').setText(validity.toUpperCase());
        form.getTextField('SUP_DATE_ISSUED').setText(dateIssued.toUpperCase());
        form.getTextField('SUP_TIN').setText(tinNo.toUpperCase());
      }

      if (element.isDemolition) {
        form.getCheckBox('DEMOLITION_CHECKBOX').check();
      }

      if (element.otherScopeOfWork != '') {
        form.getCheckBox('OTHER_SCOPE_OF_WORK').check();
      }

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
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
    // ELEMENT_DATA.forEach((element: PeriodicElement) => {
    //   compiledData.push([
    //     { text: element.applicationCode },
    //     { text: element.date },
    //     { text: element.areaCode },
    //     { text: element.fullname },
    //     { text: element.lotNo },
    //     { text: element.blockNo },
    //     { text: element.tctNo },
    //     { text: element.tctNo },
    //     { text: element.propStreet },
    //     { text: element.propBrg },
    //     { text: element.propCityMun },
    //     { text: element.status },
    //   ]);
    // });
    // const printTitle = 'DEMOLITION';
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
