import { useState } from "react";

import { GptDataExtractorDataSource } from "./Data/DataSource/GptDataExtractorDataSource";
import CompanyDataEntity from "./BusinessLogic/Entities/CompanyDataEntity";
import { GptDataExtractorRepository } from "./BusinessLogic/Repositories/GptDataExtractorRepository";
import CompanyInfoCard from "./Presentation/widgets/CompanyInfoCard";
import Loading from "./Presentation/widgets/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [companyData, setCompanyData] = useState<CompanyDataEntity | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const dataExtractorRepository = new GptDataExtractorRepository(
    new GptDataExtractorDataSource()
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const inputText = formData.get("inputText") as string;
    try {
      const data = await dataExtractorRepository.extractCompanyData(inputText);
      setCompanyData(data);
      setError(null);
    } catch (error) {
      setError("Failed to extract company data. Please try again.");
      console.error("Error extracting company data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-4 bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 max-w-md text-center">
        Company site data extractor
      </h1>
      <p className="text-gray-600 max-w-sm text-center">
        Enter the URL of the company site you want to extract data from.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputText"
          placeholder="Enter text"
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white max-w-lg"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      {isLoading && <Loading />}
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      {!!companyData && !isLoading && <CompanyInfoCard company={companyData} />}
    </div>
  );
}

export default App;
