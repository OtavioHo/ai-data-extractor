const GPTConfig = {
  // apiKey: process.env.OPENAI_API_KEY || "",
  model: "gpt-4o-mini",
  instructions: `Respond in a json format without any markdown annotation, 
   with the following keys: company_name,
   service_line as an array of strings containing all the service lines found,
   company_description, tier1_keywords as an array of strings, 
   tier2_keywords as an array of strings, emails as an array of strings, 
   poc being the point of contact, if not available, return null.
   Do not assume any values based on conventions. 
   Get the information from the website, and linkedin profile.
   otherwise get it from the website.
   If the information is not available, return null for that key.`,
  input: (url: string) => "Extract data from the website: " + url,
};

export default GPTConfig;
