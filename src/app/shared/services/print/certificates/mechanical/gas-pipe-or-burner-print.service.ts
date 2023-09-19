import { Injectable } from '@angular/core';
import { IAutomaticManualTransferSwitchModel } from '@shared/model/interface/certificates/electical/iautomatic-manual-transfer-switch-model';
import { IElectricalInspectionModel } from '@shared/model/interface/certificates/electical/ielectrical-inspection-model';
import { IGasPipeBurnerModel } from '@shared/model/interface/certificates/mechanical/igas-pipe-burner-model';
import { PDFDocument } from 'pdf-lib';
import { DateService } from '../../../date.service';

@Injectable({
  providedIn: 'root',
})
export class GaspipeOrBurnerPrintService {
  fileName = 'coo_gas_pipe_or_burner';

  constructor(private dateService: DateService) {}

  async print(data: IGasPipeBurnerModel) {
    const element = data;
    try {
      const secondPdfBytes = await fetch(
        `/assets/pdfs/certificates/mechanical/${this.fileName}.pdf`
      ).then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(secondPdfBytes);
      pdfDoc.setTitle('Gas Pipe and Burner');

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
