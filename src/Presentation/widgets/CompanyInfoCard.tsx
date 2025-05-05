import React from "react";
import CompanyDataEntity from "../../BusinessLogic/Entities/CompanyDataEntity";
import EditableInfo from "./EditableInfo";
import EditableListInfo from "./EditableListInfo";

interface CompanyInfoCardProps {
  company: CompanyDataEntity;
}

const CompanyInfoCard: React.FC<CompanyInfoCardProps> = ({ company }) => {
  return (
    <div className="company-info-card bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {company.company_name}
      </h2>
      <EditableInfo
        initialInfo={company.company_description}
        label="Description"
      />
      <EditableListInfo
        initialInfo={company.service_line}
        label="Service line"
      />
      <EditableListInfo
        initialInfo={company.tier1_keywords}
        label="Tier 1 Keywords"
      />
      <EditableListInfo
        initialInfo={company.tier2_keywords}
        label="Tier 2 Keywords"
      />
      <EditableInfo initialInfo={company.poc} label="Point of contact" />
      <EditableListInfo initialInfo={company.emails} label="Emails" />
      <p>
        <a href={company.website} target="_blank" rel="noopener noreferrer">
          {company.website}
        </a>
      </p>
    </div>
  );
};

export default CompanyInfoCard;
