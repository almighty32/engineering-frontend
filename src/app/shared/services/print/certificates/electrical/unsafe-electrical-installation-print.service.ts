import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { IIllegalElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iillegal-electrical-installation-model';
import { IUnsafeElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iunsafe-electrical-installation-model';
import { DateService } from '@shared/services/date.service';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class UnsafeElectricalInstallationPrintService {
  fileName = 'notice_of_unsafe_electrical_installation';

  constructor(private dateService: DateService) {}
  async print(data: IUnsafeElectricalInstallationModel) {
    // TODO: Uncomment this as a whole
    // const element = data;
    // try {
    //   const secondPdfBytes = await fetch(
    //     `/assets/pdfs/certificates/electrical/${this.fileName}.pdf`
    //   ).then(res => res.arrayBuffer());
    //   const pdfDoc = await PDFDocument.load(secondPdfBytes);
    //   pdfDoc.setTitle('Unsafe Electrical Installation Certificate');
    //   // Modify doc, fill out the form...
    //   const fieldNames = pdfDoc
    //     .getForm()
    //     .getFields()
    //     .map(f => f.getName());
    //   const form = pdfDoc.getForm();
    //   const { applicant, constructionLocation, formOfOwnership } =
    //     element.electricalPermit.buildingPermit;
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
    //   const {
    //     dateIssued,
    //     inspectionDate,
    //     electricalInspector,
    //     electricalInspectorDateSigned,
    //     chiefElectricalSection,
    //     chiefElectricalSectionDateSigned,
    //     chiefInspectionEnforcementDivision,
    //     chiefInspectionEnforcementDivisionDateSigned,
    //     buildingOfficial,
    //     buildingOfficialDateSigned,
    //     receivedByCompleteName,
    //     fee,
    //     orNo,
    //     datePaid,
    //     referenceNo,
    //     meterAccountNo,
    //     defects,
    //   } = element;
    //   const { totalConnectionLoad, totalGeneratorCapacity, totalTransformerCapacity } =
    //     element.electricalPermit;
    //   form.getTextField('Reference No').setText(referenceNo);
    //   form.getTextField('MeterAccount No').setText(meterAccountNo);
    //   form
    //     .getTextField('OWNER OF BUILDING')
    //     .setText(
    //       `${firstName.toUpperCase()} ${middleInitial.toUpperCase()} ${lastName.toUpperCase()}`
    //     );
    //   form.getTextField('on').setText(`${this.dateService.formatDate(inspectionDate)}`);
    //   form.getTextField('address no').setText(`${addressNo}`);
    //   form.getTextField('address st').setText(`${addressStreet}`);
    //   form.getTextField('address brgy').setText(` ${addressBarangay}`);
    //   form.getTextField('address city mun').setText(`${addressCity}`);
    //   form.getTextField('list of defects').setText(`${defects}`);
    //   form.getTextField('kVA').setText(`${totalConnectionLoad}`);
    //   form.getTextField('kVA_2').setText(`${totalGeneratorCapacity}`);
    //   form.getTextField('kVA_3').setText(`${totalTransformerCapacity}`);
    //   form
    //     .getTextField('electrical_inspector')
    //     .setText(`${electricalInspector.completeName.toUpperCase()}`);
    //   form
    //     .getTextField('Date')
    //     .setText(`${this.dateService.formatDate(electricalInspectorDateSigned)}`);
    //   form.getTextField('PRC REG NO').setText(`${electricalInspector.prcNo}`);
    //   form.getTextField('VALIDITY').setText(`${electricalInspector.validity}`);
    //   form
    //     .getTextField('cheif_electrical')
    //     .setText(`${chiefElectricalSection.completeName.toUpperCase()}`);
    //   form
    //     .getTextField('Date_2')
    //     .setText(`${this.dateService.formatDate(chiefElectricalSectionDateSigned)}`);
    //   form.getTextField('PRC REG NO_2').setText(`${chiefElectricalSection.prcNo}`);
    //   form.getTextField('VALIDITY_2').setText(`${chiefElectricalSection.validity}`);
    //   form
    //     .getTextField('cheif_inspection')
    //     .setText(`${chiefInspectionEnforcementDivision.completeName.toUpperCase()}`);
    //   form
    //     .getTextField('Date_3')
    //     .setText(`${this.dateService.formatDate(chiefInspectionEnforcementDivisionDateSigned)}`);
    //   form.getTextField('bo').setText(`${buildingOfficial.completeName.toUpperCase()}`);
    //   form
    //     .getTextField('Date_4')
    //     .setText(`${this.dateService.formatDate(buildingOfficialDateSigned)}`);
    //   form.getTextField('owner_representative').setText(`${receivedByCompleteName.toUpperCase()}`);
    //   form.getTextField('Date_5').setText(`${this.dateService.formatDate(dateIssued)}`);
    //   form.getTextField('INSPECTION FEE P').setText(`${fee}`);
    //   form.getTextField('OR NO').setText(`${orNo}`);
    //   form.getTextField('OR DATE').setText(`${this.dateService.formatDate(datePaid)}`);
    //   const pdfBytes = await pdfDoc.save();
    //   const file = new Blob([pdfBytes], { type: 'application/pdf' });
    //   const fileURL = URL.createObjectURL(file);
    //   window.open(fileURL);
    // } catch (err) {
    //   console.log(err);
    // }
  }
}
