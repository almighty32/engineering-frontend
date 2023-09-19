export interface IApplicant {
  id?: string;
  lastName: string;
  firstName: string;
  middleInitial: string;
  companyName: string;
  tin: string;
  completeName?: string;
  addressNo: string;
  addressStreet: string;
  addressBarangay: string;
  addressCity: string;
  addressZipCode: string;
  contactNo: string;
}
