import { Injectable } from '@angular/core';
import { IIllegalElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iillegal-electrical-installation-model';
import { DateService } from '@shared/services/date.service';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class IllegalElectricalInstallationPrintService {
  fileName = 'notice_of_illegal_electrical_installation';
  constructor(private dateService: DateService) {}

  async print(data: IIllegalElectricalInstallationModel) {
    const element = data;
    try {
      const secondPdfBytes = await fetch(
        `/assets/pdfs/certificates/electrical/${this.fileName}.pdf`
      ).then(res => res.arrayBuffer());

      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('Illegal Electrical Installation Certificate');
      // Modify doc, fill out the form...
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());
      console.log({ fieldNames });

      const form = pdfDoc.getForm();

      const { applicant, constructionLocation, formOfOwnership } =
        element.electricalPermit.buildingPermit;
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

      const {
        dateIssued,
        electricalInspector,
        electricalInspectorDateSigned,
        chiefElectricalSection,
        chiefElectricalSectionDateSigned,
        chiefInspectionEnforcementDivision,
        chiefInspectionEnforcementDivisionDateSigned,
        buildingOfficial,
        buildingOfficialDateSigned,
        receivedByCompleteName,
        inspectionFee,
        orNo,
        datePaid,
      } = element;

      const _chiefElectricalSectionDateSigned = this.dateService.formatDate(
        chiefElectricalSectionDateSigned
      );
      const _chiefInspectionEnforcementDivisionDateSigned = this.dateService.formatDate(
        chiefInspectionEnforcementDivisionDateSigned
      );
      const _buildingOfficialDateSigned = this.dateService.formatDate(buildingOfficialDateSigned);
      const _dateIssued = this.dateService.formatDate(dateIssued);
      const _datePaid = this.dateService.formatDate(datePaid);

      form.getTextField('Date').setText(`${_dateIssued}`);
      form.getTextField('1').setText(`${firstName} ${middleInitial} ${lastName}`);
      form.getTextField('2').setText(`${addressNo}, ${addressStreet}, ${addressBarangay}`);
      form.getTextField('3').setText(`${addressZipCode}, ${addressCity}`);

      form
        .getTextField('electrical_inspector')
        .setText(`${electricalInspector.completeName.toUpperCase()}`);
      form
        .getTextField('Date_2')
        .setText(`${this.dateService.formatDate(electricalInspectorDateSigned)}`);
      form.getTextField('PRC REG NO').setText(`${electricalInspector.prcNo}`);
      form.getTextField('VALIDITY').setText(`${electricalInspector.validity}`);

      form
        .getTextField('cheif_electrical')
        .setText(`${chiefElectricalSection.completeName.toUpperCase()}`);
      form.getTextField('Date_3').setText(`${chiefElectricalSectionDateSigned}`);

      form
        .getTextField('cheif_electrical')
        .setText(`${chiefElectricalSection.completeName.toUpperCase()}`);

      form.getTextField('Date_3').setText(`${_chiefElectricalSectionDateSigned}`);
      form.getTextField('PRC REG NO_2').setText(`${chiefElectricalSection.prcNo}`);
      form.getTextField('VALIDITY_2').setText(`${chiefElectricalSection.validity}`);

      form
        .getTextField('cheif_inspection')
        .setText(`${chiefInspectionEnforcementDivision.completeName.toUpperCase()}`);
      form.getTextField('Date_4').setText(`${_chiefInspectionEnforcementDivisionDateSigned}`);

      form.getTextField('bo').setText(`${buildingOfficial.completeName.toUpperCase()}`);

      form.getTextField('Date_5').setText(`${_buildingOfficialDateSigned}`);

      form.getTextField('owner_representative').setText(`${receivedByCompleteName.toUpperCase()}`);
      form.getTextField('Date_6').setText(`${_dateIssued}`);

      form.getTextField('INSPECTION FEE P').setText(`${inspectionFee}`);
      form.getTextField('OR NO').setText(`${orNo}`);

      form.getTextField('OR DATE').setText(`${_datePaid}`);

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }
}
