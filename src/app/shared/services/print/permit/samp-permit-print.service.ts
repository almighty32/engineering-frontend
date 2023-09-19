import { Injectable } from '@angular/core';
import { IArchitecturalModel } from '@shared/model/interface/architectural-permit/i-architectural-permit';
import { PDFDocument } from 'pdf-lib';
import { DateService } from '../../date.service';

@Injectable({
  providedIn: 'root',
})
export class SamplePermitPrintService {
  constructor(private dateService: DateService) {}

  async print(data: IArchitecturalModel) {
    const element = data;
  }

  async printList() {}
}
