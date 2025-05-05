import CompanyDataDTO from "../DTOs/CompanyDataDTO";

export interface DataExtractorDataSourceInterface {
  extractData(url: string): Promise<CompanyDataDTO>;
}
