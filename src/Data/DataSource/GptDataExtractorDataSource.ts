import GPTConfig from "../../gpt.config";
import CompanyDataDTO from "../DTOs/CompanyDataDTO";
import { DataExtractorDataSourceInterface } from "./DataExtractorDataSourceInterface";
import OpenAI from "openai";

export class GptDataExtractorDataSource
  implements DataExtractorDataSourceInterface
{
  async extractData(endpoint: string): Promise<CompanyDataDTO> {
    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const response = await openai.responses.create({
        model: GPTConfig.model,
        instructions: GPTConfig.instructions,
        input: GPTConfig.input(endpoint),
      });

      return CompanyDataDTO.fromOpenAiCompletion(response);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
