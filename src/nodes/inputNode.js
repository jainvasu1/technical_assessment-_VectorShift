// inputNode.js (Tailwind Styled)

import { useState, useEffect } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setCurrName(newName);
    updateNodeField(id, "inputName", newName);
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setInputType(newType);
    updateNodeField(id, "inputType", newType);
  };

  useEffect(() => {
    updateNodeField(id, "inputName", currName);
    updateNodeField(id, "inputType", inputType);
  }, []);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      outputHandles={[{ id: `${id}-value`, name: "value" }]}
    >
      <div className="flex flex-col gap-3">

        {/* Name Field */}
        <label className="flex flex-col text-xs font-medium text-gray-700 gap-1">
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="
              p-2 border rounded-md 
              border-gray-300 focus:ring-2 focus:ring-indigo-400 
              outline-none text-sm
            "
          />
        </label>

        {/* Type Field */}
        <label className="flex flex-col text-xs font-medium text-gray-700 gap-1">
          Type:
          <select
            value={inputType}
            onChange={handleTypeChange}
            className="
              p-2 border rounded-md 
              border-gray-300 bg-white
              focus:ring-2 focus:ring-indigo-400 
              outline-none text-sm
            "
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
