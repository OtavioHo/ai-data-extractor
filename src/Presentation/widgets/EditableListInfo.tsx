import React, { useState } from "react";

const EditableInfo: React.FC<{ initialInfo: string[]; label: string }> = ({
  initialInfo,
  label,
}) => {
  const [isAdding, setisAdding] = useState(false);
  const [info, setInfo] = useState(initialInfo);
  const [inputValue, setInputValue] = useState("");

  const handleEditClick = () => {
    setisAdding(true);
  };

  const handleInputSubmit = () => {
    setInfo([...info, inputValue]);
    setisAdding(false);
    setInputValue("");
  };

  const handleInputBlur = () => {
    setisAdding(false);
  };

  return (
    <div className="flex flex-col gap-1 py-2 border-b-1 border-gray-300">
      <div className="flex justify-between gap-2">
        <label className="text-gray-500 text-sm">{label}</label>
        <span
          className="text-blue-500 cursor-pointer hover:text-blue-700"
          onClick={handleEditClick}
          title="Edit"
        >
          add
        </span>
      </div>
      <>
        <div className="flex flex-wrap gap-2">
          {info.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full flex items-center gap-2"
            >
              {item}
              <button
                className="focus:outline-none"
                onClick={() => {
                  setInfo(info.filter((_, i) => i !== index));
                }}
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </>
      <div className="flex justify-between gap-2">
        {isAdding && (
          <input
            type="text"
            onBlur={handleInputBlur}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleInputSubmit();
                handleInputBlur();
              }
            }}
            autoFocus
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        )}
      </div>
    </div>
  );
};

export default EditableInfo;
