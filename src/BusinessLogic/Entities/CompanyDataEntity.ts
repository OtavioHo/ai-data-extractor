class CompanyDataEntity {
  constructor(
    public company_name: string,
    public service_line: string[],
    public company_description: string,
    public website: string,
    public tier1_keywords: string[],
    public tier2_keywords: string[],
    public emails: string[],
    public poc: string
  ) {}
}

export default CompanyDataEntity;
