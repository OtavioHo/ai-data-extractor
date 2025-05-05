import React, { useState } from "react";

const EditableInfo: React.FC<{ initialInfo: string; label: string }> = ({
  initialInfo,
  label,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState(initialInfo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-1 py-2 border-b-1 border-gray-300">
      <label className="text-gray-500 text-sm">{label}</label>
      <div className="flex justify-between gap-2">
        {isEditing ? (
          <input
            type="text"
            value={info}
            onChange={handleInputSubmit}
            onBlur={handleInputBlur}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleInputBlur();
              }
            }}
            autoFocus
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        ) : (
          <>
            <span className="text-gray-700">{info}</span>
            <span
              className="text-blue-500 cursor-pointer hover:text-blue-700"
              onClick={handleEditClick}
              title="Edit"
            >
              edit
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default EditableInfo;
