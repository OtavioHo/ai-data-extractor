import { GptDataExtractorDataSource } from "../../Data/DataSource/GptDataExtractorDataSource";
import CompanyDataEntity from "../Entities/CompanyDataEntity";
import { DataExtractorRepositoryInterface } from "./DataExtractorRepositoryInterface";

export class GptDataExtractorRepository
  implements DataExtractorRepositoryInterface
{
  private dataSource: GptDataExtractorDataSource;

  constructor(dataSource: GptDataExtractorDataSource) {
    this.dataSource = dataSource;
  }
  async extractCompanyData(url: string): Promise<CompanyDataEntity> {
    try {
      const data = await this.dataSource.extractData(url);
      const companyData = new CompanyDataEntity(
        data.company_name,
        data.service_line || [],
        data.company_description || "",
        data.website,
        data.tier1_keywords || [],
        data.tier2_keywords || [],
        data.emails || [],
        data.poc || ""
      );
      return companyData;
    } catch (error) {
      console.error("Error extracting company data:", error);
      throw error;
    }
  }
}
