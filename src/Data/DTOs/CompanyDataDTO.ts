import { Responses } from "openai/resources.mjs";

class CompanyDataDTO {
  constructor(
    public company_name: string,
    public service_line: string[] | null,
    public company_description: string | null,
    public website: string,
    public tier1_keywords: string[] | null,
    public tier2_keywords: string[] | null,
    public emails: string[] | null,
    public poc: string | null
  ) {}

  static fromOpenAiCompletion(response: Responses.Response): CompanyDataDTO {
    try {
      const responseText = response.output_text
        .replace(/```json/g, "")
        .replace(/```/g, "");
      const data = JSON.parse(responseText);

      return new CompanyDataDTO(
        data.company_name,
        data.service_line,
        data.company_description,
        data.website,
        data.tier1_keywords,
        data.tier2_keywords,
        data.emails,
        data.poc
      );
    } catch (error) {
      console.error("Error parsing OpenAI response:", error);
      throw new Error("Failed to parse OpenAI response");
    }
  }
}

export default CompanyDataDTO;
