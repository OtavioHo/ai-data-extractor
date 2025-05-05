import CompanyDataEntity from "../Entities/CompanyDataEntity";

export interface DataExtractorRepositoryInterface {
  extractCompanyData(url: string): Promise<CompanyDataEntity>;
}
