import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { IElectricalInspectionModel } from '@shared/model/interface/certificates/electical/ielectrical-inspection-model';
import { IElectricalWorkCompletionModel } from '@shared/model/interface/certificates/electical/ielectrical-work-completion-model';
import { IIllegalElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iillegal-electrical-installation-model';
import { IUnsafeElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iunsafe-electrical-installation-model';
import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { ITemporaryServiceConnectionModel } from '@shared/model/interface/itemporary-service-connection-model';
import { PDFDocument } from 'pdf-lib';
import { DateService } from '../../../date.service';

@Injectable({
  providedIn: 'root',
})
export class ElectricalWorksCompletionPrintService {
  fileName = 'certificate_of_final_electrical_inspection';

  constructor(private dateService: DateService) {}

  async print(data: IElectricalWorkCompletionModel) {
    const element = data;
    try {
      const secondPdfBytes = await fetch(`${this.fileName}.pdf`).then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('Automatic or Manual Transfer Switch');

      //! TODO: put your code below
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map(f => f.getName());
      console.log({ fieldNames });
      const form = pdfDoc.getForm();
      // form.getTextField('address no').setText(`${addressNo}`);

      const pdfBytes = await pdfDoc.save();
      const file = new Blob([pdfBytes], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (err) {
      console.log(err);
    }
  }
}
